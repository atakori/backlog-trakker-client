import React from 'react';
import { Link } from 'react-router-dom';

 
export class CurrentBacklog extends React.Component {
	constructor(props) {
		super(props);
	}

	renderGameArt(url) {
		//AJAX call to get game art
		let game_art_url= "http:" + url;
		game_art_url= game_art_url.replace("thumb", "cover_big")
		return (
			<img src= {game_art_url} alt="Game Box Art" className= "collection_game_box_art"/>
			)
	}

	renderGameInfoButton(gameName) {
		let gameUrl= gameName.replace(/\s+/g, "-");
		console.log(gameUrl);
		return (
			<a href={`/gameInfo/${gameUrl}`}> <button className= "game_info_button btn btn-primary"> Game Info</button> </a>
			)
	}

	getSpecificGame(gameName) {
		this.props.getSpecificGame(gameName);
		this.props.scrollToTop();
	}

	renderTopBacklogGames() {
		let games = this.props.gameCollection;
		if (games.length > 4) {
			games= games.slice(0,5)
			let gameslist= games.map((game,index) => (
			<div key= {index}className= "game">
				<p className= "Box Art Here"> {this.renderGameArt(game.gameArtUrl)}</p>
				<p className= "game_title">{game.name} </p>
				{this.renderGameInfoButton(game.name)}
			</div>))
			return gameslist;
			//limit the games collection to only show 5 games
		} else {
			let gameslist= games.map((game,index) => (
			<div key= {index} className= "game">
				<p className= "collection_game_title">{game.name}</p>
				<p className= "Box Art Here"> {this.renderGameArt(game.gameArtUrl)}</p>
				<button className= "update_progress_button btn btn-danger" onClick= {() => this.getSpecificGame(game.name)}>Update Progress</button>
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
			<div className="full_game_collection_button"> 
				<a className= "game_backlog_link" href= {`/mygamelibrary/${this.props.userID}`}> <button className= "backlog_link_button btn btn-success">Full Game Collection</button> </a>
			</div>
		</section>
		)
	}
}