import React from 'react';
import { Link } from 'react-router-dom';

 
export class CurrentBacklog extends React.Component {
	constructor(props) {
		super(props);
	}

	renderGameArt(url) {
		//AJAX call to get game art
		let game_art_url= "http:" + url;
		game_art_url= game_art_url.replace("thumb", "cover_small")
		return (
			<img src= {game_art_url} alt="Game Box Art" className= "game_box_art"/>
			)
	}

	renderGameInfoButton(gameName) {
		let gameUrl= gameName.replace(/\s+/g, "-");
		console.log(gameUrl);
		return (
			<Link to={`/gameInfo/${gameUrl}`}> <button className= "game_info_button btn btn-primary"> Game Info</button> </Link>
			)
	}

	renderTopBacklogGames() {
		let games = this.props.gameCollection;
		if (games.length > 4) {
			games= games.slice(0,5)
			let gameslist= games.map(game => (
			<div className= "game">
				<p className= "Box Art Here"> {this.renderGameArt(game.gameArtUrl)}</p>
				<p className= "game_title">{game.name} </p>
				{this.renderGameInfoButton(game.name)}
			</div>))
			return gameslist;
			//limit the games collection to only show 5 games
		} else {
			let gameslist= games.map(game => (
			<div className= "game">
				<p className= "Box Art Here"> {this.renderGameArt(game.gameArtUrl)}</p>
				<button className= "game_title btn btn-danger" onClick= {()=> this.props.getSpecificGame(game.name)}>{game.name}</button>
				{this.renderGameInfoButton(game.name)}

			</div> 
			))
			return gameslist;
		}
	}


	render() {
	return (
		<section className= "mini_game_collection">
			<h2 className= "collection_title"> Current Backlog </h2>
			<div className= "user_top5_games">
				{this.renderTopBacklogGames()}
			</div>
			<div className="game_collection_button"> 
				<Link to= {`/mygamelibrary/${this.props.userID}`}> <button className= "btn btn-primary"> Full Game Collection</button> </Link>
			</div>
		</section>
		)
	}
}