import React from 'react';
class LoginForm extends React.Component {

  constructor(props){
    super(props);
    this.state = { username: '' };
  }
  
  handleChange = event => {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <form>
          <label htmlFor="username">username</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </form>
 
        <h3>Your username is: {this.state.username}</h3>
        </React.Fragment>
    );
  }
 }


// import React, { Component } from 'react';
// import './App.css';


// function BoilVerdict(props)
// {
//   if(props.celsius >= 100)
//   {
//    return  <p> Water would boil </p>
//   }else
//   {
//     return <p> Water would not boil </p>
//   }
// }

// function toCelsius(fahrenheit)
// {
//   return (fahrenheit - 32) * 5 / 9;
// }

// function toFahrenheit(celsius)
// {
//   return (celsius * 9 / 5) + 32;
// }

// function tryConvert(temperature, convert)
// {
//   const input = parseFloat(temperature);
//   if(Number.isNaN(input))
//   {
//     return '';
//   }
//   const output = convert(input);
//   const rounded = Math.round(output * 1000)/1000;
//   return rounded.toString();
// }
// const scaleName = {
//   c: 'Celsius',
//   f: 'Fahrenheit'
// };

// class TemperatureInput extends React.Component{

//   constructor(props)
//   {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {temperature : ''};
//   }

//   handleChange(e)
//   {
//     this.setState({temperature : e.target.value});
//   }
//   render()
//   {
//     const temperature = this.state.temperature;
//     const scale = this.props.scale;
//     return(
//       <div>
//         <legend>Enter Tempreture in {scaleName[scale]} : </legend>
//         <input value={temperature} onChange = {this.handleChange}/>
//       </div>
//     );
//   }
// }

// class Calculator extends React.Component{
//   render()
//   {
//     return (
//       <div>
//       <TemperatureInput scale="c" />
//       <TemperatureInput scale="f" />
//         </div>
//     );
//   }
// }


// // class Calculator extends React.Component{

// //   constructor(props)
// //   {
// //     super(props);
// //     this.handleChange = this.handleChange.bind(this);
// //     this.state = {temperature: ''};
// //   }
// //   handleChange(e)
// //   {
// //     this.setState({temperature : e.target.value});
// //   }
// //   render(){
// //     const temperature = this.state.temperature;
// //     return (
// //       <div>
// //         <legend> Enter temperature in celsius : </legend>
// //         <input value={temperature} onChange={this.handleChange} />
// //         <BoilVerdict celsius = {(temperature)}/>
// //         </div>
// //     );

// //   }

// // }

// export default Calculator;

// // class NameForm extends React.Component{
  
// //     constructor(props){
// //       super(props);
// //       this.state = {isGoing : false,
// //       noOfGuest: 2
// //       };
  
// //       this.handleInputChange = this.handleInputChange.bind(this);
  
// //     }
  
// //     handleInputChange(event)
// //     {
// //       const target = event.target;
// //       const value = target.type === 'checkbox' ? target.checked : target.value;
// //       const name = target.name;
// //       this.setState({[name] : value});
// //     }
  

  
// //     render()
// //     {
// //       return(
// //         <div>
// //           <form >
// //             <label>
// //              IsGoing : 
// //              <input name = "isGoing" type = "checkbox" checked = {this.state.isGoing} onChange = {this.handleInputChange}/>
// //             </label>
// //             <br/>
// //             <label>
// //              Number of Guests : 
// //              <input name = "noOfGuest" type = "number" checked = {this.state.noOfGuest} onChange = {this.handleInputChange}/>
// //             </label>
            
// //           </form>
// //         </div>
// //       );
// //     }
  
// //   }
  
// //   export default NameForm;



// // class NameForm extends React.Component{

// //   constructor(props){
// //     super(props);
// //     this.state = {value :'coconut'};

// //     this.handleChange = this.handleChange.bind(this);
// //     this.handleSubmit = this.handleSubmit.bind(this);

// //   }

// //   handleChange(event)
// //   {
// //     this.setState({value : event.target.value});
// //   }

// //   handleSubmit(event)
// //   {
// //       alert('your favorite flavour is ' + this.state.value);
// //       event.preventDefault();
// //   }

// //   render()
// //   {
// //     return(
// //       <div>
// //         <form onSubmit = {this.handleSubmit}>
// //           <label>
// //             Pick your favorite flavour : 
// //             <select value = {this.state.value} onChange = {this.handleChange}>
// //               <option value='grapeFruit'> GrapeFruit </option> 
// //               <option value='coconut'> Coconut </option> 
// //               <option value='lime'> Lime </option> 
// //               <option value='mango'> Mango </option> 
// //               </select>
// //           </label>
// //           <input type = "submit" value="Submit"/>
// //         </form>
// //       </div>
// //     );
// //   }

// // }

// // export default NameForm;

