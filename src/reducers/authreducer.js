import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, GET_CURRENT_USER, FETCH_MESSAGE } from '../actions/types'

const initialState = {

}

export default function (state=initialState, action) {
	switch(action.type) {
		case AUTH_USER: 
			return {...state, error: '', authenticated: true};
		case UNAUTH_USER:
			return {...state, authenticated: false};
		case AUTH_ERROR:
			return {...state, error: action.payload}
		case GET_CURRENT_USER:
			return{...state, currentUser: action.payload}
		case FETCH_MESSAGE: 
			return {...state, message: action.payload}
		default:
	}
	return state;
}