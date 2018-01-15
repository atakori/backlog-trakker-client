import React from 'react';
import { Progress } from 'antd';

export function Ratings(props) {
	return (
		<div class= "scores">
          <h2 class= "rating_title"> Ratings</h2>
          <p class= "critic_avg_score">Critic Score</p>
          <Progress type= "dashboard" percent= {props.criticAvgRating * 10} format={percent => `${percent / 10}`} />
          <p class= "user_avg_score"> User Score</p>
          <Progress type= "dashboard" percent= {props.userAvgRating * 10} format={percent => `${percent / 10}`} />
        </div>
		)
}