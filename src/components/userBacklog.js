import React from 'react';

export class ShowUserBacklog extends React.Component {
	constructor(props) {
		super(props)
	}

	renderUsersFullBacklog() {
		//game collection prop will have to be updated via API cal to the server
		//to get the users current games
		//need to do AJAX call for box art
		//STARTED/ NOT STARTED status must be an AJAX call for if there are any 
		//completed chapters for that game for the user 
		let games= this.props.gameCollection;
			let gameslist= games.map(game => (
			<div class= "game_info">
	             <p class= "game_art"> [Box Art]</p>
	             <li class= "game_title">
	             <a href= {`/gameInfo/${game.replace(/\s/g, "-")}`}>{game} </a>
	             </li>
            	 <p className= "game_completion_status"> [Game Status goes here] </p>
            </div>
			))
			return gameslist;
	}	

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