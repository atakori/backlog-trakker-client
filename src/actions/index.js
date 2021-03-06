import axios from 'axios';
import { 
	AUTH_USER, 
	AUTH_ERROR,
	UNAUTH_USER,
	LOADING_START,
	LOADING_FINISHED,
	GET_CURRENT_USER,
	FETCH_MESSAGE,
	RESET_GAMEINFO,
	FETCH_GAME_NAME,
	FETCH_GAME_SUMMARY,
	FETCH_GAME_GENRE_IDS,
	FETCH_CRITIC_SCORES,
	FETCH_USER_SCORES,
	FETCH_SIMILAR_GAME_IDS,
	FETCH_GAME_ART,
	FETCH_COMPLETION_TIME,
	ADD_GAME_TO_COLLECTION,
	ADD_FALSE_COLLECTION_STATE,
	CHECK_GAME_COLLECTION,
	GET_GAME_COLLECTION,
	FETCH_ENTIRE_BACKLOG,
	SEARCH_FOR_GAME,
	SEND_ERROR,
	NULL_ERROR,
	CANNOT_SCRAPE,
	RESET_SCRAPE,
	ATTEMPT_ADD_GAME
	} from './types';

const API_URL= "https://enigmatic-headland-13307.herokuapp.com"
				/*FOR TESTING:*/ /*"http://localhost:8080";*/
//current port server is running on 

