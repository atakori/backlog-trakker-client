import React from 'react';
import { Progress } from 'antd';

export class CurrentGameProgress extends React.Component{
	constructor(props) {
		super(props)
	}
	render() {
		return (
				<div className= "main_dashboard"> 
					<h2 className= "welcome_title"> {this.props.user}'s Backlog </h2>
		          <div className= "currentGameProgress_contents">
			          <h2 className= "dash_game_title"> Current Game: {this.props.currentGame} </h2>
			          <img className= "dash_game_box_art" src= {this.props.gameArtURL} alt="game_image" height= "100%" width="50%"/>
			          <div className= "progress_stats">
			          	<p className= "dash_percent_title"> Percentage complete</p>
			          	<Progress width= {200} className="dash_progress_circle" type= "circle" percent= {this.props.progress}/>
			          </div>
			        </div>  
				</div>
			)
	}
}