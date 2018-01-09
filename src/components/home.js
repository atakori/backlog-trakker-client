import React from 'react';
import {Nav} from './navbar';

export function LandingPage(props){
	return (
		<section className= "landing_page">
			<header role= "banner">
				<Nav /> 
			</header>
			<main role= "main">
				<div className="home">
			        <p> The App is currently rendering</p>
			    </div>
		    </main>
	    </section>
		)
}