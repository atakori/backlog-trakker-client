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
    },
    {
        "_id": "5a6a7f8b4c1f894b3098ea71",
        "gameArtUrl": "//images.igdb.com/igdb/image/upload/t_thumb/lxuvogkwn3lexvr7herw.jpg",
        "name": "Fake Game #2",
        "completedChapters": [
            "Wonderland"
        ],
        "gameChapters": [
            "Wonderland",
            "Olympus Coliseum",
        ]
    }
]

describe('<CurrentBacklog />', () => {
	it('Renders without crashing', () => {
		const dispatch = jest.fn();
		shallow(<CurrentBacklog gameCollection= {fakeCollection} getSpecificGame= {(gameName) => dispatch(gameName)} scrollToTop={()=> this.scrollToTop()}/>
		);
	})

})

/*<CurrentBacklog gameCollection= {this.props.userBacklog} getSpecificGame= {(gameName) => this.props.getGameCollection(gameName)} scrollToTop={()=> this.scrollToTop()}/>
*/