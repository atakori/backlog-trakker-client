import React from 'react';
import {MockSearch} from  './searchbar.js'

export function LoggedInNav(props) {
	return (
		<nav className="nav navbar navbar-inverse navbar-fixed-top" role="navigation">
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
                  <MockSearch dataSource= {["Kingdom Hearts", "Dark Souls"]}/>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a href="/signup"> Logout </a>
                  </li>
              </ul>
            </div>
          </div>
        </nav>
		)
}