// //list on form
// // class FormExample extends React.Component{
// //   render()
// //   {
// //     const numbers = [1,2,3,4,5];
// //     const listitems = numbers.map(
// //       (number) => <li key={number.toString()}>{number}</li>
// //     );
// //     return <ul>{listitems}</ul>
// //   }
// // }
// // export default FormExample;

// // conditional rendering

// // function WarningBanner(props){

// //   if(!props.warn)
// //   {
// //     return null;
// //   }

// //   return (
// //     <div> Warning Message ! </div>
// //   );

// // }

// // class Page extends React.Component{
// //   constructor(props)
// //   {
// //     super(props);
// //     this.state = {showWarning : true};
// //     this.handleToggleClick = this.handleToggleClick.bind(this);
// //   }

// //   handleToggleClick(){
// //     this.setState(
// //       state => (
// //         {
// //           showWarning : !state.showWarning
// //         }
// //       )
// //     );
// //   }

// //   render()
// //   {
// //      return (<div>
// //       <WarningBanner warn={this.state.showWarning}/>
// //       <button onClick = {this.handleToggleClick}>{
// //         this.state.showWarning ? 'hide' : 'show'
// //         } </button>
// //       </div>);
// //   }
// // }

// // <Page />

// // export default Page;

// //--------------------------------------------------
// // Conditional rendering
// // function Mailbox(props)
// // {
// //   const unreadMessage = props.unreadMessage;
// //   return (
// //   <div>
// //     <h1>Hellow</h1>
// //     {
// //       unreadMessage.length > 0 && 
// //       <h2> you have {unreadMessage.length} no of unread messages .</h2>
// //     }
// //   </div>
// //   );
// // }

// // const messages = ["hi", "bye"];

// // class App extends React.Component{
// //   constructor(props)
// //   {
// //     super(props);
// //     this.state={unreadMessage:props.unreadMessage};
// //   }
// //   render()
// //   {
// //      return <Mailbox unreadMessage = {messages}/>;
// //   }
  
// // }
// // export default App;

// //------------------------------------------------
// // sample conditional rendering 

// //  class LoginControl extends React.Component{

// //   constructor(props)
// //   {
// //     super(props);
// //     this.state = {isLogedIn:false};
// //     this.handleLoginClick = this.handleLoginClick.bind(this);
// //     this.handleLogoutClick = this.handleLogoutClick.bind(this);
// //   }

// //   handleLoginClick()
// //   {
// //     this.setState({isLogedIn : true});
// //   }

// //   handleLogoutClick()
// //   {
// //     this.setState({isLogedIn : false});
// //   }

// //   render()
// //   {

// //     const isLogedIn = this.state.isLogedIn;
// //     let button;

// //     if(isLogedIn)
// //     {
// //       button=<LogoutButton onClick={this.handleLogoutClick}/>
// //     }
// //     else{
// //       button=<LoginButton onClick={this.handleLoginClick}/>
// //     }

// //     return (
// //       <div>
// //       <Greeting isLogedIn={isLogedIn}/>
// //         {button}
// //       </div>
// //     );

// //   }

// // }

// // function Greeting(props)
// // {
// //   const isLogedIn=props.isLogedIn;
// //   if(isLogedIn)
// //   {
// //     return <UserGreeting />
// //   }
// //   else{
// //     return <GuestGreeting />
// //   }
// // }
// // function LoginButton(props)
// // {
// //   return(
// //     <button onClick = {props.onClick}>
// //       Login
// //       </button>
// //   );
// // }

// // function LogoutButton(props)
// // {
// //   return(
// //     <button onClick = {props.onClick}>
// //       Logout
// //       </button>
// //   );
// // }

// // function UserGreeting(props) {
// //   return <h1>Welcome back!</h1>;
// // }

// // function GuestGreeting(props) {
// //   return <h1>Please sign up.</h1>;
// // }

// // function tick()  {
// //      <LoginControl />
// //   }
// // export default LoginControl;


// //--------------------------------------------------



// // class App extends React.Component {
  
// //   constructor(props)
// //   {
// //       super(props);
// //       console.log(" this is " + this.props.isLoggedIn);
// //       this.state = {date: new Date()};
// //       this.state = {isLoggedIn: true}
// //   }

// //   componentDidMount(){

// //     this.timerID = setInterval(
// //       () => this.tick(), 1000
// //     );

// //   }

// //   componentWillUnmount()
// //   {
// //     clearInterval(this.timerID);
// //   }

// //   tick(){
// //     this.setState({
// //       date:new Date()
// //     });
// //   }

// //   render() {
// //     if (this.state.isLoggedIn) {
// //     return <UserGreeting />;
// //   }
// //   return <GuestGreeting />;
// // }
// //   }


// // function UserGreeting(props) {
// //   return <h1>Welcome back!</h1>;
// // }

// // function GuestGreeting(props) {
// //   return <h1>Please sign up.</h1>;
// // }

// // function tick()  {
// //    <App isLoggedIn={true}/>
// // }
// // export default App;