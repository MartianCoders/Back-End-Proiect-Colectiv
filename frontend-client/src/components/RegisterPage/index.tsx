import React from 'react'
import RegisterForm from "../RegisterForm/RegisterForm";
import NavBar from '../NavBar';


class RegisterPage extends React.Component<any,any>{

    render() {
        return(
            <div>
                <NavBar parent="register" navigate={this.props.navigate}/>
                <RegisterForm navigate={this.props.navigate}/>
            </div>
        )
        
    }
    
}

export default RegisterPage