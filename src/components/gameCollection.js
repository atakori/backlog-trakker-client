import React from 'react';
import NavigationBar from './navbar';
import { ShowUserBacklog } from './userBacklog';


export class GameCollection extends React.Component {
	//on click of the backlog game to bring to dashboard
	//make sure to dispatch an action to update the currentGame state
	//dashboard will check to see if there is a game set as the props
	//to render the game and its info
	constructor(props) {
		super(props)
	}
	render() {
	return (
		<section className= "game_collection_section"> 
			<header role= "banner">
				<NavigationBar />
			</header>
			<main role= "main">
	        	<h2 className= "collection_title"> My Game Collection</h2>
				<ShowUserBacklog gameCollection= {["Doom", "Nioh", "The Lengend of Zelda, Breath of the Wild", "Splatoon 2", "Final Fantasy X", "Dark Souls 3",]} />
			</main>
		</section>
		)
	}
}