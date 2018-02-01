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
let notStartedGameData= [{
	name: 'game',
	gameArtUrl: 'URL here',
	gameChapters: ['chapter 1', 'chapter 2'],
	completedChapters: []
}]
describe('<ShowUserBacklog />', () => {
	it('Renders without crashing', () => {
		const dispatch = jest.fn();
		shallow(<ShowUserBacklog gameCollection={mockData}/>);
	})
	it('should tell the user they have not started the game if they do not have any completed chapters', () => {
		const dispatch = jest.fn();
		const wrapper= shallow(<ShowUserBacklog gameCollection={notStartedGameData} />)
		const value= wrapper.find('.start_status').text()
		expect(value).toEqual('NOT STARTED')
	})
		it('should tell the user their completion percent if they have any completed chapters', () => {
		const dispatch = jest.fn();
		const wrapper= shallow(<ShowUserBacklog gameCollection={mockData} />)
		const value= wrapper.find('.start_status').text()
		expect(value).toEqual('Percentage complete<Progress />')
	})
})