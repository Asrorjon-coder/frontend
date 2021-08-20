import React from 'react';
import "./../signup/css/signup.css"
import {NavLink} from "react-router-dom";

export default class Youtube extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: ""
        }
    }

    handleInputChanged(event) {
        this.setState({
            searchQuery: event.target.value
        });
    }

    handleButtonClicked() {
        var searchQuery = this.state.searchQuery;

        window.location.href = "https://youtube.com/results?search_query=" + searchQuery;
    }

    render() {
        return (
            <div>
                <div className="back">
                    <div className="parent" id="parent">
                        <div className="row">
                            <div id="ff">
                                <h2>YouTube Search</h2>
                            </div>
                            <div className="col-md-2" id="f">
                                <input type="text" value={this.state.searchQuery}
                                       onChange={this.handleInputChanged.bind(this)}/>
                            </div>
                            <div className="col-md-2" id="f">
                                <button onClick={this.handleButtonClicked.bind(this)}>
                                    Search
                                </button>
                            </div>
                            <div className="col-md-2" id="fl">
                                <button><NavLink to="signup" className="navlink">Signup
                                    <i className="zmdi zmdi-arrow-right"/>
                                </NavLink></button>
                            </div>
                            <div className="col-md-2" id="fl">
                                <button><NavLink to="login" className="navlink">Login
                                    <i className="zmdi zmdi-long-arrow-return"/>
                                </NavLink></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}