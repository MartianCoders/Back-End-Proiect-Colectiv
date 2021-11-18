import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Sidebar from './components/Sidebar';
import LoginPage from './components/LoginPage';
import VideoComponents from './components/VideoComments';

import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import HomeContent from './components/HomeContent';
import RegisterForm from './components/RegisterForm/';

function App() {
  return (
    <div className="App">
      E Learning App
      
      <LoginPage />
      <HomeContent />
    
      <VideoComponents />
      <RegisterForm/>
    </div>
    
  );
}

export default App;