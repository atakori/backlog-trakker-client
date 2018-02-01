import gameReducer from './gamereducer'
import {LOADING_FINISHED} from '../actions/types'

describe('Auth User', () => {
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