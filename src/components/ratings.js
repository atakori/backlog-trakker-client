import React from 'react';
import { Progress } from 'antd';

export class Ratings extends React.Component {
  renderCriticScore(){
    if(this.props.criticAvgRating === undefined) {
      return (
      <Progress type= "circle" percent= {0} format={percent => `N/A`}/>
        )
    } else {
      return(
      <Progress type= "circle" percent= {this.props.criticAvgRating.toFixed(2) * 10} format={percent => `${percent / 10}`}/>
      )
    }
  }

  renderUserScore(){
    if(this.props.userAvgRating === undefined) {
      return (
        <Progress type= "circle" percent= {0} format={percent => `N/A`}/>
        )
    } else {
      return (
        <Progress type= "circle" percent= {this.props.userAvgRating.toFixed(2) * 10} format={percent => `${percent / 10}`} />
        )
    }
  }

  render() {
	return (	
    <div className= "info_scores">
          <h2 className= "info_rating_title"> Ratings</h2>
          <div className= "info_scores_container">
          	<p className= "critic_avg_score">Critic Score</p>
            {this.renderCriticScore()}
          	<p className= "user_avg_score"> User Score</p>
            {this.renderUserScore()}
          </div>
        </div>
		)
}
}