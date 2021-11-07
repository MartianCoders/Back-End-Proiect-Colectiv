import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import VideoComponents from './components/VideoComments';

import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import HomeContent from './components/HomeContent';
import RegisterForm from './components/RegisterForm/';

function App() {
  return (
    <div className="App">
      E Learning App
      <HomeContent />
    
      <VideoComponents />
      <RegisterForm/>
    </div>
  );
}

export default App;
