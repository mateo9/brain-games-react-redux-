import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';

import  firstGameReducer  from './reducers/FirstGameReducer'
import  timerReducer from './reducers/TimerReducer';


const initialState = {};
const middleware = [thunk];

const store = createStore(
	combineReducers({
	firstGame: firstGameReducer,
	timer: timerReducer
    }),
    initialState,
	compose(
	applyMiddleware(...middleware),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	  ));


export default store;

