import React, { Component } from 'react';
//import './App.css';

class UserList extends Component {

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
    //this.callAPI();
    return (
       
      <div className="App">
        <div className="App-header">
          <h1>Registered Users</h1>
        </div>
        {this.props.user.map(member =>
          <div key={member.UserId}>{member.FirstName} {member.LastName} - {member.Address}</div>
        )}
      </div>
    );
  }
}

export default UserList;

/*

GA : 8

Aptitude : 15

Reasoning 17

English : 18

Departmental : 63 

*/