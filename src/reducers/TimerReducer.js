
const initialTimer = {
	waitForStartTimer: 3
}

const timerReducer = (state = initialTimer, action) => {
	switch (action.type) {
		case 'SET_FIRST_GAME_TIMER':
			return {
				...state,
				firstGameTimer: action.payload
			}
		case 'UPDATE_TIMER':
		    return {
		    	...state,
		    	firstGameTimer: action.payload
		    }
		case 'WAIT_FOR_START_TIMER':
		    return {
		    	...state,
		    	waitForStartTimer: action.payload
		    }
		default:
			return state;
	}
}

export default timerReducer;