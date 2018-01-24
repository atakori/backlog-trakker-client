import React from 'react';
import { Ratings } from './ratings.js'

export class GameInfo extends React.Component {
	constructor(props) {
		super(props)
		/*this.state= {
			loading: false
		}*/
	}

	getGameSummary() {
		//AJAX call for game info
		return ( <p className= "game_summary">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget ex porttitor, 
				facilisis nulla non, mollis libero. Nunc sed tortor elit. Nulla blandit scelerisque nulla vitae 
				dapibus. In dictum mauris bibendum purus tincidunt mattis. Nullam dictum pretium nulla ac tempus. 
				Curabitur tincidunt turpis ipsum, sit amet sollicitudin augue consequat ut. Praesent eget vehicula 
				magna. Aliquam vel blandit magna. Maecenas id odio quis lacus venenatis placerat. 
				In vestibulum fermentum purus, vel faucibus ligula. Donec aliquam nunc id massa molestie, a auctor lacus accumsan.
				Fusce pretium, orci et pretium consequat, lectus urna varius dui, at aliquet est magna vel mi. Cras in augue ut 
				leo pretium tincidunt ac quis dui. Duis a lacus a nibh tempus sagittis sed eu eros. 
				Nam a convallis nibh.In tincidunt orci a odio fermentum, semper porttitor tellus tincidunt.
				Pellentesque ac massa aliquam, finibus augue in, finibus diam. Suspendisse sed feugiat arcu, vel posuere leo. 
				Nulla nec tincidunt diam, at interdum sem. Sed porttitor pharetra feugiat. Aenean tincidunt magna non mollis ornare. 
				Vivamus imperdiet orci eget mi laoreet luctus. </p>
			)
	}

	getGameGenre() {
		//AJAX call for game genre
		return (<span className= "genres"> Action/Adventure, RPG </span>
			)
	}

	getUserRatings() {
		//AJAX call for game user avg rating
		return 9.1
	}

	getCriticRatings() {
		//AJAX call for game critic avg rating
		return 8.3
	}

	getCompletionTime() {
		//AJAX call for game critic avg rating
		return 31.5
	}
	renderGameArt() {
		console.log(this.props.gameArtURL)
		let Url= this.props.gameArtURL;
		Url= "http:" + Url;
		Url= Url.replace("thumb", "cover_big");
		return(
			<div className= "Game_Art_container">
				<img src= {Url} alt="Game Box Art" className= "game_box_art"/>
			</div>
			)
	}

/*	componentReady(){
		this.setState({
			loading:false
		})
	}*/

	render() {
	return ( 
		<div className= "game_information">
			<h1 className= "main_game_title">{this.props.gameName.replace(/-/g, " ")}</h1>
			{this.renderGameArt()}
			<p className= "completion_time"> Time to beat main story: {this.getCompletionTime()} Hours</p>
			{this.props.gameSummary}
			<p className= "game_genre"> Genre: {this.props.gameGenres}</p>
			<Ratings userAvgRating= {this.props.userScore} criticAvgRating={this.props.criticScore} />
			{/*this.props.gameSummary && this.props.gameGenres && this.props.userScore && this.props.criticScore && this.componentReady()*/}
			{/*!this.state.loading && this.props.ready({gameInfo: true})*/}
		</div>
		)
	}
}