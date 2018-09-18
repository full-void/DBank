import React, {Component} from 'react'
import './login.css'

import {Link} from "react-router-dom";

class Login extends Component {
    onKeyPress = (evt) => {
        sessionStorage.setItem("userHash", evt.target.value)
    }
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
            padd: 130
        }

    }

    render() {
        return (
            <div className="bigContainer-transfer" style={{paddingTop: this.state.padd}}>
                <div className="container">
                    <div className="row margined">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Hash"
                                   onKeyPress={this.onKeyPress}/>
                        </div>
                        <Link to="/Dashboard">
                            <button className="linkTransform custom-btn-transfer btn btn-warning"
                                    onClick={this.props.logIn}>Submit
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
