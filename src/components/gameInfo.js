import React from 'react';
import { Ratings } from './ratings.js'

export class GameInfo extends React.Component {
	constructor(props) {
		super(props)
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
		return (<span class= "genres"> Action/Adventure, RPG </span>
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


	render() {
	return ( 
		<div className= "game_information">
			<h1 className= "main_game_title">{this.props.gameName.replace(/-/g, " ")}</h1>
			<p className= "game_summary">{this.getGameSummary()}</p>
			<p class= "game_genre"> Genre: {this.getGameGenre()}</p>
			<Ratings userAvgRating= {this.getUserRatings()} criticAvgRating= {this.getCriticRatings()} />
		</div>

		)
	}
}