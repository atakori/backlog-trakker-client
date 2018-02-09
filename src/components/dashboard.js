import React from 'react';
import NavigationBar from './navbar';
import {CurrentGameProgress} from './currentGameProgress';
import CurrentGameChapters from './gameChapters'
import { CurrentBacklog } from './currentBacklog';
import { connect } from 'react-redux';
import * as actions from '../actions';
import LoadingScreen from './loading';
import Footer from './footer';
import FixedFooter from './collectionFooter.js'

export class Dashboard extends React.Component {
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

	calculateProgress(){
		let completedChapters= this.props.gameCollection[0].completedChapters;
		let totalGameChapters= this.props.gameCollection[0].gameChapters;
		return ((completedChapters.length) / (totalGameChapters.length) * 100).toFixed(2);
	}

	renderGameArtUrl() {
		let url= this.props.gameCollection[0].gameArtUrl;
		url= "https:" + url;
		url= url.replace("thumb", "cover_big");
		return url;
	}

	renderGameProgress() {
		return(
			<main role="main" className= "main" style= {{paddingTop: "65px"}}>
				<CurrentGameProgress user= {this.props.currentUser} currentGame= {this.props.gameCollection[0].name} progress= {this.calculateProgress()} criticRating= "7.4" userRating= "9.3" gameArtURL= {this.renderGameArtUrl()}/>
				<CurrentGameChapters currentGame= {this.props.gameCollection[0].name} gameChapters= {this.props.gameCollection[0].gameChapters} completedChapters= {this.props.gameCollection[0].completedChapters} />
				<CurrentBacklog gameCollection= {this.props.userBacklog} getSpecificGame= {(gameName) => this.props.getGameCollection(gameName)} scrollToTop={()=> this.scrollToTop()}/>
				<Footer />
			</main>
			)
	}

	//on click of the backlog game to bring to dashboard
	//make sure to dispatch an action to update the currentGame state
	//dashboard will check to see if there is a game set as the props
	//to render the game and its info

	renderDashboardView() {
		if(!this.props.gameCollection | !this.props.userBacklog) {
		return(
			<main role="main" style= {{paddingTop: "65px"}}>
				<LoadingScreen className= "loading_component"/>
			</main>
			)
	} else if (this.props.gameCollection[0] === undefined) {
		return(
			<main role="main" className= "main" style= {{paddingTop: "65px"}}>
				<h1 className= "no_games_title_container"><img height= "50" className= "dpad" src= "./images/Dpad-up.png" alt= "Dpad_Up" />     
  				<span className= "no_games_title">{this.props.currentUser}'s Dashboard</span> <img height= "50" className= "dpad" src= "./images/Dpad-up.png" alt= "Dpad_Up" />
				</h1>
				<div className= "welcome_message_container">
						<h2 className=  "welcome_message">Welcome to Checkpoint!</h2>
					<div className= "dashboard_image_container">
						<img height= "150" className= "empty_case_image" src= "./images/no_game.jpg" alt= "Dpad_Up" />
					</div>
					<h2 className= "nogames_subtitle">Looks like You don't have any games in your collection</h2>
					<h3 className= "start_searching_message">Start searching for games and build your virtual collection in the searchbar above</h3>
				</div>
				<FixedFooter />
			</main>
			)
	} else {
		return (
			<main role="main" className= "main" style= {{paddingTop: "65px"}}>
				<CurrentGameProgress user= {this.props.currentUser} currentGame= {this.props.gameCollection[0].name} progress= {this.calculateProgress()} criticRating= "7.4" userRating= "9.3" gameArtURL= {this.renderGameArtUrl()}/>
				<CurrentGameChapters currentGame= {this.props.gameCollection[0].name} gameChapters= {this.props.gameCollection[0].gameChapters} completedChapters= {this.props.gameCollection[0].completedChapters} />
				<br/>
				<CurrentBacklog gameCollection= {this.props.userBacklog} getSpecificGame= {(gameName) => this.props.getGameCollection(gameName)} scrollToTop={()=> this.scrollToTop()}/>
				<Footer />
			</main>
			)
		}
	}

	render() {
		return (
			<section className= "dashboard_section">
				<header role= "banner">
					<NavigationBar history= {this.props.history}/>
				</header>
				{this.renderDashboardView()}
			</section>
		)
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
