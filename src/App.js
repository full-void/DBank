import React from 'react';
import Startup from "./components/startup/startup";
import Transfer from "./components/transfer/transfer";
import Dashboard from "./components/dashboard/dashboard";
import Credit from "./components/credit/credit"
import Login from "./components/login/login"

import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";

class App extends React.Component {
    logOut = () => {
        this.setState({loggedIn: false});
        <Redirect to="/"/>
    }
    getLogged = () => {
        return this.state.loggedIn;
    }
    logIn = () => {
        this.setState({loggedIn: true});
        <Redirect to="/Dashboard"/>
    }

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: true
        }
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/'
                           render={(props) => <Startup {...props} getLogged={this.getLogged} logOut={this.logOut}/>}/>
                    <Route path='/Dashboard'
                           render={(props) => <Dashboard {...props} getLogged={this.getLogged} logOut={this.logOut}/>}/>
                    <Route path='/Transfer'
                           render={(props) => <Transfer {...props} getLogged={this.getLogged} logOut={this.logOut}/>}/>
                    <Route path='/Credit'
                           render={(props) => <Credit {...props} getLogged={this.getLogged} logOut={this.logOut}/>}/>
                    <Route path='/Login'
                           render={(props) => <Login {...props} onKeyPress={this.onKeyPress} logIn={this.logIn}/>}/>
                </Switch>
            </Router>
        )
    }
}

export default App