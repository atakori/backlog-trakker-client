import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './authreducer';

const initialState = {
	data: [

	]
}

const backlogReducer = combineReducers({
	form: form,
	auth: authReducer
})

export default backlogReducer;

/*export const backlogReducer = (state=initialState, action) => {
	return state;
}*/