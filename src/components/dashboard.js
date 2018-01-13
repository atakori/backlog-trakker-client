import React from 'react';
import {LoggedInNav} from './loggedNav';
import {CurrentGameProgress} from './currentGameProgress';
import { Progress } from 'antd';

export function Dashboard(props) {
	return (
		<section className= "signup_section">
			<header role= "banner">
				<LoggedInNav />
			</header>
			<main role="main" style= {{paddingTop: "65px"}}>
				<CurrentGameProgress user= "test user 3" currentGame= "Dark Souls"/>
			<Progress type= "circle" percent= "50"/>

			</main>
		</section>
		)
}