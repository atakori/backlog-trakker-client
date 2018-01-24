import axios from 'axios';
import { 
	AUTH_USER, 
	AUTH_ERROR,
	UNAUTH_USER,
	GET_CURRENT_USER,
	FETCH_MESSAGE,
	FETCH_GAME_INFO,
	FETCH_GAME_SUMMARY,
	FETCH_GAME_GENRE_IDS,
	FETCH_CRITIC_SCORES,
	FETCH_USER_SCORES,
	FETCH_SIMILAR_GAME_IDS,
	FETCH_GAME_ART,
	FETCH_COMPLETION_TIME,
	ADD_GAME_TO_COLLECTION,
	CHECK_GAME_COLLECTION } from './types';


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
				payload: res.data
			}) 
		})
	}
}

export function fetchGameInfo(gameName) {
	//gets game information for GamePage component
	return function(dispatch) {
		axios.get(`${API_URL}/games?name=${gameName}`)
		.then( res => {
			const game = res.data[0]
			const gameGenres= game.genres.join(',');
			const similarGameIds= game.games.join(',');
			dispatch({
				type: FETCH_GAME_SUMMARY,
				payload: game.summary
			});
			dispatch({
				type:FETCH_GAME_ART,
				payload:game.cover.url
			});
			dispatch({
				type: FETCH_CRITIC_SCORES,
				payload: game.aggregated_rating.toFixed(2)
			});
			dispatch({
				type: FETCH_USER_SCORES,
				payload: game.rating.toFixed(2)
			})
			dispatch({
				type: FETCH_COMPLETION_TIME,
				payload: game.time_to_beat
			})
			axios.get(`${API_URL}/games/genre?ids=${gameGenres}`)
			.then(res => {
				dispatch({
					type:FETCH_GAME_GENRE_IDS,
					payload: res.data.join(', ')
				})
			})
			axios.get(`${API_URL}/games/similarGames?gameIds=${similarGameIds}`)
			.then(res => {
				console.log(res.data)
				dispatch({
				type: FETCH_SIMILAR_GAME_IDS,
				payload: res.data
				})
			})
		})
	}
}

export function addGameToCollection(gameNameDashed, gameName) {
	//Gets the current username
	//looks up game and Data Scrapes form ign
	//Locate user in db and add game + chapters
	return function(dispatch) {
		//first get the currentUserName
		//(Can delete first api call)
		axios.get(`${API_URL}/api/user`, {
			headers: {authorization: localStorage.getItem('token')}})
		.then(res => {
			const username= res.data;
			/*console.log(gameName)*/
			axios.get(`${API_URL}/games/chapters?gameName=${gameNameDashed}`)
			.then( chapters => {
				/*chapters= chapters.join(',')*/
				axios.post(`${API_URL}/api/user?username=${username}&name=${gameName}&gameChapters=${chapters.data}`, {
					headers: {authorization: localStorage.getItem('token')}})
				.then(postedRes=> {
					console.log("Added game to collection success");
					dispatch({
						type:ADD_GAME_TO_COLLECTION,
						payload: postedRes.data
					})
				})
				.catch(err=> {console.log(err)})
			})
		})
		.catch(err=> {console.log(err)})

	}
}

export function checkGameCollection(gameName) {
	return function(dispatch) {
			axios.get(`${API_URL}/api/user`, {
			headers: {authorization: localStorage.getItem('token')}})
		.then(res => {
			const username= res.data;
			axios.get(`${API_URL}/api/user/collection?username=${username}&name=${gameName}`)
			.then(response => {
				dispatch({
					type: CHECK_GAME_COLLECTION,
					payload: response.data
				})
			})
			.catch(err=> {console.log(err)})
		})
	}
}

export function getCurrentUser() {
	return function(dispatch) {
		axios.get(`${API_URL}/api/user`, {
			headers: {authorization: localStorage.getItem('token')}})
		.then(res => {
			dispatch({
				type: GET_CURRENT_USER,
				payload: res.data
			})
		})
	}
}