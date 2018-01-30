import React from 'react';
import {shallow, mount} from 'enzyme';
import {createStore} from 'redux';
import backlogReducer from '../reducers/index';

import {Login}  from './login';

let store= createStore(backlogReducer)

describe('<Login />', () => {
	it('Renders without crashing', () => {
		const dispatch= jest.fn()
		shallow(<Login store={store} handleSubmit= {() => dispatch}/>);
	})

})