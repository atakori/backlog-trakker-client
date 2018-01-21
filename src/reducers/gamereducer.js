import { FETCH_GAME_INFO, FETCH_GAME_SUMMARY } from '../actions/types'

const initialState = {

}

export default function (state=initialState, action) {
	switch(action.type) {
		case FETCH_GAME_INFO: 
			return {...state, data: action.payload.data};
		case FETCH_GAME_SUMMARY:
			return {...state, summary: action.payload}
	}
	return state;
}