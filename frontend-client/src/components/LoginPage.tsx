import { auto } from "@popperjs/core";
import React, { Component } from "react";
import { Button, Card, Form } from "react-bootstrap";
import "../style-login.css";

class LoginPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isPasswordShown: false,
    };
  }

  togglePasswordVisiblity = () => {
    const { isPasswordShown } = this.state;
    this.setState({ isPasswordShown: !isPasswordShown });
  };

  loginUser = () => {
    // this.setState({isLoggedIn: true});
    console.log(this.props);
    this.props.navigate("/home", { replace: true });
  };

  render() {
    const { isPasswordShown } = this.state;
    return (
      <div className="loginContainer">
        <div className="title">
          <h2 title="Login">Login </h2>
        </div>
        <Form>
          <div className="left">
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                autoComplete="off"
                required
                type="text"
                placeholder="Enter username"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <div style={{ display: "flex" }}>
                <Form.Control
                  style={{ width: "90%" }}
                  required
                  type={isPasswordShown ? "text" : "password"}
                  placeholder="Password"
                />
                <span className="input-group-text" id="inputGroupPrepend2">
                  {this.state.isPasswordShown ? (
                    <i
                      style={{ cursor: "pointer" }}
                      className="fa fa-eye-slash"
                      onClick={this.togglePasswordVisiblity}
                    />
                  ) : (
                    <i
                      style={{ cursor: "pointer" }}
                      className="fa fa-eye password-icon"
                      onClick={this.togglePasswordVisiblity}
                    />
                  )}
                </span>
              </div>
            </Form.Group>
          </div>
          <Button
            variant="primary"
            type="submit"
            style={{ width: "100%", background: "#345cdf" }}
            onClick={this.loginUser}
          >
            <i className="fas fa-sign-in-alt" aria-hidden="true" /> Sign in!
          </Button>
        </Form>
      </div>
    );
  }
}

export default LoginPage;
