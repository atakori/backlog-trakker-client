import React from 'react';
import {shallow, mount} from 'enzyme';

import { CurrentBacklog } from './currentBacklog';

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

describe('<CurrentBacklog />', () => {
	it('Renders without crashing', () => {
		const dispatch = jest.fn();
		shallow(<CurrentBacklog gameCollection= {fakeCollection} getSpecificGame= {(gameName) => dispatch(gameName)} scrollToTop={()=> console.log("scroll")}/>)
	})

	it('should fire the getSpecificGame callback when clicked', () => {
		const callback = jest.fn();
		const secondCallback = jest.fn();
        const wrapper= mount(<CurrentBacklog gameCollection= {fakeCollection} getSpecificGame= {callback} scrollToTop= {secondCallback}/>)
		console.log(wrapper.find('.collection_game_title'))
        const gameName= wrapper.find('.collection_game_title').text()
        wrapper.find('.update_progress_button').simulate('click')
		expect(callback).toHaveBeenCalledWith(gameName)
        expect(secondCallback).toHaveBeenCalled()
    })
    
    it('should render the correct gameCollection button with correct userName', () => {
        const callback= jest.fn();
        const wrapper= mount(<CurrentBacklog gameCollection= {fakeCollection} getSpecificGame= {callback} scrollToTop= {() => console.log("scrolling")} userID= 'test_user'/>)
        expect(wrapper.find({href: "/mygamelibrary/test_user"}));
    })
})