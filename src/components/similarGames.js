import React from 'react';


let game_art_url;
export class SimilarGames extends React.Component {
	constructor(props) {
		super(props)
	}

	renderSimilarGames() {
		//renders Similar Games section with game names and Box Arts
		const recommendedGamesArray= this.props.similarGamesList
		let transformedArray= []
		for(let i=0; i< recommendedGamesArray.length; i++) {
			let name= recommendedGamesArray[i].name;
			let game_art_url= recommendedGamesArray[i].gameArtUrl;
			game_art_url= "http:" + game_art_url;
			game_art_url= game_art_url.replace("thumb", "cover_small")
			transformedArray.push({name: name, game_art_url: game_art_url})
		}
		console.log(transformedArray)
		let gamesList = transformedArray.map((game, index) => (
			<li className= "game" key= {index}>
			  <img src= {game.game_art_url} alt="Game Box Art" className= "game_box_art"/>
            <p className= "game_title"><a href= {`/gameInfo/${game.name.replace(/\s/g, "-")}`}>{game.name}</a></p>
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
				{this.renderSimilarGames()}
			</ul>
		</section>
		)
}
}