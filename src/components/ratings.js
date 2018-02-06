import React from 'react';
import { Progress } from 'antd';
import LoadingScreen from './loading';

export function Ratings(props) {
	return (
		<div className= "info_scores">
          <h2 className= "info_rating_title"> Ratings</h2>
          <p className= "critic_avg_score">Critic Score</p>
          <Progress type= "circle" percent= {props.criticAvgRating * 10} format={percent => `${percent / 10}`}/>
          <p className= "user_avg_score"> User Score</p>
          <Progress type= "circle" percent= {props.userAvgRating * 10} format={percent => `${percent / 10}`} />
        </div>
		)
}