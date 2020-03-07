import React, { Component } from "react";
import Nav from './Nav'
import MainContainer from './MainContainer'

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
                <Nav />
                <MainContainer />
			</div>
		);
	}
}

export default App;
