import React from 'react';
import {shallow, mount} from 'enzyme';
import {createStore} from 'redux';
import backlogReducer from '../reducers/index';

import {LandingPage}  from './home';

let store= createStore(backlogReducer)

describe('<Home />', () => {
	it('Renders without crashing', () => {
		const dispatch = jest.fn();
		shallow(<LandingPage signoutUser= {() => dispatch}/>);
	})

})