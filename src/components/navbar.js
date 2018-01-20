import React from 'react';
import { connect } from 'react-redux';
import { MockSearch } from  './searchbar.js'

class NavigationBar extends React.Component {
	
  renderLinks() {
    if (this.props.authenticated) {
      return [
                <li className= "nav-item" key= {1}>
                  <a href="/mygameLibrary"> My Collection </a>
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
      return <MockSearch dataSource= {["Kingdom Hearts", "Dark Souls"]}/>
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
              <a className="navbar-brand" href='/'> Backlog Trakker </a>
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
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(NavigationBar);