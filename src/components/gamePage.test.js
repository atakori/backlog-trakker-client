import React from 'react';
import {shallow, mount} from 'enzyme';

import {GamePage}  from './gamePage';

let mockData= {
	"params": {
		"game": "Fake Game"
	}
}

describe('<GamePage />', () => {
	it('Renders without crashing', () => {
		const callback= jest.fn();
		shallow(<GamePage match={mockData} addGameToCollection={callback} fetchGameInfo= {()=> console.log('fetch info')} checkGameCollection= {()=> console.log('fetch collection')}/>);
	})
	it('Calls addGameToCollection callback on click', () => {
		const callback= jest.fn();
		const wrapper= shallow(<GamePage error= {false} gameName= {"Fake Game"} match={mockData} addGameToCollection={callback} fetchGameInfo= {()=> console.log('fetch info')} checkGameCollection= {()=> console.log('fetch collection')}/>)
		console.log(wrapper.debug());
		wrapper.find('.btn').simulate('click')
		expect(callback).toHaveBeenCalled()
	})
})