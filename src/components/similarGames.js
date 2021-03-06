import React from 'react';

export class SimilarGames extends React.Component {
	renderSimilarGames() {
		//renders Similar Games section with game names and Box Arts
		const recommendedGamesArray= this.props.similarGamesList
		if(recommendedGamesArray.length === 0) {
			return (
				<h2 className= "no_similar_games_message">Please visit the base game's page for recommended games!</h2>
				)
		}
		let transformedArray= []
		for(let i=0; i< recommendedGamesArray.length; i++) {
			let name= recommendedGamesArray[i].name;
			let game_art_url= recommendedGamesArray[i].gameArtUrl;
			game_art_url= "https:" + game_art_url;
			game_art_url= game_art_url.replace("thumb", "cover_small")
			transformedArray.push({name: name, game_art_url: game_art_url})
		}
		let gamesList = transformedArray.map((game, index) => (
			<li className= "game" key= {index}>
			  <img src= {game.game_art_url} alt="Game Box Art" className= "similar_game_box_art"/>
            <p className= "info_game_title"><a className= "info_game_link" href= {`/gameInfo/${game.name.replace(":", "").replace(/\s+/g,"-")}`}>{game.name}</a></p>
            </li>)
		)
		return gamesList;
	}
	
	render() {
	return (
		<section className= "similar_games_section">
			<h2 className= "similar_games_title"> You might also like...</h2>
			<ul className= "info_games_list">
				{this.renderSimilarGames()}
			</ul>
		</section>
		)
}
}