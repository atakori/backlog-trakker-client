import React from 'react';
import { Ratings } from './ratings.js'

export class GameInfo extends React.Component {
	renderGameArt() {
		let Url= this.props.gameArtURL;
		Url= "https:" + Url;
		Url= Url.replace("thumb", "cover_big");
		return(
			<div className= "info_game_art_container">
				<img src= {Url} alt="Game Box Art" className= "info_game_box_art"/>
			</div>
			)
	}

	renderGameGenre() {
		//if no game genre, do not show the field 
		if (this.props.gameGenres){
			return(
			<p className= "info_game_genre"> Genre: {this.props.gameGenres}</p>
		)
		} else {
			return //blank
		}
	}

	render() {
	return ( 
		<div className= "game_information">
		<h1 className= "info_main_game_title">{this.props.gameName.replace(/-/g, " ")}</h1>
			<div className= "main_game_info_container">
				{this.renderGameArt()}
				<div className= "info_summary_and_genre">
				{/*only renders time to beat if available*/}
				{this.props.completionTime && <p className= "info_completion_time"> Estimated time to beat: {this.props.completionTime} Hours</p>}
					<p className= "info_game_summary">{this.props.gameSummary}</p>
					{this.renderGameGenre()}
				</div>
			</div>
			<Ratings userAvgRating= {this.props.userScore} criticAvgRating={this.props.criticScore} />
		</div>
		)
	}
}