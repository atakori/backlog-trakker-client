import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE, ADD_GAME_TO_COLLECTION } from '../actions/types'

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
		case FETCH_MESSAGE: 
			return {...state, message: action.payload}
		case ADD_GAME_TO_COLLECTION:
			return{...state, username: action.payload}
	}
	return state;
}