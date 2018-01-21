import React from 'react';
import NavigationBar from './navbar';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'

class LandingPage extends React.Component {
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
				<div className= "container title_section" style= {{paddingTop: "65px"}}> 
					<h1 className= "main_title">Checkpoint </h1>
					<p className= "subtitle"> Tackle that backlog</p>
				</div>
				<div className= "more_info info_one">
					<h2 className= "title"> Too many unfinished games?</h2>
					<p className= "details"> Checkpoint helps you keep track of your video game backlog by allowing you to mark your progress for each game that you started and how close you are to completing them.</p>
				</div>
				<div className= "more_info info_two">
					<h2 className= "title"> Build Your Collection?</h2>
					<p className= "image"> [Screenshot or image here]</p>
					<p className= "details"> Search for new games to add to your game library and view game information to help you decide if you should add just one more awesome game to your backlog</p>
				</div>
				<div className= "more_info info_three">
					<h2 className= "title"> Too many unfinished games?</h2>
					<p className= "image"> [Screenshot or image here]</p>
					<p className= "details"> Backlog Trakker helps you keep track of your video game backlog by allowing you to mark your progress for each game that you started and how close you are to completing them.</p>
				</div>
				<Link to= "/signup"><button className= "btn btn-primary">Tackle that Backlog </button> </Link>
			</main>
		</section>
		)
	}
}

export default connect(null, actions)(LandingPage)