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
	it('renders the searchbar if the user is logged in', () => {
		const dispatch = jest.fn();
		const wrapper= shallow(<NavigationBar authenticated= {true} currentUser= {'test_user'}getCurrentUser= {dispatch}/>)
		const expectedValue = " My Collection "
		expect(wrapper.find('li').at(0).text()).toEqual(expectedValue);
	})
	it('does not render the searchbar if the user is not logger in', () => {
		const dispatch= jest.fn();
		const wrapper= shallow(<NavigationBar currentUser= {'test_user'}getCurrentUser= {dispatch}/>)
		expect(wrapper.find('li').at(0).text()).toEqual('Login')
	})
})