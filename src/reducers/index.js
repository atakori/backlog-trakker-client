import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './authreducer';
import gameReducer from './gamereducer';

const initialState = {
	data: [
		
	]
}

const backlogReducer = combineReducers({
	form: form,
	auth: authReducer,
	game: gameReducer
})

export default backlogReducer;

