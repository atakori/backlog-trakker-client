import React from 'react';

export class SimilarGames extends React.Component {
	constructor(props) {
		super(props)
	}

	getSimilarGames() {
		//AJAX call to get similar games
		const recommendedGames= this.props.similarGamesList
		let gamesList = recommendedGames.map((game, index) => (
			<li className= "game" key= {index}>
              <p className="box_art">[Box Art]</p>
            <p className= "game_title"><a href= {`/gameInfo/${game.replace(/\s/g, "-")}`}>{game}</a></p>
            </li>)
		)
		return gamesList;
	}

	renderGames(list) {
		return list
	}

	render() {
	return (
		<section className= "similar_games_section">
			<h2 className= "similar_games_title"> You might also like...</h2>
			<ul className= "games_list">
				{this.getSimilarGames()}
			</ul>
		</section>
		)
}
}