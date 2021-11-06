import React from 'react';
import 'react-bootstrap';
import './RegisterForm.css';
import {ReactComponent as SvgWriting} from './form-image.svg';

class RegisterForm extends React.Component{
  render() {
    return <>
      <form className="register-form">
        <h3 className="form-title">Sign Up</h3>
        <div className="form-group">
          <label>First name</label>
          <input type="text" className="form-control" placeholder="First name" />
        </div>
        <div className="form-group">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Register</button>
      </form>
    </>
    }
}

export default RegisterForm;