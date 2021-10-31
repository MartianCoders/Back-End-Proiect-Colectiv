import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Sidebar from './components/Sidebar';

import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      E Learning App
      <Sidebar/>
    </div>
    
  );
}

export default App;
