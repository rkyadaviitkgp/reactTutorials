import React, { Component } from "react";
import CreateCard from "./CreateCard";
import ToDoCardContainer from "./ToDoCardContainer";

class MainContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: []
		};

		this.addList = this.addList.bind(this);
		this.createNewCard = this.createNewCard.bind(this);
		this.callAPI = this.callAPI.bind(this);
		this.handleClickList = this.handleClickList.bind(this);
		this.populateList = this.populateList.bind(this);
	}

	createNewCard = input => {
		var data = {
			title: input
		};

		var data1 = {
			title: input,
			list: []
		};

		console.log(data);

		fetch("http://localhost:9000/createNewCard", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(newcard => {
				data1 = {
					id:newcard.insertId,
					title: input,
					list: []
				};
				console.log("newcard " + newcard);
				this.setState({ cards: [...this.state.cards, data1] });
			})
			.catch(function(err, error) {
				console.log("rajesh " + err);
			});
	};

	populateList(cardId) {

		//var cards = this.state.cards;
		
			var fetchurl = "http://localhost:9000/getCardListById/" + cardId;

			fetch(fetchurl)
				.then(response => response.json())
				.then(newList => {
	
					var newcards = this.state.cards.map(card => {
						if (card.id === cardId) {

							var d = {
								id:card.id,
								title:card.title,
								list:newList
							}
							return d;

						}
						else return card;
					});
	
					console.log("inside populate list  " + newcards);
					this.setState({ cards: newcards });
				})
				.catch(function(err, error) {
					console.log("rajesh " + err);
				});
	

		
	}

	callAPI() {
		var data1;
		fetch("http://localhost:9000/cards")
			.then(resp => resp.json())
			.then(data => {
				let returnedCards = data;
				//console.log("returnedCards " + data);
				data1 = returnedCards.map(function(res1) {

					//var list1 = this.populateList(res1);

					var d = {
						id: res1.id,
						title: res1.title,
						list:[{description:'sunday'}]
						//list:list1
						//list: [[...this.state.cards],{ description: "sunday" }]
					};

					return d;
				}, this);

				//console.log("data1 after" + data1);
				this.setState({ cards: data1 });
				//this.populateList();
			})
			.catch(function(error) {
				console.log(error);
			});
			//this.setState({ cards: [] });
		//console.log("data1 after" + data1);
	}

	componentDidMount() {
		this.callAPI();
		//this.populateList();
	}

	handleClickList(cardId, listId) {
		const foundCard = { ...this.state.cards.find(card => card.id === cardId) };
		const foundList = foundCard.list.find(list => list.id === listId);

		let newState = null;

		if (foundList.completed) {
			newState = false;
		} else {
			newState = true;
		}

		var data = {
			id: listId,
			completed: newState
		};

		console.log(data);

		fetch("http://localhost:9000/modifyList", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(newList => {

				var foundCard = this.state.cards.find(card => card.id === cardId);
				
				var updatednewlist = foundCard.list.map(list => {
					if(list.id == listId)
						{
							var newlist1 = {
								id:list.id,
								description:list.description,
								completed:data.completed
							}
							return newlist1;
						}else
						return list;
				} );

				//foundCard.list = updatednewlist;

				var foundCard1 = {
					id:foundCard.id,
					title:foundCard.title,
					list:updatednewlist
				};

				var newcards = this.state.cards.map(card => {
					if (card.id === cardId) {
						return foundCard1;
					}
					else return card;
				});
				console.log("newcards in handleClickList " + newcards);
				this.setState({ cards: newcards });
			})
			.catch(function(err, error) {
				console.log("rajesh " + err);
			});
	}

	addList = (cardId, input) => {
		var data = {
			description: input,
			cardid: cardId,
			completed: false
		};

		console.log(data);

		fetch("http://localhost:9000/newList", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(newList => {
				console.log("addlist " + newList);
				var data1 = {
					id: newList.insertId,
					description: input,
					cardid: cardId,
					completed: false
				};
				console.log("addlist1 " + data1);
				var foundCard = {
					...this.state.cards.find(card => card.id === cardId)
				};
				//
				foundCard.list = [...foundCard.list, data1];

				var newcards = this.state.cards.map(card => {
					if (card.id === cardId) return foundCard;
					else return card;
				});

				this.setState({ cards: newcards });
			})
			.catch(function(err, error) {
				console.log("rajesh " + err);
			});
	};

	render() {
		return (
			<div className="main-container">
				<ToDoCardContainer
				populateList = {this.populateList}
					cards={this.state.cards}
					addList={this.addList}
					handleClickList={this.handleClickList}
				/>
				<CreateCard createNewCard={this.createNewCard} />
			</div>
		);
	}
}

export default MainContainer;
