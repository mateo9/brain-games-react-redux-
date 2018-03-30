import React from 'react';

const firstGameIntroduction = (props) => {

	return (
        <div className="first-game-introduction">
        	<h3>Click the numbers in ascending order</h3>
        	{
        		props.sec !== 0 ? 
        		(
        			<h5>Game will start for {props.sec} seconds</h5>
        		) :

        		(
        			<h5>Play!</h5>
        		)
        	}	
        </div>
		)
}


export default firstGameIntroduction;