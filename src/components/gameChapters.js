import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CurrentGameChapters extends React.Component {
	constructor(props) {
		super(props)
		this.handleChange= this.handleChange.bind(this);
	}

	checkCompletedChapters(level) {
		let result= false;
		this.props.completedChapters.forEach(function(completedChapter){
			if(completedChapter == level) {
				result= true;
			}
		});
		return result
		}

	renderGameChapters() {
		{
		let that= this;
		let chapters= this.props.gameChapters;
			return (
				chapters.map((chapter,index) => ( 
			<li> <input checked= 
			{this.checkCompletedChapters(chapter)} 
			id={chapter} 
			className= "completedChapter" 
			type="checkbox" 
			name="game_chapter" 
			onChange={that.handleChange.bind(this,chapter)}
			ref={input => {(this.input = input)}} 
			/>
			<label for={chapter}>{<span className= {this.checkCompletedChapters(chapter)? "cross": ""}>{chapter}</span>}</label>
			</li>
			))
		)}
	}		

	handleChange(chapter) {
		//makes state change to show which chapter was crossed off
		// causes progress bar to increase/decrease
		//add chapter to db or retract from db list and 
		console.log(chapter)
		console.log("working");
		console.log(this.input[chapter]);
		let gameName= this.props.currentGame;
		this.props.handleChapterChange(gameName, chapter);
		//this.renderGameChapters(mockchapter);
	}

	render() {
		return (
			<div className= "game_chapters">
				<h2 className= "chapters_section_title"> {this.props.currentGame} Progress </h2>
				<ul>
            		{this.renderGameChapters(this.props.completedChapters)}
          		</ul>
			</div>
			)
	}
}

const mapStatetoProps= (state) => {
	return { 
		/*selectedGame: state.game.selectedGame*/
		/*above is for checking if there was a specific
		game selected by user from their collection*/
	};
}

export default connect(mapStatetoProps, actions)(CurrentGameChapters);

