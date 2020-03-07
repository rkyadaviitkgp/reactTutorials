import React, { Component } from "react";
import './App.css'
import logo from './sample_logo.png';

class Nav extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className = 'nav'>
                <img className='logo' src={logo}/>
			</div>
		);
	}
}

export default Nav;
