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
import { Modal } from 'antd';

export class Dashboard extends React.Component {
	constructor(props) {
		super(props);

		//need to get initial state variables to to match backend db values
		this.state={
			loading: true,
			intervalId: 0,
			scrollStepInPx: "50",
			delayInMs: "18",
			visible: true
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

	//Modal functions

	showModal= () => {
	    this.setState({
	      visible: true
	    });
	}

 	handleOk= (e) =>{
    	this.setState({
      	  visible: false
    	});
  	}

  	handleCancel= (e)=> {
    	this.setState({
          visible: false
    	});
  	}

  	//Scroll functions

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

	//Dashboard functions
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

	renderHowToUseText() {
		return (
			<div className="modal_text">
				<p>Hey there!</p>
				<p>Checkpoint currently searches external sites 
				to find game chapters for the games you want to add to your collection.
				However, if a game's chapters are not currently available then you 
				won't be able to add the game to your collection :(</p>
				<p>Games typically affected by this are super new or old games, but don't fret!
				 We are currently working on making sure that all games are supported!</p>
				<p>In the meantime, most popular games like Dark Souls, Celeste, Uncharted, and 
				The Legend of Zelda: Breath of the Wild are all currently supported so give them a search! 
				 </p>
				 <p> Happy Gaming!!!</p> 
			</div>
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
				<Modal title= "Welcome to Checkpoint!" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel} okText="Awesome">
					{this.renderHowToUseText()}
				</Modal>
				<h1 className= "no_games_title_container"><img height= "50" className= "dpad" src= "./images/Dpad-up.png" alt= "Dpad_Up" />     
  				<span className= "no_games_title">{this.props.currentUser}'s Dashboard</span> <img height= "50" className= "dpad" src= "./images/Dpad-up.png" alt= "Dpad_Up" />
				</h1>
				<div className= "welcome_message_container">
						<h2 className=  "welcome_message">Welcome to Checkpoint!</h2>
					<div className= "dashboard_image_container">
						<img height= "150" className= "empty_case_image" src= "./images/no_game.jpg" alt= "empty_case" />
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
				<CurrentGameProgress user= {this.props.currentUser} currentGame= {this.props.gameCollection[0].name} progress= {this.calculateProgress()} gameArtURL= {this.renderGameArtUrl()}/>
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
	};
}

export default connect(mapStatetoProps, actions)(Dashboard);
