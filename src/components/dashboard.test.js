import React from 'react';
import {shallow, mount} from 'enzyme';
import {createStore} from 'redux';
import backlogReducer from '../reducers/index';

import {Dashboard}  from './dashboard';

let store= createStore(backlogReducer)

describe('<CurrentBacklog />', () => {
	it('Renders without crashing', () => {
		const dispatch = jest.fn();
		shallow(<Dashboard getCurrentUser= {() => dispatch} getGameCollection= {(game) => dispatch}state={'here'} location={'present'} store={store}/>);
	})

})