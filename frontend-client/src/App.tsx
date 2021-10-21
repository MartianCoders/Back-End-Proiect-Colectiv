import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import VideoComponents from './components/VideoComments';

import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      E Learning App
    
      <VideoComponents />
    </div>
  );
}

export default App;
