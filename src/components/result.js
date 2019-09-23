import React from 'react';
import classes from './result.css';
const result = (props) => {
    const divStyle = {
        color: 'green',
      };
    return(
        <div>
            <h4>Q:{props.num + 1} {props.ques}</h4>
            <p className={classes.pa}>Correct Answer: <b>{props.correct}</b></p>
            <p>Your Answer:<b>{props.selected}</b></p>
        </div>
    )
}

export default result;