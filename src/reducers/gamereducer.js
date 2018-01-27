import {LOADING_FINISHED, 
		FETCH_GAME_INFO, 
		FETCH_GAME_NAME,
		FETCH_GAME_SUMMARY, 
		FETCH_GAME_GENRE_IDS, 
		FETCH_CRITIC_SCORES, 
		FETCH_USER_SCORES, 
		FETCH_SIMILAR_GAME_IDS, 
		FETCH_GAME_ART,
		FETCH_COMPLETION_TIME,
		ADD_GAME_TO_COLLECTION, 
		CHECK_GAME_COLLECTION,
		GET_GAME_COLLECTION,
		HANDLE_CHAPTER_CHANGE,
		FETCH_ENTIRE_BACKLOG,
		SEARCH_FOR_GAME } from '../actions/types'

const initialState = {
	similarGamesList: []

}

export default function (state=initialState, action) {
	switch(action.type) {
		case LOADING_FINISHED:
			return {...state, loading: false}
		case FETCH_GAME_INFO: 
			return {...state, data: action.payload.data}
		case FETCH_GAME_NAME:
			return{...state, gameName: action.payload}
		case FETCH_GAME_SUMMARY:
			return {...state, summary: action.payload}
		case FETCH_GAME_GENRE_IDS:
			return {...state, genreIds: action.payload}
		case FETCH_CRITIC_SCORES:
			return {...state, criticScore: action.payload}
		case FETCH_USER_SCORES:
			return {...state, userScore: action.payload}
		case FETCH_SIMILAR_GAME_IDS:
			return {...state, similarGamesList: action.payload}
		case FETCH_GAME_ART: 
			return {...state, gameArtURL: action.payload}
		case FETCH_COMPLETION_TIME:
			return {...state, completionTime: action.payload}
		case ADD_GAME_TO_COLLECTION:
			return{...state, gameAdded: action.payload}
		case CHECK_GAME_COLLECTION:
			return {...state, gameAdded: action.payload}
		case GET_GAME_COLLECTION:
			return{...state, gameCollection: action.payload}
		case HANDLE_CHAPTER_CHANGE:
			return {...state, chapterChange: action.payload}
		case FETCH_ENTIRE_BACKLOG:
			return{...state, userBacklog: action.payload}
		case SEARCH_FOR_GAME: 
			return{...state, dataSource: action.payload}
	}
	return state;
}

/*export const FETCH_GAME_INFO= 'fetch_game_info';
export const FETCH_GAME_SUMMARY= 'fetch_game_summary';
export const FETCH_GAME_GENRE_IDS= 'fetch_game_genre_ids';
export const FETCH_CRITIC_SCORES= 'fetch_critic_scores';
export const FETCH_USER_SCORES= 'fetch_user_scores';
export const FETCH_SIMILIAR_GAME_IDS= 'fetch_similar_game_ids';*/