import React from 'react';
import { connect } from 'react-redux';
import Result from '../components/result';
import { Link,Redirect} from 'react-router-dom';
import * as actionCreators from '../store/actions/index';
import Button from '@material-ui/core/Button';
const results = (props) => {
   let score = 0;
    for(let i=0;i<props.cnt;i++){
        if(props.selected[i] === props.correct[i])
        score++;
  }
  const resultBlock = [];
  for(let index=0;index<props.cnt;index++) {
      resultBlock.push(<Result 
        key={index}
        num={index}
        ques={props.ings[index]}
        correct={props.correct[index]} 
        selected={props.selected[index]}/>);
  }
  let reblock = null;
  if(props.reload)
    reblock = (<Redirect to='/'/>);
    return(
    <div>
        <footer >Quiz Game</footer>
        <h1>Results</h1>
        <h2>Your score is : {score}</h2>
        {resultBlock}
        <Link to = '/'>
        <Button onClick={props.againHandler} color="primary" variant="contained">Play Again</Button>
        </Link>
        {reblock}
    </div>
        
    );
}
const mapStateToProps = state => {
	return {
        ings: state.quiz.allquestions,
        correct: state.quiz.correctanswer,
        selected: state.quiz.answer,
        cnt: state.quiz.counter,
        reload: state.quiz.reload
		
	}
}

const mapDispatchToProps = dispatch => {
    return {
        againHandler: () => dispatch(actionCreators.reload())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(results);