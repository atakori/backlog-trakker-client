import React from 'react';
import {shallow, mount} from 'enzyme';
import {createStore} from 'redux';
import backlogReducer from '../reducers/index';

import {SimilarGames}  from './similarGames';

let store= createStore(backlogReducer)
let mockData= {
	name: 'game',
	gameArtUrl: 'URL here'
}
describe('<SimilarGames />', () => {
	it('Renders without crashing', () => {
		const dispatch = jest.fn();
		shallow(<SimilarGames similarGamesList={mockData}/>);
	})

})