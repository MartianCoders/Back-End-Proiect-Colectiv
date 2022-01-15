import { auto } from '@popperjs/core';
import React, { Component } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import App from '../App';
import AppActions from '../App.actions';
import { IAppState } from '../reducers/app';
import '../style-login.css';
import NavBar from "./NavBar";

class LoginPage extends React.Component<any,any> {
    constructor(props:any){
        super(props);
        this.state = {
            isPasswordShown: false,
            username: "",
            password: ""
        };
    }

    
    
    togglePasswordVisiblity = () => {
        const { isPasswordShown } = this.state;
        this.setState({ isPasswordShown: !isPasswordShown });
    };

    onUsernameChange = (event:any) => {
        const username = event.target.value;
        this.setState({username});
    };

    onPasswordChange = (event:any) => {
        const password = event.target.value;
        this.setState({password});
    };

    loginUser = (e:any) => {
    // this.setState({isLoggedIn: true});
        
        console.log(this.props)
        console.log(this.state);
        e.preventDefault();
        const username = this.state.username;
        const password = this.state.password;

        AppActions.login(username,password)(this.props.dispatch);

        if(this.props.appState.isLoggedIn) this.props.navigate("/home", { replace: true });

        
    }

    registerUser = () => {
        this.props.navigate("/register");
    }

    render() {
        if(this.props.appState.isLoggedIn) this.props.navigate("/home", { replace: true });
        const { isPasswordShown } = this.state;

        return (
        <div>
            <div className="navBar">
                <NavBar />
            </div>
            <div className="loginContainer">
                <div className="title">
                    <h2 title="Login">Login </h2>    
                </div>
                <Form>
                    <div className="left">
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label style={{color: "black",fontSize:20}}>Username</Form.Label>
                        <Form.Control autoComplete="off" required type="text" placeholder="Enter username" onChange={this.onUsernameChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label style={{color: "black",fontSize:20}}>Password</Form.Label>
                        <div style={{ display: 'flex' }}>
                            <Form.Control style={{ width: '90%' }} required type={isPasswordShown ? "text" : "password"} placeholder="Password" onChange={this.onPasswordChange}/>
                            <span className="input-group-text" id="inputGroupPrepend2">
                            { this.state.isPasswordShown
                                ? <i style={{ cursor: 'pointer' }} className="fa fa-eye-slash" onClick={this.togglePasswordVisiblity}/>
                                : <i style={{ cursor: 'pointer' }} className="fa fa-eye password-icon"  onClick={this.togglePasswordVisiblity}/>
                            }
                            
                            </span>
                        </div>
                    </Form.Group>
                    </div>
                    <Button variant="primary" type="button" style={{width: '100%', background: '#345cdf'}} onClick={this.loginUser}>
                    <i className="fas fa-sign-in-alt" aria-hidden="true"/> Sign in! 
                    </Button>
                    </Form>
                </div>
            </div>   
        );
    }
}

const mapStateToProps = (state:any) => {
    const appState: IAppState = state.app;

    const appProps:any ={
        appState,
        reduxState:state,
    };
    
    return appProps;
}

export default connect<any,any,any>(mapStateToProps)(LoginPage);