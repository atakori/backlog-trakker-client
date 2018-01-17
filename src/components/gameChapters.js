import React from 'react';

export class CurrentGameChapters extends React.Component {
	constructor(props) {
		super(props)
	}

/*	testGameChapters() {
		let gameName = "dark-souls-3"

		let url= "https://allorigins.me/get?url=" + encodeURIComponent(`www.google.com`) + "&callback=?";
		$.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent('http://google.com') + '&callback=?', function(data){
	alert(data.contents);
});
	// fetch method doesn't work | only Jquery works momentariliy
		axios.get(url).then(function(res) {
			alert(res);
		})
	}*/
	checkCompletedChapters(level) {
		let result;
		console.log(level);
		console.log(this.props.completedChapters);
		this.props.completedChapters.forEach(function(completedChapter){
			if(completedChapter.name == level) {
				result= true;
			}
		});
		return result
		}

	getGameChapters() { 
		//change this to get the chapters from the props

		let game= this.props.currentGame;
		let mockchapters= ['Cemetery of Ash', "Firelink Shrine", "High Wall of Lothric", "Undead Settlement", "Road of Sacrifices", "Cathedral of the Deep", "Farron Keep"];
		//send name and ID from db
		return this.renderGameChapters(mockchapters);
	}

	renderGameChapters(chapters) {
		let completedLevels= this.props.completedChapters; {
		let that = this;
			return chapters.map((chapter,index) => ( 
			<li> <input checked= 
			{that.checkCompletedChapters(chapter)} 
			id={chapter} 
			className= "completedChapter" 
			type="checkbox" 
			name="game_chapter" 
			onChange={this.handleChange} />
			<label for={chapter}>{<span className= {this.checkCompletedChapters(chapter)? "cross": ""}>{chapter}</span>}</label>
			</li>
			))}
	}		

	handleChange() {
		//makes state change to show which chapter was crossed off
		// causes progress bar to increase/decrease
		//add chapter to db or retract from db list and 
		//call this.renderGameChapters(mockchapters) again
		console.log("works")
		//this.renderGameChapters(mockchapter);
	}

	render() {

		return (
			<div className= "game_chapters">
				<h2 className= "chapters_section_title"> {this.props.currentGame} Progress </h2>
				<ul>
            		{this.getGameChapters()}
          		</ul>
			</div>
			)
	}
}