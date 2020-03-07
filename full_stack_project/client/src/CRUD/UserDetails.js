import React, { Component } from "react";
import List from '../SimpleReactToDoList/List';
import UserList from './UserList';
import './User.css';

class UserDetails extends Component {
	constructor(props) {
        super(props);
        this.state = {
            userid: '',
            firstname: '',
            lastname: '',
            address: '',
			city:'',
			msg:'',
			user:[]
		}
		this.handleNewUser = this.handleNewUser.bind(this);
		this.handleInput = this.handleInput.bind(this);
	}

	callAPI() {
		fetch("http://localhost:9000/testAPI")
		  .then(res => res.json())
		  .then(res => this.setState({ user: res }));
	
	  }

	  componentWillMount() {
		this.callAPI();
	  }

	handleNewUser(){
		event.preventDefault();
		var data = {
			userid: this.state.userid,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            address: this.state.address,
			city:this.state.city,
		};
		console.log(data);
		var error = '';
		fetch("http://localhost:9000/createUser", {
			method: 'POST',
			//"Content-Type": "text/plain",
             headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(function(response) {
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
			console.log(data); 
			console.log('User Created');   
            
        }).catch(function(err, error) {
			error = err+'';
            console.log('rajesh '+err)
		});
		console.log("error = " + error);
		if(error === ''){
			this.setState({
				userid: '',
				firstname: '',
				lastname: '',
				address: '',
				city:'',
				msg: '',
			   user:[...this.state.user, 'Thanks for registering ' + this.state.firstname ]
			});  
		}
		this.callAPI();
		
	}

	handleInput(event){
		this.setState({
			[event.target.name]:[event.target.value]
		});
	}

	render() {
		return (
			<div class="container">
  <form onSubmit={this.handleNewUser}  >
  <div class="row">
      <div class="col-25">
        <label for="userid">UserId</label>
      </div>
      <div class="col-75">
        <input onChange={this.handleInput} value={this.state.userid} type="text" id="userid" name="userid" placeholder="Your UserId .. " />
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="firstname">First Name</label>
      </div>
      <div class="col-75">
        <input type="text" onChange={this.handleInput} value={this.state.firstname} id="firstname" name="firstname" placeholder="Your name.." / >
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="lastname">Last Name</label>
      </div>
      <div class="col-75">
        <input type="text" onChange={this.handleInput}  value={this.state.lastname} id="lastname" name="lastname" placeholder="Your last name.. " />
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="address">Address</label>
      </div>
      <div class="col-75">
        <input type="text" onChange={this.handleInput} value={this.state.address} id="address" name="address" placeholder="Your address .. " />
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="city">City</label>
      </div>
      <div class="col-75">
        <input type="text" onChange={this.handleInput} value={this.state.city} id="city" name="city" placeholder="Your Hometown .. " />
      </div>
    </div>
    <div class="row">
      <input type="submit" value="Submit" / >
    </div>
  </form>
  <UserList user = {this.state.user} />
</div>
		);
	}
}

export default UserDetails;


/*

<div>
            <form  onSubmit={this.handleNewUser}>
                    <h4> Create New User  </h4>
					<input label = "userId" value={this.state.userid} onChange={this.handleInput} type="text"  />
					<input value={this.state.firstname} onChange={this.handleInput} type="text"  />
					<input value={this.state.lastname} onChange={this.handleInput} type="text"  />
					<input value={this.state.address} onChange={this.handleInput} type="text"  />
					<input value={this.state.city} onChange={this.handleInput} type="text"  />
					<button>Submit</button>
				</form>
			</div>
*/