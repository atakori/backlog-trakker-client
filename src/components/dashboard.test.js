import React from 'react';
import {shallow, mount} from 'enzyme';
import {createStore} from 'redux';
import backlogReducer from '../reducers/index';
import {CurrentGameProgress} from './currentGameProgress';

import {Dashboard}  from './dashboard';

let store= createStore(backlogReducer)

describe('<CurrentBacklog />', () => {
	it('Renders without crashing', () => {
		const dispatch = jest.fn();
		shallow(<Dashboard getCurrentUser= {() => dispatch} getGameCollection= {(game) => dispatch}state={'here'} location={'present'} store={store}/>);
	})
	it('should render children components if props are supplied', () => {
		const dispatch= jest.fn();
		const wrapper= shallow(<Dashboard getCurrentUser= {() => dispatch} getGameCollection= {(game) => dispatch}state={'here'} location={'present'} store={store} />)
		console.log(wrapper.find(CurrentGameProgress))
		expect(wrapper.find(CurrentGameProgress).find())
	})

})

/*wrapper.find(ChildComponent).last().simulate('click',1)*/