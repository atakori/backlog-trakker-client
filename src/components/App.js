import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {LandingPage} from './home';
import {Login} from './login'

class App extends Component {
  render() {
    return (
	    <Router>
	    	<Switch>
	      		<Route exact path= '/' component= {LandingPage} />
	      		<Route exact path= '/login' component= {Login}/>
	    	</Switch>
	    </Router>
    );
  }
}

export default App;
