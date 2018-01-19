import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import store from './store';
import backlogReducer from './reducers'; 

import './index.css';
import App from './components/App';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(backlogReducer)}>
		<App />
	</Provider>,
	document.getElementById('root'));
