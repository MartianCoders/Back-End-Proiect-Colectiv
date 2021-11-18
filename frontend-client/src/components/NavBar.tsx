import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import * as ReactBootStrap from "react-bootstrap";
import img1 from './images/logo4.png';

const NavBar = () => {
    return(
        <div className="App">
    <ReactBootStrap.Navbar bg="light" expand={false}>
    <ReactBootStrap.Container fluid>
    <ReactBootStrap.Navbar.Brand href="#home">
    <img
          alt=""
          src= {img1}
          width="80"
          height="80"
          
        />{'   '}
     <>

Home

</>
      
    </ReactBootStrap.Navbar.Brand>
 
  
    <ReactBootStrap.Navbar.Toggle aria-controls="offcanvasNavbar" />
    <ReactBootStrap.Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <ReactBootStrap.Offcanvas.Header closeButton>
        <ReactBootStrap.Offcanvas.Title id="offcanvasNavbarLabel">EduZone</ReactBootStrap.Offcanvas.Title>
      </ReactBootStrap.Offcanvas.Header>
      <ReactBootStrap.Offcanvas.Body>
        <ReactBootStrap.Nav className="justify-content-end flex-grow-1 pe-3">
          <ReactBootStrap.Nav.Link href="#action1">Profile</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="#action2">My courses</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="#action3">Sign out</ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Offcanvas.Body>
    </ReactBootStrap.Navbar.Offcanvas>
  </ReactBootStrap.Container>
</ReactBootStrap.Navbar>
        </div>
    )
}

export default NavBar;