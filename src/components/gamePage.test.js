import React from 'react';
import {shallow, mount} from 'enzyme';

import {GamePage}  from './gamePage';

describe('<GamePage />', () => {
	it('Renders without crashing', () => {
		shallow(<gamePage />);
	})
})