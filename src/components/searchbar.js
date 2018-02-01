import React from 'react';
import { AutoComplete } from 'antd';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

export class MockSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state={
    }
  }

  onSubmit(e) {
    e.preventDefault();
    if(this.input == undefined) {
      this.setState({
      location: null
    })
    } else{

    let game= this.input.value.trim()
    let gameUrl= game.replace(/\s+/, '-');
    gameUrl= `/gameinfo/${game}`
    
    this.props.history.push(gameUrl)
    this.props.fetchGameInfo(game); 
    this.props.checkGameCollection(game);

  }  
}

/*  componentWillMount() {
    //before rendering of components
    let gameNameDashed = this.props.match.params.game;
    let gameName = gameNameDashed.replace(/-/g, ' ');
    this.props.fetchGameInfo(gameName); 
    ////this should go through the db to check if the game
    //is already in the users collection
    this.props.checkGameCollection(gameName);
  }*/


  render() {
     if(this.state.location) {
      return <Redirect to= {this.state.location}/>
    }
  return (
    <form className= "game_search" onSubmit= {(e) => this.onSubmit(e)}>
    <AutoComplete
      style={{ width: 200}}
      dataSource={this.props.dataSource}
      placeholder="Enter Game here"
      filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
      onChange={(value, label) => this.props.searchForGame(value)}
      >
      <input ref={input => (this.input = input)}/>
    </AutoComplete>
    <button type= "submit"> Search</button>
    {console.log(this.props.history)}
    </form>
  );
}
}

export default connect(null, actions)(MockSearch);