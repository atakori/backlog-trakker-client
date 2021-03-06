import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

export class CurrentGameChapters extends React.Component {
	constructor(props) {
		super(props)
		this.handleChange= this.handleChange.bind(this);
	}

	checkCompletedChapters(level) {
		let result= false;
		this.props.completedChapters.forEach(function(completedChapter){
			if(completedChapter === level) {
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
			<li key= {index}> <input checked= 
			{this.checkCompletedChapters(chapter)} 
			id={chapter} 
			className= "completedChapter" 
			type="checkbox" 
			name="game_chapter" 
			onChange={that.handleChange.bind(this,chapter)}
			ref={input => {(this.input = input)}} 
			/>
			<label htmlFor={chapter}>{<span className= {this.checkCompletedChapters(chapter)? "cross": ""}>{chapter}</span>}</label>
			</li>
			))
		)}
	}		

	handleChange(chapter) {
		//makes state change to show which chapter was crossed off
		// causes progress bar to increase/decrease
		//add chapter to db or retract from db list and 
		let gameName= this.props.currentGame;
		this.props.handleChapterChange(gameName, chapter);
	}

	render() {
		return (
			<div className= "dash_game_chapters">
				<h2 className= "chapters_section_title"> {this.props.currentGame} Progress </h2>
				<ul className= "dash_chapter_list">
            		{this.renderGameChapters(this.props.completedChapters)}
          		</ul>
			</div>
			)
	}
}

export default connect(null, actions)(CurrentGameChapters);

