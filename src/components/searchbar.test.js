import React from 'react';
import {shallow, mount} from 'enzyme';
import {createStore} from 'redux';
import backlogReducer from '../reducers/index';

import {MockSearch}  from './searchbar';
import sinon from 'sinon';

let store= createStore(backlogReducer)

describe('<MockSearch />', () => {
	it('Renders without crashing', () => {
		const dispatch = jest.fn();
		shallow(<MockSearch />);
	})
	it('should run the onSubmit function after clicking the button', () => {
		const dispatch = jest.fn();
		let e={
			preventDefault: function(){return 'WORKS'} 
		} 
		console.log(e.preventDefault())
		const wrapper= shallow(<MockSearch />);
/*		console.log(wrapper.debug())*/
		wrapper.find('form').simulate('submit', {preventDefault: function() {return "works"}})
		wrapper.update()
		expect(wrapper.state().location).toEqual(null);
	})
})