// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import SimplePortal from './SimplePortal';
// import './index.css';
// var c = [
// { className: 'formControl', placeholder: 'texte1'}, 
// { className: 'formControl', placeholder: 'texte2' }, 
// { className: 'formControl', placeholder: 'texte3' }, 
// { className: 'formControl',  placeholder: 'texte4' },
// { className: 'formControl',  placeholder: 'texte5' } 
// ];

// ReactDOM.render(
//   <SimplePortal/>,
//   document.getElementById('root') 
// );

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import registerServiceWorker from "./util/registerServiceWorker";

import SimplePortal from "./SimplePortal";
import FilterableProductTable from "./FilterableProductTable";
import MajorIssueManager from "./MajorIssueManager";


// const Home = () => {
//     return (
//         <div>
//             <img src="/TheLab.jpg" alt="The Lab" />
//         </div>
//     );
// };

// const App = () => {
//     return (
//         <Router>
//             <div>
//                 {/* Nav Menu */}
//                 <div className="navbar">
//                     <div className="dropdown">
//                         <button className="dropbtn">
//                             Demos <i className="fa fa-caret-down" />
//                         </button>
//                         <div className="dropdown-content">
//                             <Link to="/">Home</Link>
                            
//                             <Link to="/Simple-Portal-Demo">Simple Portal</Link>
                            
//                         </div>
//                     </div>
//                 </div>

//                 {/* Where the magic Happens */}
//                 <div className="lab-wrapper">
//                     <Switch>
//                         <Route exact path="/" component={Home} />
                       
//                         <Route path="/Simple-Portal-Demo" component={SimplePortal} />
                        
//                     </Switch>
//                 </div>
//             </div>
//         </Router>
//     );
// };

//const appRoot = document.getElementById('app-root');
ReactDOM.render(<MajorIssueManager />, document.getElementById("root"));

//
//registerServiceWorker();