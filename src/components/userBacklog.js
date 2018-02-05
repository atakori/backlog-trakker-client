import React from 'react';
import { Progress } from 'antd';
import { Link } from 'react-router-dom';

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
		transformedUrl= transformedUrl.replace("thumb", "cover_big");
		return transformedUrl;
	}

	renderGameStatus(completedChapters, totalChapters) {
		let percentComplete = ((completedChapters.length / totalChapters.length) *100)
		if (percentComplete === 0) {
			return (
				<button className= "start_status btn btn-danger">NOT STARTED</button>
				)
		}
		return (
			<div className= "start_status">
				<p>Percentage complete</p>
		        <Progress type= "circle" percent= {percentComplete.toFixed(2)}/>
			</div>
			)
	}

	renderGameInfoButton(gameName) {
		let gameUrl= gameName.replace(/\s+/g, "-");
		return (
			<Link to={`/gameInfo/${gameUrl}`}> <button className= "game_info_button btn btn-primary"> Game Info</button> </Link>
			)
	}

	renderRedirectButton(gameName) {
		return (
			<Link to={{pathname:"/dashboard", state: {specificGame: {gameName}}}}><button className= "backlog_update_button btn btn-danger"> Update Progress for {gameName}</button></Link>
			)	
	}

	renderUsersFullBacklog() {
		// render full backlog from user's game collection
		let games= this.props.gameCollection;	
			let gameslist= games.map((game, index) => (
			<div className= "game_info" key={index}>
	            <li className= "game" key= {index}>
	            <p className= "backlog_game_title">{game.name}</p>
			  	<img src= {this.renderGameArtUrl(game.gameArtUrl)} alt="Game Box Art" className= "backlog_game_box_art"/>
            	</li>
            	{this.renderRedirectButton(game.name)}
            	{this.renderGameInfoButton(game.name)}
            	 <p className= "game_completion_status"> {this.renderGameStatus(game.completedChapters, game.gameChapters)}</p>
            	}
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