import React, { Component } from "react";

class CreateCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: ""
		};
		this.handleNewCard = this.handleNewCard.bind(this);
    }
    
    handleInput = (event) => {
        event.persist()
        this.setState({
          input: event.target.value
        })
	 }
	
	 handleNewCard(event){
		event.preventDefault();
		this.props.createNewCard(this.state.input);
		this.setState({input:''});
	 }


	render() {
		return (
			<div>
				<form className="new-card-form" onSubmit={this.handleNewCard}>
                    <h4> Create New Card  </h4>
					<input value={this.state.input} onChange={this.handleInput} type="text" className = "new-card-input" />
					<button>Submit</button>
				</form>
			</div>
		);
	}
}

export default CreateCard;
