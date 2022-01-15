import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import * as ReactBootStrap from "react-bootstrap";
import { IAppState } from '../reducers/app';
import { connect } from 'react-redux';
import AppActions from '../App.actions';
import img1 from '../login.png';




class NavBar extends React.Component<any,any> {
  constructor(props:any){
    super(props);
  }

  handleLogout = (e:any) => {
    e.preventDefault();
    AppActions.logout(this.props.dispatch)
    localStorage.clear();
    this.props.navigate("/login", { replace: true })
  }

  handleMyCourses = (e:any) => {
    e.preventDefault();
    this.props.navigate("/my-courses", { replace: true })
  }

  handleLoginLink = (e:any) => {
    e.preventDefault();
    this.props.navigate("/login", { replace: true })
  }

  handleHome = (e:any) => {
    e.preventDefault();
    this.props.navigate("/home", { replace: true })
  }

  render() {
    return(
        <div className="App" >
              <ReactBootStrap.Navbar  expand={false}>
              <ReactBootStrap.Container fluid>
             
                <ReactBootStrap.Navbar.Brand href="#home" className='ms-5'style={{display:"flex",flexDirection:"row"}}>
                  <img
                        alt=""
                        src={img1}
                        width="80"
                        height="80"
                        
                      />
                  {
                    localStorage.getItem('token') ? 
                    <ReactBootStrap.Nav.Link style={{marginTop:20}} onClick={this.handleHome}>Home</ReactBootStrap.Nav.Link> : ""}
                </ReactBootStrap.Navbar.Brand>
                
              
            
              <ReactBootStrap.Navbar.Toggle aria-controls="offcanvasNavbar" className="me-5"/>
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
                    {
                      this.props.parent === "home" || this.props.parent ==="my-courses" || this.props.parent === "add-course"? 
                        <div>
                          <ReactBootStrap.Nav.Link >Profile</ReactBootStrap.Nav.Link>
                          <ReactBootStrap.Nav.Link onClick={this.handleMyCourses}>My courses</ReactBootStrap.Nav.Link>
                          <ReactBootStrap.Nav.Link onClick={this.handleLogout}>Sign out</ReactBootStrap.Nav.Link>
                        </div>
                        : (this.props.parent === "register" ?
                          <div>
                            <ReactBootStrap.Nav.Link onClick={this.handleLoginLink}>Login</ReactBootStrap.Nav.Link>
                          </div>
                        : "")
                    }
                  </ReactBootStrap.Nav>
                </ReactBootStrap.Offcanvas.Body>
              </ReactBootStrap.Navbar.Offcanvas>
            </ReactBootStrap.Container>
          </ReactBootStrap.Navbar>
        </div>
    )
  }
}

const mapStateToProps = (state:any) => {
  const appState: IAppState = state.app;

  const appProps:any ={
      appState,
      reduxState:state,
  };
  
  return appProps;
}

export default connect<any,any,any>(mapStateToProps)(NavBar);