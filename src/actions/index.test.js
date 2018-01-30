import { 
	AUTH_USER, 
	AUTH_ERROR,
	UNAUTH_USER,
	LOADING_FINISHED,
	GET_CURRENT_USER,
	FETCH_MESSAGE,
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
	SEARCH_FOR_GAME,
	SEND_ERROR } from './types';

import {authError, signoutUser, fetchGameInfo,
	addGameToCollection, checkGameCollection, 
	getCurrentUser, getGameCollection,
	handleChapterChange, searchForGame } from './index';

describe('authError', () => {
	it('should return the action', () => {
		const error= 'Error message';
		const action= authError(error);
		expect(action.type).toEqual(AUTH_ERROR);
		expect(action.payload).toEqual(error);
	})
})