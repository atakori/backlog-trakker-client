import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {LandingPage} from './home';
import {Login} from './login'
import {SignUp} from './signup'

class App extends Component {
  render() {
    return (
	    <Router>
	    	<Switch>
	      		<Route exact path= '/' component= {LandingPage} />
	      		<Route exact path= '/login' component= {Login}/>
	      		<Route exact path= '/signup' component= {SignUp}/>
	    	</Switch>
	    </Router>
    );
  }
}

export default App;
