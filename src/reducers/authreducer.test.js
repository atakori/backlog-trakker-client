import authReducer from './authreducer'
import {AUTH_USER, UNAUTH_USER} from '../actions/types'

describe('Auth User', () => {
	it('should return a true authenticated state', () => {
	let state= {
		error:'Error message here',
		authenticated: false
		}
	state = authReducer(state, {type: AUTH_USER})
	expect(state).toEqual({
		error: '',
		authenticated: true
	})
	})
})

describe('UnAuth User', () => {
	it('should return a false authenticated state', () => {
	let state= {
		authenticated: true
		}
	state = authReducer(state, {type: UNAUTH_USER})
	expect(state).toEqual({
		authenticated: false
	})
	})
})