import {createStore} from 'redux';

import backlogReducer from './reducers';

export default createStore(backlogReducer);