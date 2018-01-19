import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {LandingPage} from './home';
import {Login} from './login';
import {SignUp} from './signup';
import Dashboard from './dashboard';
import {GameCollection} from './gameCollection';
import {GamePage} from './gamePage';

class App extends Component {
  render() {
    return (
	    <Router>
	    	<Switch>
	      		<Route exact path= '/' component= {LandingPage} />
	      		<Route exact path= '/login' component= {Login}/>
	      		<Route exact path= '/signup' component= {SignUp}/>
	    		<Route exact path= '/dashboard' component= {Dashboard}/>
	    		<Route exact path= '/mygamelibrary/:userID' component= {GameCollection} />
	    		<Route exact path= '/gameInfo/:game' component= {GamePage}/>
	    	</Switch>
	    </Router>
    );
  }
}

export default App;
