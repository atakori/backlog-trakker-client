import React from 'react';
import {LoggedInNav} from './loggedNav';
import {CurrentGameProgress} from './currentGameProgress';
import { CurrentGameChapters } from './gameChapters'
import { CurrentBacklog } from './currentBacklog';

export function Dashboard(props) {
	return (
		<section className= "signup_section">
			<header role= "banner">
				<LoggedInNav />
			</header>
			<main role="main" style= {{paddingTop: "65px"}}>
				<CurrentGameProgress user= "gamerX_954" currentGame= "Dark Souls 3" progress= "78" criticRating= "7.4" userRating= "9.3" gameArtURL= "https://images-na.ssl-images-amazon.com/images/I/91gLzQFnCqL._AC_SX215_.jpg"/>
				<CurrentGameChapters currentGame= "Dark Souls 3" gameChapters= {['Cemetery of Ash', 'Firelink Shrine', 'High Wall of Lothric', "Undead Settlement", "Road of Sacrifices", "Cathedral of the Deep", "Farron Keep"]}/>
				<CurrentBacklog userID= "52468" gameCollection= {["Kingdom Hearts II", "Nier Automata", "Super Mario Oddessy", "Gears of War 4", "The Last of Us"]} />
			</main>
		</section>
		)
}