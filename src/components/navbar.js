import React from 'react';

export function Nav(props){
	return ( 
		 <nav className="nav navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container-fluid">
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
                <li><a href="#">[Search bar here]</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a href="/login">Login</a>
                  </li>
                  <li>
                    <a href="/signup"> Sign Up </a>
                  </li>
              </ul>
            </div>
          </div>
        </nav>
		)
}