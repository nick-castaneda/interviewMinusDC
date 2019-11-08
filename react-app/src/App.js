import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';

import ButtonOfDoom from './ButtonOfDoom'
import './stylesheets/App.css';

class App extends Component {
  state = {
    totalNumberOfUsers: null,
    seconds: 30,
  };

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:5000/get-placeholder').then((response) => {
      this.setState({ totalNumberOfUsers: response.data.numberOfUsers });
    });
  }

  handleClick(e){
    e.preventDefault();
    console.log("click");
  }

  render() {
    return (
        <MuiThemeProvider>
          <div className="row">
            <ButtonOfDoom disabled={false} handleClick={this.handleClick}/>
            <div>{`Seconds remaining: ${this.state.seconds}`}</div>
            <p>{`Total number of users: ${this.state.totalNumberOfUsers}`}</p>
          </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
