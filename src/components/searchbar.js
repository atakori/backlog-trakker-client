import { Select } from 'antd';
import jsonp from 'fetch-jsonp';
import querystring from 'querystring';
import React from 'react';
import { AutoComplete, Input } from 'antd';
import { Redirect } from 'react-router-dom';

const Option = Select.Option;

let timeout;
let currentValue;
let value;
let option;

function fetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
    const str = querystring.encode({
      code: 'utf-8',
      q: value,
    });
    jsonp(`https://suggest.taobao.com/sug?${str}`)
      .then(response => response.json())
      .then((d) => {
        if (currentValue === value) {
          const result = d.result;
          const data = [];
          result.forEach((r) => {
            data.push({
              value: r[0],
              text: r[0],
            });
          });
          callback(data);
        }
      });
  }

  timeout = setTimeout(fake, 300);
}

export class SearchInput extends React.Component {
  state = {
    data: [],
    value: '',
  }
  handleChange = (value) => {
    this.setState({ value });
    fetch(value, data => this.setState({ data }));
  }
  render() {
    const options = this.state.data.map(d => <Option key={d.value}>{d.text}</Option>);
    return (
      <Select
        mode="combobox"
        value={this.state.value}
        placeholder={this.props.placeholder}
        style={this.props.style}
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onChange={this.handleChange}
      >
        {options}
      </Select>
    );
  }
}

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
      >
      <input ref={input => (this.input = input)}/>
    </AutoComplete>
    <button type= "submit"> Search</button>
    </form>
  );
}
}