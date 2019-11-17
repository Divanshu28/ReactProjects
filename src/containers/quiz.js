import React,{Component} from 'react';
import Questions from '../components/questions/questions';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/index';
import CircularProgress from '@material-ui/core/CircularProgress';
class Quiz extends Component {
state = {
    selectedanswer: 'NA',
    loading: true
}
componentDidMount() {
    this.props.initQuestions();
}

resultHandler= () => {
    this.props.nextHandler(this.state.selectedanswer);
    this.props.history.push('/results');
}

answerHandler = (event) => {
this.setState({
    selectedanswer: event.currentTarget.value
})
}

    render() {
        const errrPage = <p>Error Loding Quiz</p>
        const quizPage =  (<div>
        <header>Quiz Time</header>
        <h1>Starting quiz be like...Hell</h1>
        <Questions count={this.props.qid} 
        counter={this.props.cnt} 
        next={() => this.props.nextHandler(this.state.selectedanswer)} 
        ques={this.props.ings[this.props.cnt]}
        anshandle={this.answerHandler}
        reshandle={this.resultHandler}/>    
        </div>);
        let quizSummary = (<CircularProgress/>)
        if(this.props.load) {
				
                quizSummary = this.props.error ? errrPage : quizPage ;
            }
        return(
            <div>
                 {quizSummary}
            </div>
          
        );
    }
}
const mapStateToProps = state => {
	return {
        cnt: state.quiz.counter,
        qid: state.quiz.questionId,
		ings: state.quiz.allquestions,
        error: state.quiz.error,
        load: state.quiz.load
	}
}

const mapDispatchToProps = dispatch => {
    return {
        handler: (ques) => dispatch(actionCreators.addQuestion(ques)),
        initQuestions: () => dispatch(actionCreators.initQuestions()),
        nextHandler : (select) => dispatch(actionCreators.addSelected(select))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Quiz);
