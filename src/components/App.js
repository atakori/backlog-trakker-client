import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {LandingPage} from './home';

class App extends Component {
  render() {
    return (
	    <Router>
	      <Route exact path= '/' component= {LandingPage} />
	    </Router>
    );
  }
}

export default App;
