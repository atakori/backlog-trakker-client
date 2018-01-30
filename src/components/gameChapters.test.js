import React from 'react';
import {shallow, mount} from 'enzyme';
import {createStore} from 'redux';
import backlogReducer from '../reducers/index';

import {CurrentGameChapters}  from './gameChapters';

let store= createStore(backlogReducer)

describe('<CurrentBacklog />', () => {
	it('Renders without crashing', () => {
		shallow(<gameChapters />);
	})

})