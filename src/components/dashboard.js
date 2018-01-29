import React from 'react';
import NavigationBar from './navbar';
import {CurrentGameProgress} from './currentGameProgress';
import CurrentGameChapters from './gameChapters'
import { CurrentBacklog } from './currentBacklog';
import { connect } from 'react-redux'
import * as actions from '../actions'
import LoadingScreen from './loading'

class Dashboard extends React.Component {
	constructor(props) {
		super(props);

		//need to get initial state variables to to match backend db values
		this.state={
			loading: true,
			intervalId: 0,
			scrollStepInPx: "50",
			delayInMs: "18"
    	}
	}

	componentWillMount() {
		//before rendering of components
		this.props.getCurrentUser();
		if(this.props.location.state){
			this.props.getGameCollection(this.props.location.state.specificGame.gameName);
		} else {
			this.props.getGameCollection();
		}
	}

	scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.state.scrollStepInPx);
  }
  
	scrollToTop() {
	  let intervalId = setInterval(this.scrollStep.bind(this), this.state.delayInMs);
	  this.setState({ intervalId: intervalId });
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
		let completedChapters= this.props.gameCollection[0].completedChapters;
		let totalGameChapters= this.props.gameCollection[0].gameChapters;
		return ((completedChapters.length) / (totalGameChapters.length) * 100).toFixed(2);
	}

	renderGameArtUrl() {
		let url= this.props.gameCollection[0].gameArtUrl;
		url= "http:" + url;
		url= url.replace("thumb", "cover_big");
		return url;
	}

	renderGameProgress() {
		return(
			<main role="main" style= {{paddingTop: "65px"}}>
				<CurrentGameProgress user= {this.props.currentUser} currentGame= {this.props.gameCollection[0].name} progress= {this.calculateProgress()} criticRating= "7.4" userRating= "9.3" gameArtURL= {this.renderGameArtUrl()}/>
				<CurrentGameChapters currentGame= {this.props.gameCollection[0].name} gameChapters= {this.props.gameCollection[0].gameChapters} completedChapters= {this.props.gameCollection[0].completedChapters} />
				<CurrentBacklog gameCollection= {this.props.userBacklog} getSpecificGame= {(gameName) => this.props.getGameCollection(gameName)} scrollToTop={()=> this.scrollToTop()}/>
			</main>
			)
	}

	//on click of the backlog game to bring to dashboard
	//make sure to dispatch an action to update the currentGame state
	//dashboard will check to see if there is a game set as the props
	//to render the game and its info

	render() {
	if(!this.props.gameCollection | !this.props.userBacklog) {
		return(
		<section className= "signup_section">
			<header role= "banner">
				<NavigationBar />
			</header>
			<main role="main" style= {{paddingTop: "65px"}}>
				<LoadingScreen />
			</main>
		</section>
			)
	} else {
		return (
			<section className= "signup_section">
				<header role= "banner">
					<NavigationBar />
				</header>
				{this.renderGameProgress()}
			</section>
		)
	}
}
}

const mapStatetoProps= (state) => {
	return { 
		message: state.auth.message,
		currentUser: state.auth.currentUser,
		gameCollection: state.game.gameCollection,
		userBacklog: state.game.userBacklog,
		loading: state.game.loading
		/*selectedGame: state.game.selectedGame*/
		/*above is for checking if there was a specific
		game selected by user from their collection*/
	};
}

export default connect(mapStatetoProps, actions)(Dashboard);
