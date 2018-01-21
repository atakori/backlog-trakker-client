import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, FETCH_MESSAGE} from './types';

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

export function signupUser({firstname, lastname, username, password}, history) {
		return function(dispatch) {
			axios.post(`${API_URL}/signup`, {firstname, lastname, username, password})
			.then(res => {
				dispatch({type: AUTH_USER});
				localStorage.setItem('token', res.data.token);
				history.push("/dashboard");
			})
			.catch( err => dispatch(authError(err.response.data.error)));
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

//testing authenticated requests to db (WORKS)
export function fetchMessage() {
	return function(dispatch) {
		axios.get(API_URL, {
			headers: {authorization: localStorage.getItem('token')}})
		.then(res => {
			dispatch({
				type: FETCH_MESSAGE,
				payload: res.data.message
			}) 
		})
	}
}