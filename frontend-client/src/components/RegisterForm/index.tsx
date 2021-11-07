import React from 'react';
import 'react-bootstrap';
import './style.css';

class RegisterForm extends React.Component{
  render() {
    return <>
      <form className="register-form"
        onSubmit={(e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
          name:{value:string}
          email: { value: string };
          password: { value: string };
        };
        const name = target.name.value;
        const email = target.email.value; 
        const password = target.password.value; 
        console.log(email,password,name)
        //@TODO: add BE route
      }}>
        <h3 className="form-title">Sign Up</h3>
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