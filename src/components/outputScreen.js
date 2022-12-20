import React from 'react';
import OutputScreenRow from './outputScreenRow.js';

const OutputScreen = (props) => {
    return (
	    <div className="screen" id={props.id}>
	        {props.output}
	    </div>
    )
}

export default OutputScreen;