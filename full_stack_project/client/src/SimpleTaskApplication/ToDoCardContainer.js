import React, { Component } from "react";
import ToDoCard from './ToDoCard';

class ToDoCardContainer extends Component {
	constructor(props) {
		super(props);
		this.renderCards = this.renderCards.bind(this);
    }
    
    renderCards(){
        return this.props.cards.map((card, index) => {
            return <ToDoCard key = {index} id = {card.id}  card = {card} handleClickList = {this.props.handleClickList} addList = {this.props.addList} populateList = {this.props.populateList}/>
        });
    }

	render() {
		return (
			<div>
                {this.renderCards()}
			</div>
		);
	}
}

export default ToDoCardContainer;
