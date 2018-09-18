import React, {Component} from 'react';
import './transfer.css'

import Error from '../error/error'
import {Link} from "react-router-dom";

class Transfer extends Component {
    calcPadding = () => {
        if (this.padd === -1) {
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
                <div className="bigContainer-transfer" style={{paddingTop: this.state.padd}}>
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
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Dashboard</a>
                                    </li>
                                </Link>
                                <Link to="Credit">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Credit</a>
                                    </li>
                                </Link>
                                <Link to="Transfer">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Transfer</a>
                                    </li>
                                </Link>
                            </ul>
                            <Link to={"/"}>
                                <button onClick={this.props.logOut}
                                        className="btn btn-outline-success my-2 my-sm-0 linkTransform"
                                        type="submit">Logout
                                </button>
                            </Link>
                        </div>
                    </nav>
                    <div className="container">
                        <h1 className="display-4 heading-transfer">SEND / RECEIVE</h1>

                        <hr className="style-two"/>

                        <form>
                            <div style={{visibility: this.state.visibility}} className="row margined">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Receiver Hash"/>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Amount"/>
                                </div>
                                <button className="linkTransform custom-btn-transfer btn btn-warning">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            )
    }

}

export default Transfer


