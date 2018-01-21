import React from 'react';
import { GameInfo } from './gameInfo'
import NavigationBar from './navbar';
import { SimilarGames } from './similarGames'
import { connect } from 'react-redux';
import * as actions from '../actions'

class GamePage extends React.Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {
		//before rendering of components
		let gameName = this.props.match.params.game;
		gameName = gameName.replace('-', ' ');
		console.log(gameName);
		this.props.fetchGameInfo(gameName);
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
			<button className= "btn btn-primary add_button" onClick= {this.handleButtonClick}> Add to Game Collection</button>
			)
		}
	}

	getSimilarGames(gameName) {
		// AJAX call to get a list of similar games
		return ["Nier Automata", "Demon's Souls", "Hollow Knight", "Dragon's Dogma"]
	}

	handleButtonClick() {
		//adds the game to the user's game collection list
		//in the db
		alert("game added");
	}

	render() {
	return (
		<section className= "game_information_section">
			<header role= "banner">
				<NavigationBar />
			</header>
			<main role="main" style= {{paddingTop: "65px"}}>
				<div className= "game_information">
					<GameInfo gameName= {this.props.match.params.game}/>
				</div>
				<div className= "add_game_to_collection_section">
           			{this.gameCollectionStatus()}
        		</div>
        		<div className= "simiar_games_section">
        			<SimilarGames gameName= {this.props.match.params.game}/>
        		</div>
        		{this.props.gameSummary}
			</main>
		</section>
		)
	}
}

const mapStatetoProps= (state) => {
	return { gameSummary: state.game.summary };
}

export default connect(mapStatetoProps, actions)(GamePage);
