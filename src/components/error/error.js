import React, {Component} from 'react'
import './error.css'

class Error extends Component {
    render() {
        return (
            <div className="bigContainer-error">
                <div className="container">
                    <h1 className="h1-error">You are not logged in. Log in from home page</h1>
                </div>
            </div>
        )
    }
}

export default Error
