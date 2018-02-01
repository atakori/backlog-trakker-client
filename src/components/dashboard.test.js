import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import backlogReducer from '../reducers/index';
import {CurrentGameProgress} from './currentGameProgress';
import {CurrentBacklog} from './currentBacklog'
import {Dashboard}  from './dashboard';
import {Sinon} from 'sinon-spy-react'

let store= createStore(backlogReducer)

describe('<Dashboard />', () => {
	it('Renders without crashing', () => {
		const dispatch = jest.fn();
		shallow(<Dashboard getCurrentUser= {() => dispatch} getGameCollection= {(game) => dispatch}state={'here'} location={'present'} store={store}/>);
    })
})

//container component so we will test children components