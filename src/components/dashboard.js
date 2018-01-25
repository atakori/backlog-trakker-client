import React from 'react';
import {LoggedInNav} from './loggedNav';
import NavigationBar from './navbar';
import {CurrentGameProgress} from './currentGameProgress';
import { CurrentGameChapters } from './gameChapters'
import { CurrentBacklog } from './currentBacklog';
import { connect } from 'react-redux'
import * as actions from '../actions'

class Dashboard extends React.Component {
	constructor(props) {
		super(props);

		//need to get initial state variables to to match backend db values
		this.state={
			gameCollection: ["Kingdom Hearts II", "Nier Automata", "Super Mario Oddessy", "Gears of War 4", "The Last of Us"],
			gameChapters: ['Cemetery of Ash', 'Firelink Shrine', 'High Wall of Lothric', "Undead Settlement", "Road of Sacrifices", "Cathedral of the Deep", "Farron Keep"],
			completedChapters: ['Cemetery of Ash']
    	}
	}

	componentWillMount() {
		//before rendering of components
		/*this.props.fetchMessage();*/
		this.props.getCurrentUser();
		this.props.getGameCollection();
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

	getCurrentGame() {
		//triggered when another game in the user's backlog is clicked
		//set the currentGame state
	}

	render() {
	return (
		<section className= "signup_section">
			<header role= "banner">
				<NavigationBar />
			</header>
			<main role="main" style= {{paddingTop: "65px"}}>
				<CurrentGameProgress user= {this.props.currentUser} currentGame= "Dark Souls 3" progress= {this.calculateProgress()} criticRating= "7.4" userRating= "9.3" gameArtURL= "https://images-na.ssl-images-amazon.com/images/I/91gLzQFnCqL._AC_SX215_.jpg"/>
				<CurrentGameChapters currentGame= "Dark Souls 3" gameChapters= {this.state.gameChapters} completedChapters= {this.state.completedChapters}/>
				<CurrentBacklog userID= "52468" gameCollection= {this.state.gameCollection} />
				{this.props.message}
			</main>
		</section>
		)
	}
}

const mapStatetoProps= (state) => {
	return { 
		message: state.auth.message,
		currentUser: state.auth.currentUser
	};
}

export default connect(mapStatetoProps, actions)(Dashboard);
