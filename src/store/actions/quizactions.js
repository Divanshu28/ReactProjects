import * as actionTypes from './actionTypes';
import axios from 'axios';

export const addQuestion = (val) => {
    return {
        type: actionTypes.ADD_QUESTIONS,
        val: val
    }
};

export const setQuestions = (questions) => {
    return {
        type: actionTypes.SET_QUESTIONS,
        ques: questions,
    }
}

export const fetchQuestionsFailed = () => {
    return {
        type: actionTypes.FETCH_QUESTIONS_FAILED
    };
}

export const setAnswers = (answers) => {
    return {
        type: actionTypes.ADD_ANSWERS,
        ans: answers
    }
}

export const addSelected = (selected) => {

    return {
        type: actionTypes.ADD_SELECTED,
        selected: selected
    }
}

export const reload = () => {
    return {
        type:actionTypes.RELOAD
    }
}

export const initQuestions = () => {
    return dispatch => {
        axios.get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
	.then(response => {
        let updatedQues = [];
        let updatedans = [];
        response.data.results.map(item => {
            updatedQues.push(item.question);
            updatedans.push(item.correct_answer);
        });
        dispatch(setQuestions(updatedQues));
        dispatch(setAnswers(updatedans));
	})
	.catch(error => dispatch(fetchQuestionsFailed()))
    };
};