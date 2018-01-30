import React from 'react';
import {shallow, mount} from 'enzyme';
import {createStore} from 'redux';
import backlogReducer from '../reducers/index';

import {MockSearch}  from './searchbar';

let store= createStore(backlogReducer)

describe('<MockSearch />', () => {
	it('Renders without crashing', () => {
		const dispatch = jest.fn();
		shallow(<MockSearch />);
	})

})