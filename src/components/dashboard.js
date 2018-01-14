import React from 'react';
import {LoggedInNav} from './loggedNav';
import {CurrentGameProgress} from './currentGameProgress';
import { CurrentGameChapters } from './gameChapters'

export function Dashboard(props) {
	return (
		<section className= "signup_section">
			<header role= "banner">
				<LoggedInNav />
			</header>
			<main role="main" style= {{paddingTop: "65px"}}>
				<CurrentGameProgress user= "gamerX_954" currentGame= "Dark Souls 3" progress= "78" criticRating= "7.4" userRating= "9.3" gameArtURL= "http://www.justpushstart.com/wp-content/uploads/2015/12/Dark-Souls-3-Box-Art-Day-One.jpg"/>
				<CurrentGameChapters currentGame= "Dark Souls 3" gameChapters= {['Cemetery of Ash', 'Firelink Shrine', 'High Wall of Lothric', "Undead Settlement", "Road of Sacrifices", "Cathedral of the Deep", "Farron Keep"]}/>
			</main>
		</section>
		)
}