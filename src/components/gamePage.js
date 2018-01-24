import React from 'react';
import { GameInfo } from './gameInfo'
import NavigationBar from './navbar';
import { SimilarGames } from './similarGames'
import { connect } from 'react-redux';
import * as actions from '../actions'
import LoadingScreen from './loading';

let allStatuses= {}

class GamePage extends React.Component {
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
		console.log(gameNameDashed);
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
			<button className= "btn btn-primary add_button" onClick= {this.handleButtonClick.bind(this)}> Add to Game Collection</button>
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
		console.log(gameNameDashed);
		console.log(gameName);
		this.props.addGameToCollection(gameNameDashed, gameName)
	}

	getCurrentUsername() {
		/*this.props.addGameToCollection()*/
		console.log("Works");

	}

/*	ready = (status) => {
		allStatuses[Object.keys(status)[0]] = true;
		console.log(allStatuses);
		Object.keys(allStatuses).length
		if (Object.keys(allStatuses).length == 1) {
			this.setState({
				loading: false
			})
		}
	}*/

	render() {
	return (
		<section className= "game_information_section">
			<header role= "banner">
				<NavigationBar />
			</header>
			<main role="main" style= {{paddingTop: "65px"}}>
				<div className= "game_information">
					<GameInfo ready={this.ready} gameName= {this.props.match.params.game} gameSummary={this.props.gameSummary} criticScore={this.props.criticScore} userScore={this.props.userScore} gameGenres={this.props.gameGenres}/>
				</div>
				<div className= "add_game_to_collection_section">
           			{this.gameCollectionStatus()}
        		</div>
        		<div className= "simiar_games_section">
        			<SimilarGames gameName= {this.props.match.params.game} similarGamesList={this.props.similarGamesList}/>
        		</div>
			</main>
			<br/>
			<br/>
			<br/>
			<br/>
			{/*<LoadingScreen />*/}
			{/*this.state.loading && <LoadingScreen />*/}
		</section>
		)
	}
}

const mapStatetoProps= (state) => {
	return { 
		gameSummary: state.game.summary,
		gameGenres: state.game.genreIds,
		criticScore: state.game.criticScore,
		userScore:state.game.userScore,
		similarGamesList:state.game.similarGamesList,
		username: state.auth.username
	};
}

/*	case FETCH_GAME_INFO: 
			return {...state, data: action.payload.data};
		case FETCH_GAME_SUMMARY:
			return {...state, summary: action.payload}
		case FETCH_GAME_GENRE_IDS:
			return {...state, genreIds: action.payload}
		case FETCH_CRITIC_SCORES:
			return {...state, criticScore: action.payload}
		case FETCH_USER_SCORES:
			return {...state, userScore: action.payload}
		case FETCH_SIMILAR_GAME_IDS:
			return {...state, similarGameIds: action.payload}
		*/

export default connect(mapStatetoProps, actions)(GamePage);
