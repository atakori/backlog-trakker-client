import React from 'react';

export class ShowUserBacklog extends React.Component {
	constructor(props) {
		super(props)
	}

	getGameArt(game) {
		//AJAX call to get game art
		return `[Box Art for ${game}]`;
	}

	renderGameArtUrl(url) {
		let transformedUrl= "http:" + url;
		transformedUrl= transformedUrl.replace("thumb", "cover_small_2x");
		console.log(transformedUrl);
		return transformedUrl;
	}
/*
	renderGameStatus(startStatus) {
		if()
	}*/

	renderUsersFullBacklog() {
		// render full backlog from user's game collection
		let games= this.props.gameCollection;
			let gameslist= games.map((game, index) => (
			<div className= "game_info">
	            <li className= "game" key= {index}>
			  	<img src= {this.renderGameArtUrl(game.gameArtUrl)} alt="Game Box Art" className= "game_box_art"/>
            	<p className= "game_title"><a href= {`/gameInfo/${game.name.replace(/\s/g, "-")}`}>{game.name}</a></p>
            	</li>
            	 <p className= "game_completion_status"> [Game Status goes here] </p>
            </div>
			))
			return gameslist;
	}	

	/*<li className= "game" key= {index}>
			  <img src= {game.game_art_url} alt="Game Box Art" className= "game_box_art"/>
            <p className= "game_title"><a href= {`/gameInfo/${game.name.replace(/\s/g, "-")}`}>{game.name}</a></p>
            </li>)*/

	render() {
	return (
			<div className= "user_games">
				<ul className= "game_list">
					{this.renderUsersFullBacklog()}
				</ul>
			</div>
		)
	}
}