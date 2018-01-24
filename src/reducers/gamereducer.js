import { FETCH_GAME_INFO, 
		FETCH_GAME_SUMMARY, 
		FETCH_GAME_GENRE_IDS, 
		FETCH_CRITIC_SCORES, 
		FETCH_USER_SCORES, 
		FETCH_SIMILAR_GAME_IDS, 
		FETCH_GAME_ART,
		ADD_GAME_TO_COLLECTION, 
		CHECK_GAME_COLLECTION } from '../actions/types'

const initialState = {
	similarGamesList: []

}

export default function (state=initialState, action) {
	switch(action.type) {
		case FETCH_GAME_INFO: 
			return {...state, data: action.payload.data};
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
		case ADD_GAME_TO_COLLECTION:
			return{...state, gameAdded: action.payload}
		case CHECK_GAME_COLLECTION:
			return {...state, gameAdded: action.payload}
	}
	return state;
}

/*export const FETCH_GAME_INFO= 'fetch_game_info';
export const FETCH_GAME_SUMMARY= 'fetch_game_summary';
export const FETCH_GAME_GENRE_IDS= 'fetch_game_genre_ids';
export const FETCH_CRITIC_SCORES= 'fetch_critic_scores';
export const FETCH_USER_SCORES= 'fetch_user_scores';
export const FETCH_SIMILIAR_GAME_IDS= 'fetch_similar_game_ids';*/