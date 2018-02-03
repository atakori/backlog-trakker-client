import React from 'react';
import { connect } from 'react-redux';
import  MockSearch  from  './searchbar.js'
import * as actions from '../actions'

export class NavigationBar extends React.Component {

  componentWillMount() {
    this.props.getCurrentUser();
  }	

  searchForGame(value){
    this.props.searchForGame(value);
  }
  
  renderLinks() {
    if (this.props.authenticated) {
      let currentUser = this.props.currentUser;
      return [
                <li className= "nav-item" key= {1}>
                  <a href= {`/mygameLibrary/${currentUser}`}> My Collection </a>
                </li>,
                <li className= "nav-item" key= {2}>
                  <a href="/"> Logout </a>
                </li>
                ];
        } else {
        return [
                <li className= "nav-item" key= {1}>
                  <a href="/login">Login</a>
                </li>,
                <li className= "nav-item" key= {2}>
                  <a href="/signup"> Sign Up </a>
                </li>
                ];
      }
    }

  renderSearchBar() {
    if(this.props.authenticated) {
      return <MockSearch history= {this.props.history} searchForGame= {(value) => this.searchForGame(value)}dataSource= {this.props.dataSource}/>
    }
  }

  renderLogoLink() {
    if (this.props.authenticated) {
      return <a className="navbar-brand" href='/dashboard'><i className="fas fa-flag-checkered"></i> Checkpoint </a>
    } else {
      return <a className="navbar-brand" href='/'><i className="fas fa-flag-checkered"></i> Checkpoint </a>
    }
  }

  render() {
  return ( 
		 <nav className="nav navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="nav-header">
              <button className="navbar-toggle collapsed"
                      type="button" data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
               </button>
            {this.renderLogoLink()}
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                {this.renderSearchBar()}
              </ul>
              <ul className="nav navbar-nav navbar-right">
                  {this.renderLinks()}
              </ul>
            </div>
          </div>
        </nav>
		)
  }
}
function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    currentUser: state.auth.currentUser,
    dataSource: state.game.dataSource
  }
}

export default connect(mapStateToProps, actions)(NavigationBar);