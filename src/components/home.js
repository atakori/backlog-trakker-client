import React from 'react';
import NavigationBar from './navbar';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'

export class LandingPage extends React.Component {
	componentWillMount() {
		this.props.signoutUser();
	}

	render() {
	return (
		<section className= "landing_page">
			<header role= "banner">
				<NavigationBar />
			</header>
			<main role= "main">
				<div className= "jumbotron title_section" style= {{paddingTop: "65px"}}> 
					<h1 className= "main_title">Checkpoint </h1>
					<p className= "subtitle" id="main_subtitle"> Track your backlog to the next level</p>
				</div> 
				<section className= "landing_page_info">
				<div className= "more_info info_one">
					<h2 className= "landing_page_title"><i className="fas fa-tasks"></i>  <span className="title_text info_one_title"> Never lose track of your game progress</span>  <i className="fas fa-tasks"></i></h2>
					<div className= "home_character_container">
						<img width= "426" height= "426" className= "crash_character" src= "/images/crash.png" alt= "login character" />
					</div>
					<p className= "landing_page_details"> Checkpoint helps you keep track of your video game backlog by allowing you to mark your progress for each game that you started and see how close you are to completing them.</p>
					<hr className= "style11"/> 
				</div>
				<div className= "more_info info_two">
					<h2 className= "landing_page_title"><i className="fas fa-gamepad"></i>  <span className="title_text">Build Your Collection</span>  <i className="fas fa-gamepad"></i></h2>
					<div className= "home_character_container">
						<img width= "426" height= "426" className= "layton_character" src= "/images/professorL.png" alt= "login character" />
					</div>
					<p className= "landing_page_details"> Build your virtual game library and always have a list of your current backlog so you never lose sight of your current backlog even when new games come out</p>
					<hr className= "style11"/> 
				</div>
				<div className= "more_info info_three">
					<h2 className= "landing_page_title"><i className="fab fa-searchengin"></i>  <span className="title_text">Search for new games</span>  <i className="fab fa-searchengin"></i></h2>
					<div className= "home_character_container">
						<img width= "426" height= "426" className= "mario_character" src= "/images/mario.png" alt= "login character" />
					</div>
					<p className= "landing_page_details"> Have access to the latest game information for new games to help you decide if you should just add one more game to your backlog</p>
					<hr className= "style11"/> 
				</div>
				<h3 className= "ready_button_title"> Ready to Crush your Backlog? </h3>
				<Link to= "/signup"><button className= "home_sign_up_button btn btn-success">Click here to sign up</button> </Link>
				</section>
			</main>
		</section>
		)
	}
}

export default connect(null, actions)(LandingPage)