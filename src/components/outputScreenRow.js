import React from 'react';

const OutputScreenRow = (props) => {
    return (
	    <div className="screen-row" id={props.id}>
	        {props.input}
	    </div>
    )
}

export default OutputScreenRow;