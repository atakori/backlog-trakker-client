import gameReducer from './gamereducer'
import {LOADING_FINISHED, SEND_ERROR} from '../actions/types'

describe('Loading Finished', () => {
	it('should return a false loading state', () => {
	let state= {
		loading: true
		}
	state = gameReducer(state, {type: LOADING_FINISHED})
	expect(state).toEqual({
		loading: false
	})
	})
})

describe('Send Error', () => {
	it('should return an error if something went wrong', () => {
	let state= {
		error: null
		}
	state = gameReducer(state, {type: SEND_ERROR, payload: "Error here"})
	expect(state).toEqual({
		error: "Error here"
	})
	})
})