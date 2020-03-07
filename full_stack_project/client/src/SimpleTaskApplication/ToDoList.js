import React, { Component } from "react";

class ToDoList extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		event.preventDefault();
		this.props.handleClickList(this.props.cardId, this.props.list.id);
	}

	render() {
		return (
			<div onClick={this.handleClick} className="to-do-list-container">
				<h3
					className={
						this.props.list.completed ? "completed-list" : "to-do-list"
					}
				>
					{" "}
					{this.props.list.description}{" "}
				</h3>
			</div>
		);
	}
}

export default ToDoList;
