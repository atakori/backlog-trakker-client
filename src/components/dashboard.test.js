import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import backlogReducer from '../reducers/index';
import {CurrentGameProgress} from './currentGameProgress';
import {CurrentBacklog} from './currentBacklog'
import {Dashboard}  from './dashboard';

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

describe('<Dashboard />', () => {
	it('Renders without crashing', () => {
		const dispatch = jest.fn();
		shallow(<Dashboard getCurrentUser= {() => dispatch} getGameCollection= {(game) => dispatch}state={'here'} location={'present'} store={store}/>);
	})
})

//container component so we will test children components