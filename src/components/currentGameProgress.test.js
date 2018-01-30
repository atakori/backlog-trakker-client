import React from 'react';
import {shallow, mount} from 'enzyme';

import { CurrentGameProgress } from './currentGameProgress';

describe('<CurrentGameProgress />', () => {
	it('renders without crashiing', () => {
		shallow (<CurrentGameProgress />)
	})
})