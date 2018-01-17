import React from 'react';
import {LoggedInNav} from './loggedNav';
import {CurrentGameProgress} from './currentGameProgress';
import { CurrentGameChapters } from './gameChapters'
import { CurrentBacklog } from './currentBacklog';

export class Dashboard extends React.Component {
	constructor(props) {
		super(props);

		this.state={
			gameChapters: ['Cemetery of Ash', 'Firelink Shrine', 'High Wall of Lothric', "Undead Settlement", "Road of Sacrifices", "Cathedral of the Deep", "Farron Keep"],
			completedChapters: ['Cemetery of Ash']
    	}
	}

	getUserGameCollection(){
		//checks backend to get users entire backlog
	}

	getGameChapters(){
		//gets the game chapters from scraping the ign webpage
		// then sets the state for gameChapters
	}

	getUserCompletedChapters(game) {
		//gets completedChapters from the backend then sets state
		//then sets state for completed chapters
		this.setState({

		})
	}

	addChaptertoCompleted(chapter){
		//initiates during onClickhandler in currentGameChapters
	}

	calculateProgress(){
		return ((this.state.completedChapters.length) / (this.state.gameChapters.length) * 100).toFixed(2);
	}

	render() {
	return (
		<section className= "signup_section">
			<header role= "banner">
				<LoggedInNav />
			</header>
			<main role="main" style= {{paddingTop: "65px"}}>
				<CurrentGameProgress user= "gamerX_954" currentGame= "Dark Souls 3" progress= {this.calculateProgress()} criticRating= "7.4" userRating= "9.3" gameArtURL= "https://images-na.ssl-images-amazon.com/images/I/91gLzQFnCqL._AC_SX215_.jpg"/>
				<CurrentBacklog userID= "52468" gameCollection= {["Kingdom Hearts II", "Nier Automata", "Super Mario Oddessy", "Gears of War 4", "The Last of Us"]} />
				<CurrentGameChapters currentGame= "Dark Souls 3" gameChapters= {['Cemetery of Ash', 'Firelink Shrine', 'High Wall of Lothric', "Undead Settlement", "Road of Sacrifices", "Cathedral of the Deep", "Farron Keep"]} completedChapters= {['Cemetery of Ash']}/>
			</main>
		</section>
		)
	}
}