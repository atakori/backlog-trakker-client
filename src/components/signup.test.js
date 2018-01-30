import React from 'react';
import {shallow, mount} from 'enzyme';
import {createStore} from 'redux';
import backlogReducer from '../reducers/index';

import SignUp  from './signup';

let store= createStore(backlogReducer)

describe('<SignUp />', () => {
	it('Renders without crashing', () => {
		const dispatch = jest.fn();
		shallow(<SignUp />);
	})
})