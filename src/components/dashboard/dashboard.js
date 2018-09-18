import React, {Component} from 'react'
import './dashboard.css'

import Error from '../error/error'
import {Link} from "react-router-dom";

class Dashboard extends Component {
    getGreeting = () => {
        let hours = new Date().getHours();
        if (hours <= 12) {
            return "Good Morning"
        }
        else if (hours <= 17) {
            return "Good Afternoon"
        }
        else if (hours <= 20) {
            return "Good Evening"
        }
        else {
            return "Good Night"
        }
    };
    calcPadding = () => {
        if (padd === -1) {
            return;
        }
        let padd = document.body.clientHeight * 0.15;
        padd = (padd < 130) ? 130 : padd;
        this.setState({padd: padd})
    };

    constructor(props) {
        super(props);
        this.state = {
            padd: -1,
        }
    }

    componentDidMount() {

        this.calcPadding();
    };

    render() {

        return !this.props.getLogged() ? <Error/>
            : (
                <div className="bigContainer-dashboard" style={{paddingTop: this.state.padd}}>
                    <nav className="custom-nav navbar fixed-top navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand custom-nav-brand" href="#">DBank</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <Link to="Dashboard">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Dashboard</a>
                                    </li>
                                </Link>
                                <Link to="Credit">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Credit</a>
                                    </li>
                                </Link>
                                <Link to="Transfer">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Transfer</a>
                                    </li>
                                </Link>
                            </ul>
                            <Link to="/">
                                <button onClick={this.props.logOut}
                                        className="btn btn-outline-success my-2 my-sm-0 linkTransform"
                                        type="submit">Logout
                                </button>
                            </Link>
                        </div>
                    </nav>

                    <div className="container">
                        <h1 className="display-4 greeter"> {this.getGreeting()}, Jim Holmes</h1>

                        <hr className="style-two"/>

                        <p> Here's a quick look: </p>
                        <p><span className="category-transfer"> Wallet: </span>{"23 ETH"} </p>
                        <p><span className="category-transfer"> Credit: </span>{"9"} out of {"60"} ETH Used</p>

                        <div className="dashboard-row row">
                            <div className="option-dashboard col-sm-12 col-md-6">
                                <Link to="/Credit">
                                    <div className="linkTransform">
                                        <i className="icon-dashboard far fa-credit-card"/>
                                        <br/>
                                        <span className={"linkfix"}> Manage your credit </span>
                                    </div>
                                </Link>
                            </div>

                            <div className="option-dashboard col-sm-12 col-md-6">
                                <Link to="/Transfer">
                                    <div className="linkTransform">
                                        <i className="icon-dashboard fas fa-money-bill-wave-alt"/>
                                        <br/>
                                        <span className={"linkfix"}> Send/Receive Money </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
}

export default Dashboard;