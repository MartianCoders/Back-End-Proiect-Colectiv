import React from 'react';
import 'react-bootstrap';
import './style.css';
import '../../style-login.css';

class RegisterForm extends React.Component{
  
  onSubmit(e: React.SyntheticEvent){
    e.preventDefault();
        const target = e.target as typeof e.target & {
          name: { value: string}
          username: { value: string}
          email: { value: string };
          password: { value: string };
          confirmed_password: {value: string};
        };
        const name = target.name.value;
        const username = target.username.value;
        const email = target.email.value; 
        const password = target.password.value;
        const confirmed_password = target.confirmed_password.value; 
        if (password === confirmed_password) console.log(email, username,password,name)
        //@TODO: add BE route
        else alert("Passwords don't match");
  }
  render() {
    return <>
      <form className="loginContainer register-form"
        onSubmit={this.onSubmit}>
        <div className="title">
          <h2 title="signup">signup</h2>
        </div>
        <div className="form-group">
          <label>Name</label>
          <input 
            type="text" 
            name="name" 
            className="form-control" 
            placeholder="Name" 
          />
        </div>
        <div className="form-group">
          <label>Username</label>
          <input 
            type="text" 
            name="username" 
            className="form-control" 
            placeholder="Username" 
          />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input 
            type="email" 
            name="email" 
            className="form-control" 
            placeholder="Enter email" 
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            name="password" 
            className="form-control" 
            placeholder="Enter password" 
          />
        </div>
        <div className="form-group">
          <label>Confirm password</label>
          <input 
            type="password" 
            name="confirmed_password" 
            className="form-control" 
            placeholder="Confirm password" 
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

export default RegisterForm;