import React from 'react';
import 'react-bootstrap';
import { IAppState } from '../../reducers/app';
import { connect } from 'react-redux';
import AppActions from '../../App.actions';
import './RegisterForm.css';

class RegisterForm extends React.Component<any,any>{
  constructor(props:any){
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    }
  }

  onUsernameChange = (event:any) => {
    const username = event.target.value;
    this.setState({username});
  }

  onEmailChange = (event:any) => {
    const email = event.target.value;
    this.setState({email});
  }

  onPasswordChange = (event:any) => {
    const password = event.target.value;
    this.setState({password});
  }

  onPasswordConfirmationChange = (event:any) => {
    const passwordConfirmation = event.target.value;
    this.setState({passwordConfirmation});
  }
  
  onSubmit = (e: any) => {
    e.preventDefault();
    if(this.state.password === this.state.passwordConfirmation && (this.state.password.length > 0 && this.state.passwordConfirmation.length > 0)){
      const user = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        category: 2
      }

    AppActions.register(user)(this.props.dispatch)

    setTimeout(() => {
      if(this.props.appState.isLoggedIn) this.props.navigate("/home", { replace: true });
    },500);
       

    }
    else{
      alert("Passwords must match !")
    }
  }

  render() {
    console.log(this.state)
    return <>
      <form className="loginContainer register-form"
        onSubmit={this.onSubmit}>
        <div className="title">
          <h2 title="signup">signup</h2>
        </div>
        <div className="form-group">
          <label>Username</label>
          <input 
            type="text" 
            name="username" 
            className="form-control" 
            placeholder="Username" 
            onChange={this.onUsernameChange}
          />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input 
            type="email" 
            name="email" 
            className="form-control" 
            placeholder="Enter email" 
            onChange={this.onEmailChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            name="password" 
            className="form-control" 
            placeholder="Enter password"
            onChange={this.onPasswordChange}
          />
        </div>
        <div className="form-group">
          <label>Confirm password</label>
          <input 
            type="password" 
            name="confirmed_password" 
            className="form-control" 
            placeholder="Confirm password" 
            onChange={this.onPasswordConfirmationChange}
          />
        </div>
        <button 
          type="submit" 
          value="Submit"  
          className="btn btn-primary btn-block"
        >
          Register
        </button>
      </form>
    </>
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

export default connect<any,any,any>(mapStateToProps)(RegisterForm);