export const randomNumber = (randArr) => dispatch => {
	dispatch({
		type: 'SET_FIRST_GAME',
		payload: randArr
	})
}


export const removeClickedNum = (current) => dispatch => {
	dispatch({
		type:'REMOVE_CLICKED',
		payload: current
	})
}