export function loginUser({username, password}, history) {
	return function(dispatch) {
	dispatch({
		type:LOADING_START
	})
	//submits username and password to server
	axios.post(`${API_URL}/login`, {username, password},)
	.then(res => {
		//if request is good, update state with authenticated user
		dispatch({type: AUTH_USER })
		dispatch({type: LOADING_FINISHED})
		//save JWT token to local storage
		localStorage.setItem('token', res.data.token);
		//redirect to route /dashboard
		history.push("/dashboard")
	})
	.catch(() => {
		//if request is bad, show an error to the user
		dispatch(authError('Incorrect username or password'))
		dispatch({
			type: LOADING_FINISHED
		})
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
		dispatch({
			type: RESET_GAMEINFO
		})
		dispatch({
				type: RESET_SCRAPE
		})
		dispatch({
			type: ADD_FALSE_COLLECTION_STATE
		})
		axios.get(`${API_URL}/games?name=${gameName}`)
		.then( res => {
			const game = res.data[0];
			//does not send back genre info if unavailable
			if(game.genres !== undefined) {
				const gameGenres= game.genres.join(',');
				axios.get(`${API_URL}/games/genre?ids=${gameGenres}`)
				.then(res => {
				dispatch({
					type:FETCH_GAME_GENRE_IDS,
					payload: res.data.join(', ')
				})
			})
			}
			//does not send back genre info if unavailable
			if(game.games !== undefined) {
				const similarGameIds= game.games.join(',');
				axios.get(`${API_URL}/games/similarGames?gameIds=${similarGameIds}`)
				.then(res => {
				dispatch({
				type: FETCH_SIMILAR_GAME_IDS,
				payload: res.data
				})
			})
			}
			dispatch({
				type: FETCH_GAME_SUMMARY,
				payload: game.summary
			});
			dispatch({
				type: FETCH_GAME_NAME,
				payload: game.name
			});
			dispatch({
				type:FETCH_GAME_ART,
				payload:game.cover.url
			});
			dispatch({
				type: FETCH_CRITIC_SCORES,
				payload: game.aggregated_rating
			});
			dispatch({
				type: FETCH_USER_SCORES,
				payload: game.rating
			})
			dispatch({
				type: FETCH_COMPLETION_TIME,
				payload: game.time_to_beat
			})
			})
			.then(res => {
				dispatch({
					type: NULL_ERROR,
					payload: false
				})
			})
			.catch(err => {
				console.log(err)
			dispatch({
				type: SEND_ERROR,
				payload: err
			})
		})
		.catch(err => {
			console.log(err)
			dispatch({
				type: SEND_ERROR,
				payload: err
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
		dispatch({
			type:ATTEMPT_ADD_GAME
		})
		axios.get(`${API_URL}/api/user`, {
			headers: {authorization: localStorage.getItem('token')}})
		.then(res => {
			const username= res.data;
			axios.get(`${API_URL}/games/chapters?gameName=${gameNameDashed}`)
			.then(chapters => {
				axios.get(`${API_URL}/games?name=${gameName}`)
				.then(gameObject => {
					const gameArtUrl = gameObject.data[0].cover.url;
					axios.post(`${API_URL}/api/user?username=${username}&name=${gameName}&gameChapters=${chapters.data}&gameArtUrl=${gameArtUrl}`, {
					headers: {authorization: localStorage.getItem('token')}})
					.then(postedRes=> {
					console.log("Added game to collection success");
					dispatch({
						type:ADD_GAME_TO_COLLECTION,
						payload: postedRes.data
					})
				})
				})
			})
			.catch(err=> {
				dispatch({
					type: CANNOT_SCRAPE,
					payload: err
					})
				})
			})
		.catch(err=> {
			dispatch({
				type: CANNOT_SCRAPE,
				payload: err
			})
		})

	}
}

export function checkGameChapterAvailability(gameNameDashed) {
	//checks pre-render whether or not a game is available
	return function(dispatch) {
		axios.get(`${API_URL}/api/user`, {
			headers: {authorization: localStorage.getItem('token')}})
		.then(res => {
			axios.get(`${API_URL}/games/chapters?gameName=${gameNameDashed}`)
			.then(chapters => {
				dispatch({
					type: RESET_SCRAPE
				})
			})
			.catch(err => {
			dispatch({
				type: CANNOT_SCRAPE,
			})
			})
		})
		.catch(err => {
			dispatch({
				type: CANNOT_SCRAPE,
			})
		})
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

export function getGameCollection(gameName) {
	//if gameName is passed in, search for specific gameObject in Users Backlog
	if (gameName) {
		return function(dispatch) {
		axios.get(`${API_URL}/api/user`, {
			headers: {authorization: localStorage.getItem('token')}})
		.then(res => {
			const username = res.data;
			axios.get(`${API_URL}/api/user/getgames?username=${username}&name=${gameName}`)
			.then( gameCollection => {
				dispatch({
					type:GET_GAME_COLLECTION,
					payload: gameCollection.data
				})
				axios.get(`${API_URL}/api/user/getUserBacklog?username=${username}`)
				.then( userBacklog=> {
				dispatch({
					type: FETCH_ENTIRE_BACKLOG,
					payload: userBacklog.data
				})
			})
		})
		})
	}} else {
	//else return full gameCollection and pick at random
	//get username
	return function(dispatch) {
		axios.get(`${API_URL}/api/user`, {
			headers: {authorization: localStorage.getItem('token')}})
		.then(res => {
			const username= res.data;
			axios.get(`${API_URL}/api/user/getgames?username=${username}`) 
	//search through database to get gameCollectionObject and FullBacklogObject
			.then(gameCollection => {
				dispatch({
					type: GET_GAME_COLLECTION,
					payload: gameCollection.data
				})
				axios.get(`${API_URL}/api/user/getUserBacklog?username=${username}`)
				.then( userBacklog=> {
				dispatch({
					type: FETCH_ENTIRE_BACKLOG,
					payload: userBacklog.data
				})
			})
			.then( done=> {
				dispatch({
					type: LOADING_FINISHED
				})
			})
			})

			.then(done => {
				dispatch({
					type: LOADING_FINISHED
				})
			})
		})
	}
}
}

export function handleChapterChange(gameName, chapter) {
	return function(dispatch) {
		axios.get(`${API_URL}/api/user`, {
			headers: {authorization: localStorage.getItem('token')}})
		.then(res => {
			const username= res.data;
			axios.get(`${API_URL}/api/user/handleChapter?username=${username}&name=${gameName}&chapter=${chapter}`)
			.then(gameCollection => {
				dispatch({
					type:GET_GAME_COLLECTION,
					payload: gameCollection.data
				})
			})
		})
	//search user's gameCollection for game
	//look through completedChapters array for chapter name	//if found, pull(delete) the chapter from array
	//if not found, add name to array
	//dispatch GET_GAME_COLLECTION to ReRender
	}
}

export function searchForGame(value) {
	return function(dispatch) {
		axios.get(`${API_URL}/games/searchGames?value=${value}`)
		.then( res=> {
			let resultsObject= res.data;
			let resultsArray= [];
			resultsObject.map(resultObject => {
				resultsArray.push(resultObject.name)
				return "searching for Game";
			})
			dispatch({
				type: SEARCH_FOR_GAME,
				payload: resultsArray
			})
		})
	}
}