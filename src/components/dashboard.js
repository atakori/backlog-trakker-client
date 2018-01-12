import React from 'react';
import {LoggedInNav} from './loggedNav';
import {CurrentGameProgress} from './currentGameProgress';
import {SearchInput} from './searchbar.js';
import {Complete} from './searchbar.js';
import { Progress } from 'antd';

export function Dashboard(props) {
	return (
		<section className= "signup_section">
			<header role= "banner">
				<LoggedInNav />
			</header>
			<main role="main" style= {{paddingTop: "65px"}}>
				<CurrentGameProgress user= "test user 3" currentGame= "Dark Souls"/>
			<div>
				<p> hello </p>
			</div>
			<Progress type= "circle" percent= "50"/>

			</main>
		</section>
		)
}