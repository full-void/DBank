import React, {Component} from 'react';
import content from './content'
import './startup.css'
import {Link} from "react-router-dom";

const Page = ({iconClass, offset, imageUrl, heading, description, gradient}) => (
    <div className={`contain ${gradient}`}>
        <div className="container">
            <p className="header">{heading}</p>
            <hr className="style-two"/>
            <div className="innerContent">

                <i className={`icon-startup ${iconClass}`}/>


                <p className="content">{description}</p>

            </div>
        </div>
    </div>
)

class Startup extends Component {
    render() {
        console.log(content);
        return (
            <div>
                <nav className="custom-nav navbar fixed-top navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand custom-nav-brand" href="#">DBank</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        </ul>
                        <Link to="/Login">
                            <button className="btn btn-outline-success my-2 my-sm-0 linkTransform" type="submit">Login
                            </button>
                        </Link>
                    </div>
                </nav>


                <Page iconClass="fas fa-piggy-bank" gradient="teal" heading={content.welcomeHead}
                      description={content.welcomeCont}/>
                <Page iconClass="far fa-credit-card" gradient="tomato" heading={content.creditHead}
                      description={content.creditCont}/>
                <Page iconClass="fas fa-money-bill-wave" gradient="purple" heading={content.transferHead}
                      description={content.transferCont}/>
                <div className="contain green">
                    <div className="container">
                        <Link to="/Login">
                            <button type="button" className="linkTransform custom-btn-startup btn btn-primary">Get
                                Started!
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Startup;