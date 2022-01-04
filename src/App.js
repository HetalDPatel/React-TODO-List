/*"StAuth10244: I Hetal P1tel, 000821900 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else."*/

import './App.css';
import { BrowserRouter as Router, Route,  NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { TODO } from './Todo';
import facebook from './facebook.svg';
import twitter from './twitter.svg';
import linkedin from './linkedin.svg';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h1>Daily TODO List</h1>
                    <nav>
                        <NavLink className="navlink" exact to="/">Home</NavLink>
                        <NavLink className="navlink" to="/todo">TODO</NavLink>
                        <NavLink className="navlink" to="/contact">Contact</NavLink>
                        <NavLink className="navlink" to="/about">About</NavLink>
                    </nav>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/todo" component={TODO}></Route>
                    <Route exact path="/contact" component={Contact}></Route>
                    <Route path="/about" component={About}></Route>

                    <footer>
                        
                        <span><strong>&copy; Assignmnet 5 </strong> by Hetal Patel</span>
                        <div className="SocialIcons">
                            <a href="https://www.facebook.com">
                            <img src={facebook} alt="facebook" /></a>
                            <a href="https://www.twitter.com"><img src={ twitter}/></a>
                            <a href="https://www.linkedin.com"><img src={linkedin}/></a>
                            </div>
                     </footer>
                </div>
            </Router>            
            );
    }
}

export default App;
