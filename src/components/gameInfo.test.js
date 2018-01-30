import React from 'react';
import {shallow, mount} from 'enzyme';

import {GameInfo}  from './gameInfo';

describe('<CurrentBacklog />', () => {
	it('Renders without crashing', () => {
		shallow(<gameInfo />);
	})

})