import React from 'react';
import { GameInfo } from './gameInfo'
import { LoggedInNav } from './loggedNav';
import { SimilarGames } from './similarGames'

export class GamePage extends React.Component {
	constructor(props) {
		super(props)
	}

	gameCollectionStatus() {
		//checks for whether or not the game is in the users
		//collection or not
		let gameInCollection= false;
		//this should go through the db to check and render
		//a true or false value
		if(gameInCollection) {
			return (<button className= "btn btn-primary in_collection_button"> In Collection</button>
)
		} else { return (
			<button className= "btn btn-primary add_button"> Add to Game Collection</button>
			)
		}
	}

	getSimilarGames(gameName) {
		// AJAX call to get a list of similar games
		return ["Nier Automata", "Demon's Souls", "Hollow Knight", "Dragon's Dogma"]
	}

	render() {
	return (
		<section className= "game_information_section">
			<header role= "banner">
				<LoggedInNav />
			</header>
			<main role="main" style= {{paddingTop: "65px"}}>
				<div className= "game_information">
					<GameInfo gameName= {this.props.match.params.game}/>
				</div>
				<div className= "add_game_to_collection_section">
           			{this.gameCollectionStatus()}
        		</div>
        		<div class= "simiar_games_section">
        			<SimilarGames gameName= {this.props.match.params.game}/>
        		</div>
			</main>
		</section>
		)
}
}