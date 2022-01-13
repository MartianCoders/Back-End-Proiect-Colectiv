import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';

import VideoComponents from './components/VideoComments';

import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import HomeContent from './components/HomeContent';
import AddCoursePage from './components/AddCoursePage/AddCoursePage';
import HomePage from './components/HomePage';
import {Route,Routes,Navigate} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterForm/RegisterPage';
import { useNavigate } from 'react-router-dom';

function App () {
  

  // loginUser = () => {
  //   this.setState({isLoggedIn: true});
  //   this.props.history.push('/home');
  // }


  const navigate = useNavigate();
  console.log(navigate);
  
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<HomePage />}></Route>
        <Route path='/login' element={<LoginPage navigate={navigate}/>}></Route>
        <Route path='/' element={<Navigate to="/login"/>}></Route>
        <Route path='/addcourse' element={<AddCoursePage />}></Route>
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </div>
    );
 
  
}

export default App;