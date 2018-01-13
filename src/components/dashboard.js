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
				<CurrentGameProgress user= "gamerX_954" currentGame= "Dark Souls 3" progress= "78" criticRating= "7.4" userRating= "9.3" gameArtURL= "http://www.justpushstart.com/wp-content/uploads/2015/12/Dark-Souls-3-Box-Art-Day-One.jpg"/>

			</main>
		</section>
		)
}