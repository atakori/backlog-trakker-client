import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

const initialState = {
	data: [

	]
}

const backlogReducer = combineReducers({
	form: form
})

export default backlogReducer;

/*export const backlogReducer = (state=initialState, action) => {
	return state;
}*/