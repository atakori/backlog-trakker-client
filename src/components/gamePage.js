import React from 'react';
import { GameInfo } from './gameInfo'
import { LoggedInNav } from './loggedNav.js';

export class GamePage extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
	return (
		<section className= "game_information_section">
			<header role= "banner">
				<LoggedInNav />
			</header>
			<main role="main" style= {{paddingTop: "65px"}}>
				<div className= "game_information">
					<GameInfo/>
					<p> {this.props.match.params.game}</p>
					<p> skipping </p>
				</div>
			</main>
		</section>
		)
}
}