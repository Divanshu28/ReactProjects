import React from 'react';
import Radio from '@material-ui/core/Radio'
const options = (props) => {

    return(
        <label>
            <Radio name="options" value={props.val} onChange={props.ans} color="primary"/>
            {props.val}
        </label>
    )
}

export default options;