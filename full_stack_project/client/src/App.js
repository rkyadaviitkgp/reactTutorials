import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { user: [] };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.json())
      .then(res => this.setState({ user: res }));

  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Users</h1>
        </div>
        {this.state.user.map(member =>
          <div key={member.UserId}>{member.FirstName} {member.LastName} - {member.Address}</div>
        )}
      </div>
    );
  }
}

export default App;
