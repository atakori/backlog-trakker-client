import React from 'react';
import {Nav} from './navbar';

export function LandingPage(props){
	return (
		<section>
			<header role= "banner">
				<Nav /> 
			</header>
			<main>
				<div className="Home">
			        <p> The App is currently rendering</p>
			    </div>
		    </main>
	    </section>
		)
}