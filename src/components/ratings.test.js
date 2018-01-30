import React from 'react';
import {shallow, mount} from 'enzyme';

import {Ratings}  from './ratings';

describe('<Ratings />', () => {
	it('Renders without crashing', () => {
		shallow(<Ratings />);
	})

})