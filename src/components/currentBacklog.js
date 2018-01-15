import React from 'react';

export class CurrentBacklog extends React.Component {
	constructor(props) {
		super(props);
	}

	renderTopBacklogGames() {
		let games = this.props.gameCollection;
		if (games.length > 4) {
			games= games.slice(0,5)
			let gameslist= games.map(game => (
			<div className= "game">
				<p className= "Box Art Here"> [Box Art]</p>
				<p className= "game_title">{game}</p>
			</div>))
			return gameslist;
			//limit the games collection to only show 5 games
		} else {
			let gameslist= games.map(game => (
			<div className= "game">
				<p className= "Box Art Here"> [Box Art]</p>
				<p className= "game_title">{game}</p>
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
		</section>
		)
}
}