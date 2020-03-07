import React, { Component } from "react";
import UserDetails from './UserDetails';
import UserList from './UserList';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
                <UserDetails/>
                
			</div>
		);
	}
}

export default App;
