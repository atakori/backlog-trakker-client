import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import backlogReducer from './reducers'; 
import reduxThunk from 'redux-thunk';
import { AUTH_USER } from './actions/types'; 

import './index.css';
import App from './components/App';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store= createStoreWithMiddleware(backlogReducer);

const token= localStorage.getItem('token');
//if there is a token, then the user is signed in
if(token) {
	//update app state
	store.dispatch({type: AUTH_USER});
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));
