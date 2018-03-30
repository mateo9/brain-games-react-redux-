import React from 'react';

const FirstGameBlocks = (props) => {

	return (
        <div className={`class${props.index}`} onClick={props.handleClick}>
        {props.data}
        </div>
		);
}

export default FirstGameBlocks;
