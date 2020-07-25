import React, { Component } from 'react';
import axios from 'axios';
const Context = React.createContext();

const proxyName = 'https://cors-anywhere.herokuapp.com/';
const rootApiName = 'https://api.musixmatch.com/ws/1.1/';
const countryCode = 'us';

const reducer = (state, action) =>{
    switch(action.type){
        case 'SEARCH_TRACKS':
            return {
                ...state,
                track_list:action.payload,
                heading: 'Saerch Results'
            }
        default:{
            return state;
        }
    }
    
} 

export  class Provider extends Component {
    state = {
        track_list: [],
        heading : 'Top 10 tracks',
        dispatch: action => this.setState(state => reducer(state, action))
    }

    componentDidMount(){
        axios.get(`${proxyName}${rootApiName}chart.tracks.get?chart_name=top&page=1&page_size=10&country=${countryCode}&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
            .then(res => {
                //console.log(res.data);
                this.setState({track_list:res.data.message.body.track_list})
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <Context.Provider value={this.state}>
                 {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;

