export const setTimer = (timer) => dispatch => {
	dispatch({
		type: 'SET_FIRST_GAME_TIMER',
		payload: timer
	});

}


export const updateTimer = (newTime) => dispatch => {
	dispatch({
		type: 'UPDATE_TIMER',
		payload: newTime
	});

}


export const updateWaitForStartTimer = (timer) => dispatch => {
	dispatch({
		type: 'WAIT_FOR_START_TIMER',
		payload: timer
	});
}