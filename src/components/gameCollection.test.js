import React from 'react';
import {shallow, mount} from 'enzyme';
import {createStore} from 'redux';
import backlogReducer from '../reducers/index';

import {GameCollection}  from './gameCollection';

let store= createStore(backlogReducer)

describe('<GameCollection />', () => {
	it('Renders without crashing', () => {
		const dispatch= jest.fn()
		shallow(<GameCollection getCurrentUser= {() => dispatch} getGameCollection= {() => dispatch}/>);
	})

})