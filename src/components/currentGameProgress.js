import React from 'react';
import { Progress } from 'antd'

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
		          <div className= "review_scores">
		          	<p className= "critic_scores"> Avg. critic rating </p>
		          	<Progress type= "dashboard" percent= {this.props.criticRating * 10} format={percent => `${percent / 10}`} />
			        <p className= "user_avg_score">Avg. gamer rating </p>
		          	<Progress type= "dashboard" percent= {this.props.userRating * 10} format={percent => `${percent / 10}`} />
		          </div>
				</div>
			)
	}
}