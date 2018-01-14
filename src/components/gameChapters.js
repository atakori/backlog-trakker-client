import React from 'react';

export class CurrentGameChapters extends React.Component {
	constructor(props) {
		super(props)
	}

	getGameChapters() { 
		let mockgamechapters= ['Cemetery of Ash', 'Firelink Shrine', 'High Wall of Lothric', "Undead Settlement", "Road of Sacrifices", "Cathedral of the Deep", "Farron Keep"];
		let list = mockgamechapters.map(chapter => <li><input type= "checkbox" name= "game_chapter" />{chapter}</li>);
		return list
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