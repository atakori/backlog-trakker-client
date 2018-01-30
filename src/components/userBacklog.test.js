import React from 'react';
import {shallow, mount} from 'enzyme';
import {createStore} from 'redux';
import backlogReducer from '../reducers/index';

import {ShowUserBacklog}  from './userBacklog';

let store= createStore(backlogReducer)
let mockData= [{
	name: 'game',
	gameArtUrl: 'URL here',
	gameChapters: ['chapter 1', 'chapter 2'],
	completedChapters: ['chapter 1']
}]
describe('<ShowUserBacklog />', () => {
	it('Renders without crashing', () => {
		const dispatch = jest.fn();
		shallow(<ShowUserBacklog gameCollection={mockData}/>);
	})

})