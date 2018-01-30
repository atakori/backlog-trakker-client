import React from 'react';
import {shallow, mount} from 'enzyme';
import {createStore} from 'redux';
import backlogReducer from '../reducers/index';

import {NavigationBar}  from './navbar';

let store= createStore(backlogReducer)

describe('<NavigationBar />', () => {
	it('Renders without crashing', () => {
		const dispatch = jest.fn();
		shallow(<NavigationBar getCurrentUser= {() => dispatch}/>);
	})
})