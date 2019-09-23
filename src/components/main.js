import React from 'react';
import classes from './main.css';
import Button from '@material-ui/core/Button';
const main = (props) => 
{
    const handleChange = () => {
        props.history.push('/start-quiz');
    }
return(
    <div className={classes.main}>
        <footer >Quiz Time</footer>
            <h1 className={classes.h}>Are you ready?</h1>
            <h3>Let the play begin......!</h3>
        <Button onClick={handleChange} color="primary" variant="contained">Start Quiz</Button>
    </div>
     
);
}

export default main;
