import React from 'react';
import { GameInfo } from './gameInfo'
import NavigationBar from './navbar';
import { SimilarGames } from './similarGames'
import { connect } from 'react-redux';
import * as actions from '../actions'
import LoadingScreen from './loading';

export class GamePage extends React.Component {
	constructor(props) {
		super(props)
		this.state= {
			loading: true
		}
	}

	componentWillMount() {
		//before rendering of components
		let gameNameDashed = this.props.match.params.game;
		let gameName = gameNameDashed.replace(/-/g, ' ');
		this.props.fetchGameInfo(gameName);	
		////this should go through the db to check if the game
		//is already in the users collection
		this.props.checkGameCollection(gameName);
	}

	gameCollectionStatus() {
		//checks for whether or not the game is in the users
		//collection or not
		
		if(this.props.gameAdded) {
			return (<button className= "add_to_collection_button btn btn-primary in_collection_button"> Game In Collection</button>
)
		} else { return (
			<button className= "add_to_collection_button btn btn-danger add_button" onClick= {this.handleButtonClick.bind(this)}> Add to Game Collection</button>
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
		let gameNameDashed = this.props.match.params.game;
		let gameName = gameNameDashed.replace(/-/g, ' ');
		this.props.addGameToCollection(gameNameDashed, gameName)
	}

	getCompletionTime() {
		//get number and convert to # of hours
		if(this.props.completionTime.normally) {
			let completionHours= this.props.completionTime.normally / 60 / 60 
			return completionHours.toFixed(2);
		} else if(this.props.completionTime.hastly) {
			let completionHours= this.props.completionTime.hastly / 60 / 60 
			return completionHours.toFixed(2);
		} else {
			return null
		}
	}

	renderGamePage() {
		if(this.props.gameName) {
		let gameNameDashed = this.props.match.params.game;
		let gameName = gameNameDashed.replace(/-/g, ' ');
		let responseGameName= this.props.gameName;
		console.log(responseGameName)
		console.log(gameName)
		if(gameName.toLowerCase() == responseGameName.toLowerCase()) {
			return(
				<main role="main" style= {{paddingTop: "65px"}}>
				<div className= "game_information">
					<GameInfo gameName= {this.props.match.params.game} gameArtURL={this.props.gameArtURL} completionTime={this.props.completionTime && this.getCompletionTime()} gameSummary={this.props.gameSummary} criticScore={this.props.criticScore} userScore={this.props.userScore} gameGenres={this.props.gameGenres}/>
				</div>
				<div className= "add_game_to_collection_section">
           			{this.gameCollectionStatus()}
        		</div>
        		<div className= "simiar_games_container">
        			<SimilarGames gameName= {this.props.match.params.game} similarGamesList={this.props.similarGamesList}/>
        		</div>
			</main>
				)
		} else {
			return(
				<main role="main" style= {{paddingTop: "65px"}}>
					<div className= "not_found_message">
						<h1 className="not_found_title">Sorry, {this.props.gameName} was not found</h1>
						<img className= "no_game_image" src= "../images/controller2.png" alt="controller_image"/>
						<p className="not_found_subtitle"> Please search for another game</p>
					</div>
				</main>
				)
		}
	} else if (this.props.error) {
		let gameNameDashed = this.props.match.params.game;
		let gameName = gameNameDashed.replace(/-/g, ' ');
		return(
				<main role="main" style= {{paddingTop: "65px"}}>
					<div className= "not_found_message">
						<h1 className="not_found_title">Sorry, "{gameName}" was not found</h1>
						<img className= "no_game_image" src= "../images/controller2.png" alt="controller_image"/>
						<p className="not_found_subtitle"> Please search for another game</p>
					</div>
				</main>
				)
	} else {
		return (
			<LoadingScreen />
			)
	}
	}

	render()  {
		return (
		<section className= "game_information_section">
			<header role= "banner">
				<NavigationBar history={this.props.history}/>
			</header>
			{this.renderGamePage()}
		</section>
		)
	}
}

const mapStatetoProps= (state) => {
	return { 
		gameName: state.game.gameName,
		gameSummary: state.game.summary,
		gameGenres: state.game.genreIds,
		gameArtURL: state.game.gameArtURL,
		criticScore: state.game.criticScore,
		userScore:state.game.userScore,
		similarGamesList:state.game.similarGamesList,
		completionTime: state.game.completionTime,
		username: state.auth.username,
		gameAdded: state.game.gameAdded,
		error: state.game.error
	};
}


export default connect(mapStatetoProps, actions)(GamePage);
