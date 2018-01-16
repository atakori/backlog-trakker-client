import React from 'react';


export class SimilarGames extends React.Component {
	constructor(props) {
		super(props)
	}

	getSimilarGames() {
		//AJAX call to get similar games
		let recommendedGames= ["Nier Automata", "Demon's Souls", "Hollow Knight", "Dragon's Dogma"]
		let gamesList = recommendedGames.map(game => (
			<li class= "game">
              <p class="box_art">[Box Art]</p>
            <p class= "game_title"><a href= {`/gameInfo/${game.replace(/\s/g, "-")}`}>{game}</a></p>
            </li>)
		)
		return gamesList;
	}

	render() {
	return (
		<section className= "simiar_games_section">
			<h2 className= "similar_games_title"> You might also like...</h2>
			<ul className= "games_list">
				{this.getSimilarGames()}
			</ul>
		</section>

		
		)
}
}