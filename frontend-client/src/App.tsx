import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import WatchCourse from './components/watchCourse';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div>
        E Learning App
        <WatchCourse/>
      </div>
    </div>

  );
}

export default App;
