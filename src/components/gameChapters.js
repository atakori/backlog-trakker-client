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

	getGameChapters() { 
		//change this to get the chapters from the props

		let game= this.props.currentGame

		let mockchapters= ['Cemetery of Ash', "Firelink Shrine", "High Wall of Lothric", "Undead Settlement", "Road of Sacrifices", "Cathedral of the Deep", "Farron Keep"];
		let list = mockchapters.map((chapter,index) => (
			<li>
				<input id={chapter} type="checkbox" name="game_chapter" onChange={this.handleChange} /><label for={chapter}>{chapter}</label>
			</li>))
		return list;
	}

	handleChange() {
		//make the text strikethrough
		console.log("works")
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