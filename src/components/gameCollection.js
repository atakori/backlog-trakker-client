import React from 'react';
import NavigationBar from './navbar';
import { ShowUserBacklog } from './userBacklog';
import { connect } from 'react-redux';
import LoadingScreen from './loading';
import * as actions from '../actions';
import CollectionFooter from './collectionFooter';

export class GameCollection extends React.Component {
	//displays the currentUser's gameCollection
	componentWillMount() {
		this.props.getCurrentUser();
		this.props.getGameCollection();
	}

	render() {
	if(!this.props.gameCollection) {
		return(
			<section className= "signup_section">
				<header role= "banner">
					<NavigationBar history= {this.props.history}/>
				</header>
				<main role="main" style= {{paddingTop: "65px"}}>
					<LoadingScreen />
				</main>
			</section>
			)
	} else {
		return (
			<section className= "game_collection_section"> 
				<header role= "banner">
					<NavigationBar history= {this.props.history}/>
				</header>
				<main role= "main" className= "main" style= {{paddingTop: "65px"}}>
		        	<h2 className= "collection_title"> My Game Collection</h2>
					<ShowUserBacklog gameCollection= {this.props.gameCollection} />
				</main>
				<CollectionFooter />
			</section>
			)
		}
	}
}

const mapStatetoProps= (state) => {
	return {
		gameCollection: state.game.gameCollection
	}
}

export default connect(mapStatetoProps, actions)(GameCollection)