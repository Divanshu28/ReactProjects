import * as actionTypes from '../actions/actionTypes';

const initialstate = {
    counter: 0,
    questionId: 1,
    allquestions: [],
    correctanswer: [],
    answer: [],
    load: false,
    error: false,
    flag: false
}


const reducer = (state=initialstate,action) => {
    switch(action.type){
        case(actionTypes.ADD_QUESTIONS):
            return {
                ...state,
                score: state.score + action.val

            }
        case(actionTypes.SET_QUESTIONS):
            return {
                ...state,
                allquestions: action.ques,
                load: true,
                
            }
        case(actionTypes.ADD_ANSWERS):
            return {
                ...state,
                correctanswer: action.ans,
                
            }
        case(actionTypes.ADD_SELECTED):
            return {
                ...state,
                counter: state.counter +1,
                questionId: state.questionId + 1,
                answer: state.answer.concat(action.selected)
            }
        case(actionTypes.FETCH_QUESTIONS_FAILED):
            return {
                ...state,
                error: true
            }
        case(actionTypes.RELOAD):
            return{
                ...initialstate
            }
        default:
             return {...state};
    }    
}

export default reducer;