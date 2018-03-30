
const initialState = {
	randArry: [],
	extraArry: [],
};

const firstGameReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'SET_FIRST_GAME':
		  return {
            ...state,
            randArry: Array.from(action.payload),
  
		  }

		case 'REMOVE_CLICKED':
		  return {
		  	...state,
		  	randArry: state.randArry.filter(item => item !== action.payload)
		  }

		default:
		  return state;
	}

}

export default firstGameReducer;