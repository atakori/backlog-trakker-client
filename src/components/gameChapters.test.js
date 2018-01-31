import React from 'react';
import {shallow, mount} from 'enzyme';
import {createStore} from 'redux';
import backlogReducer from '../reducers/index';

import {CurrentGameChapters}  from './gameChapters';

let store= createStore(backlogReducer)

const fakeCollection= [
    {
        "_id": "sdkjdfakjfa",
        "gameArtUrl": "//images.igdb.com/igdb/image/upload/t_thumb/e57qvevkjfapzizl3qhn.jpg",
        "name": "Fake game One",
        "completedChapters": [
            "Firelink Shrine"
        ],
        "gameChapters": [
            "Prologue - Northern Undead Asylum",
            "Firelink Shrine",
        ]
    }
]
const mockChapters= [ "Prologue - Northern Undead Asylum","Firelink Shrine"]
const mockCompletedChapters= ["Firelink Shrine"]

describe('<gameChapters />', () => {
	it('Renders without crashing', () => {
		shallow(<CurrentGameChapters gameCollection= {fakeCollection} gameChapters={mockChapters} completedChapters={mockCompletedChapters}/>);
	})
	it('should activate handleChange callback onChange of input', () => {
		const callback= jest.fn();
		const wrapper= shallow(<CurrentGameChapters handleChapterChange={callback} gameCollection= {fakeCollection} gameChapters={mockChapters} completedChapters={mockCompletedChapters}/>)
		wrapper.find('.completedChapter').last().simulate('change')
		expect(callback).toHaveBeenCalled()
	})

})