import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class InputText extends Component {
    render() {
        return (
            <div >
            <label for={this.props.id}>{this.props.label}</label>
            <input type="text" id={this.props.id} name={this.props.id} />
            </div>
        );
    }
}

class ButtonAction extends Component {
    render() {
        return (
            <div >
            <button type="button" id={this.props.id} name={this.props.id}>
                {this.props.label}
            </button>
            </div>
        );
    }
}

class MergerComponent extends Component{
   render(){
       return(
           <div>
             <InputText id ="textid" label = "Work_Notes" type= "Text" />
             <ButtonAction id ="buttonid" label = "Submit" />
           </div>
       );
   }
}

class MajorIssueManager extends Component{
    render(){
        return ReactDOM.createPortal(
           <MergerComponent />,
            document.getElementById("root"),
          );
    }
}

export default MajorIssueManager;