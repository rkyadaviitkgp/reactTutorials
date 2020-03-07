import React, { Component } from "react";
import ToDoList from "./ToDoList";

class ToDoCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: ""
		};
		this.handleInput = this.handleInput.bind(this);
		this.handleNewList = this.handleNewList.bind(this);
		this.renderList = this.renderList.bind(this);
		this.populateList = this.populateList.bind(this);

	}

	populateList(){
		this.props.populateList(this.props.id);
	}

	componentDidMount() {
		this.populateList();
		//this.populateList();
	}

	renderList() {
		return this.props.card.list.map( (list, index) => {
			return (
				<ToDoList
					key={index}
					cardId={this.props.card.id}
					list={list}
					handleClickList={this.props.handleClickList}
				/>
			);
		});
	}



	handleInput(event) {
		this.setState({
			input: event.target.value
		});
	}

	handleNewList() {
		event.preventDefault();
		this.props.addList(this.props.card.id, this.state.input);
		this.setState({
			input: ""
		});
	}

	render() {
		return (
			<div className="to-do-card">
				<h4>{this.props.card.title}</h4>
				<form onSubmit={this.handleNewList}>
					<input
						value={this.state.input}
						onChange={this.handleInput}
						type="text"
					/>
					<button>Submit</button>
				</form>
				{this.renderList()}
			</div>
		);
	}
}

export default ToDoCard;

/*



card : id, Title , listId[]
list Id, description completed 

*/
