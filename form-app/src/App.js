import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    var str = props.info;
    //const ob = JSON.parse(str);
    console.log("raj" + str.toString());
    //console.log(obj);
    this.state = {
      inputT: str,
      data: [
        {
          name: 'John',
          age: 20
        },
      ] ,
      // inputT: [
      //   {
      //     className: 'formControl',
      //     placeholder: 'texte1'
      //   },
      //   {
      //     className: 'formControl',
      //     placeholder: 'texte2'
      //   },
      //   {
      //     className: 'formControl',
      //     placeholder: 'texte3'
      //   },
      //   {
      //     className: 'formControl',
      //     placeholder: 'texte4'
      //   },
      // ],
      inputB: [
        {
          className: 'submitButton',
          placeholder: 'save',
          handler:'onSubmit'
        },
        {
          className: 'submitButton',
          placeholder: 'save1',
          handler:'onSubmit'
        }
      ],
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    const name = this.name.value;
    const age = this.age.value;
    const info = { name: name, age: age };
    const data = this.state.data;
    data.push(info);
    this.setState({
      data: data
    });
  };

  render() {
    return (
      <React.Fragment>
        {/* <form className="form-inline" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control mb-2 mr-sm-2 mb-sm-0"
            placeholder="Name"
            ref={input => this.name = input} />
          <div className="input-group mb-2 mr-sm-2 mb-sm-0">
            <input
              type="text"
              className="form-control"
              placeholder="Age"
              ref={input => this.age = input} />
          </div>
          <button
            type="submit"
            className="btn btn-primary">Save
 </button>
        </form>

        <div className="row">
          {
            this.state.data.map((info, index) => <Card key={index} info={info} />)
          }
        </div> */}

        <div className="row">
          {
            this.state.inputT.map((info, index) => <InputText key={index} info={info} />)
          }
        </div>

        <div className="row">
          {
            this.state.inputB.map((info, index) => <InputButton key={index} info={info} />)
          }
        </div>


      </React.Fragment>
    );
  }
}

const InputText = props => 
  <div className="col-md-6 col-lg-3">
    <div className="card mb-3">
      <div className="card-body">
      <input
            type="text"
            className={props.info.className}
            placeholder={props.info.placeholder}
    />
      </div>
    </div>
  </div>;

const InputButton = props => 
<div className="col-md-6 col-lg-3">
    <div className="card mb-3">
      <div className="card-body">
      <button
            type="submit"
            className={props.info.className} onClick={props.info.handler} >
             {props.info.placeholder}
 </button>
      </div>
    </div>
  </div>;

// const Card = props =>
//   <div className="col-md-6 col-lg-3">
//     <div className="card mb-3">
//       <div className="card-body">
//         <p className="card-title"><span>Name: </span>{props.info.name}</p>
//         <p className="card-text">
//           <span>Age: </span>{props.info.age}
//         </p>
//       </div>
//     </div>
//   </div>;

 export default App;
