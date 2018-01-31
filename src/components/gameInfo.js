import React from 'react';
import { Ratings } from './ratings.js'

export class GameInfo extends React.Component {
	constructor(props) {
		super(props)
		/*this.state= {
			loading: false
		}*/
	}

	renderGameArt() {
		let Url= this.props.gameArtURL;
		Url= "http:" + Url;
		Url= Url.replace("thumb", "cover_big");
		return(
			<div className= "Game_Art_container">
				<img src= {Url} alt="Game Box Art" className= "game_box_art"/>
			</div>
			)
	}

	render() {
	return ( 
		<div className= "game_information">
			<h1 className= "main_game_title">{this.props.gameName.replace(/-/g, " ")}</h1>
			{this.renderGameArt()}
			{/*only renders time to beat if available*/}
			{this.props.completionTime && <p className= "completion_time"> Estimated time to beat: {this.props.completionTime} Hours</p>}
			{this.props.gameSummary}
			<p className= "game_genre"> Genre: {this.props.gameGenres}</p>
			<Ratings userAvgRating= {this.props.userScore} criticAvgRating={this.props.criticScore} />
		</div>
		)
	}
}