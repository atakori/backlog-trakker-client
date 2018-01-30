import React from 'react';
import {shallow, mount} from 'enzyme';

import LoadingScreen  from './loading';

describe('<Loading />', () => {
	it('Renders without crashing', () => {
		shallow(<LoadingScreen />);
	})

})