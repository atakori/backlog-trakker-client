import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER} from './types';

const API_URL= "http://localhost:8080";
//current port server is running on 

export function loginUser({username, password}, history) {
	return function(dispatch) {
	//submits username and password to server
	axios.post(`${API_URL}/login`, {username, password},)
	.then(res => {
		//if request is good, update state with authenticated user
		dispatch({type: AUTH_USER })
		//save JWT token to local storage
		localStorage.setItem('token', res.data.token);
		//redirect to route /dashboard
		history.push("/dashboard")
	})
	.catch(() => {
		//if request is bad, show an error to the user
		dispatch(authError('Incorrect username or password'))
	})
	}
}

export function signupUser({firstname, lastname, username, password}) {
		return function(dispatch) {
			axios.post(`${API_URL}/signup`, {firstname, lastname, username, password})
		}
}

export function authError(error) {
	return {
		type: AUTH_ERROR,
		payload: error
	}
}

export function signoutUser() {
	//sign the user out
	localStorage.removeItem('token');
	return {type: UNAUTH_USER}
}

