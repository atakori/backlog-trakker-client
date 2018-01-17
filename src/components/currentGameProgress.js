import React from 'react';
import { Progress } from 'antd';
import { CurrentGameChapters } from './gameChapters';

export class CurrentGameProgress extends React.Component{
	constructor(props) {
		super(props)
	}

	//going to reach out to db to get mock chapters and completed chapters
	//pass to currentGameChapters

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
		          	<CurrentGameChapters currentGame= "Dark Souls 3" gameChapters= {['Cemetery of Ash', 'Firelink Shrine', 'High Wall of Lothric', "Undead Settlement", "Road of Sacrifices", "Cathedral of the Deep", "Farron Keep"]} completedChapters= {[{name:'Cemetery of Ash', complete: true}]}/>
		          </div>
				</div>
			)
	}
}