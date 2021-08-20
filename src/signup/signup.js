import './fonts/material-design-iconic-font/css/material-design-iconic-font.min.css';
import {Form} from "react-bootstrap";
import React, {Component} from "react";
import "./css/signup.css"
import {NavLink} from "react-router-dom";

class Signup extends Component {
    render() {
        return <div>
            <div className="back">
                <div className="parent" id="parent">
                    <div className="row">
                        <Form method="post" action="/">
                            <div id="ff">
                                <h2>Registration</h2>
                            </div>
                            <div className="col-md-2" id="f" style={{
                                marginTop: "50px"
                            }}>
                                <Form.Group controlId="formBasicName">
                                    <i className="zmdi zmdi-account-box"/> <Form.Label>Full name</Form.Label><p/>
                                    <Form.Control type="fullname" placeholder="Enter your full name"/>
                                </Form.Group>
                            </div>
                            <div className="col-md-2" id="f">
                                <Form.Group controlId="formBasicUsername">
                                    <i className="zmdi zmdi-account"/> <Form.Label>Username</Form.Label><p/>
                                    <Form.Control type="email" placeholder="Enter username"/>
                                </Form.Group>
                            </div>
                            <div className="col-md-2" id="f">
                                <Form.Group controlId="formBasicEmail">
                                    <i className="zmdi zmdi-email"/> <Form.Label>Email address</Form.Label><p/>
                                    <Form.Control type="email" placeholder="Enter email"/>
                                </Form.Group>
                            </div>
                            <div className="col-md-2" id="f">
                                <Form.Group className="form-wrapper" controlId="formBasicPassword">
                                    <i className="zmdi zmdi-lock"/> <Form.Label>Password</Form.Label><p/>
                                    <Form.Control type="password" placeholder="Enter your Password"/>
                                </Form.Group>
                            </div>
                            <div className="col-md-2" id="f">
                                <Form.Group className="form-wrapper" controlId="formBasicConfPass">
                                    <i className="zmdi zmdi-check"/> <Form.Label>Confirm Password</Form.Label><p/>
                                    <Form.Control type="password" placeholder="Confirm your Password"/>
                                </Form.Group>
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
                            <div className="col-md-2" id="fl">
                                <button><NavLink to="youtube" className="navlink">Youtube Search
                                    <i className="zmdi zmdi-search"/>
                                </NavLink></button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Signup;