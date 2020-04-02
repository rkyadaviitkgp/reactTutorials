import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./index.scss";
import registerServiceWorker from "./util/registerServiceWorker";

import SimplePortal from "./experiments/simple-portal";


const Home = () => {
    return (
        <div>
            <img src="/TheLab.jpg" alt="The Lab" />
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <div>
                {/* Nav Menu */}
                <div className="navbar">
                    <div className="dropdown">
                        <button className="dropbtn">
                            Demos <i className="fa fa-caret-down" />
                        </button>
                        <div className="dropdown-content">
                            <Link to="/">Home</Link>
                            <Link to="/Dancing-Ball-Demo">Dancing Balls</Link>
                            <Link to="/Simple-Portal-Demo">Simple Portal</Link>
                            <Link to="/Flip-Move-Demo">Flip Move</Link>
                        </div>
                    </div>
                </div>

                {/* Where the magic Happens */}
                <div className="lab-wrapper">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/Dancing-Ball-Demo" component={DancingBalls} />
                        <Route path="/Simple-Portal-Demo" component={SimplePortal} />
                        <Route path="/Flip-Move-Demo" component={FlipMove} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));

//
registerServiceWorker();