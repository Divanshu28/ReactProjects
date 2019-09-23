import React from 'react';
import Options from './options';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup';
const questions = (props) => {
    let next = (<Button onClick={props.next} color="primary" variant="contained">Next</Button>);
    let results = null;
    if(props.counter === 9){
        next = (<Button disabled color="primary" variant="contained">Next</Button>)
        results = (<Button onClick={props.reshandle} color="primary" variant="contained">Results</Button>)
    }
    
    return(
        <div>
            <h2>Question No. {props.count} of 10</h2>
            <p>{props.ques}</p>
            <RadioGroup>
            <Options val="True" ans={props.anshandle}/>
            <Options val="False" ans={props.anshandle}/>
            </RadioGroup>
            <br/>
            {next}
            <br/>
            <br/>
            {results}
        </div>
    )
}
export default questions;