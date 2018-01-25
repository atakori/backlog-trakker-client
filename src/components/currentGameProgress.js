import React from 'react';
import { Progress } from 'antd';
import { CurrentGameChapters } from './gameChapters';

export class CurrentGameProgress extends React.Component{
	constructor(props) {
		super(props)
	}
	render() {
		return (
				<div classNameName= "main_dashboard"> 
					<h2 classNameName= "welcome_title"> {this.props.user}'s Backlog </h2>
		          <h2 classNameName= "game_title"> Current Game: {this.props.currentGame} </h2>
		          <img className= "game_box_art" src= {this.props.gameArtURL} alt="game_image" height= "30%" width="15%"/>
		          <div className= "progress_stats">
		          	<p> Perecentage complete</p>
		          	<Progress type= "circle" percent= {this.props.progress}/>
		          </div>
				</div>
			)
	}
}