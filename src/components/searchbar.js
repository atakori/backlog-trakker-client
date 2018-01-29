import React from 'react';
import { AutoComplete } from 'antd';
import { Redirect } from 'react-router-dom';

export class MockSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state={
    }
  }



  onSubmit(e) {
    e.preventDefault();
    let game= this.input.value.trim()
    game= game.replace(/\s+/, '-');
    game= `/gameinfo/${game}`
    
    this.setState({
      location: game
    })
  }  


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
    </form>
  );
}
}