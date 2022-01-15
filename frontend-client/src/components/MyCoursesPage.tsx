import React from 'react';
import NavBar from './NavBar';
import HomeContent from './HomeContent';
import MyCoursesList from "./MyCoursesList";
import './HomePage.css';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

class MyCoursesPage extends React.Component<any,any> {
  render() {
    return (
      <div className="homePage">
          <div className="main">
              <NavBar parent="my-courses" navigate={this.props.navigate}/>
              <p className="styleText">My Courses</p>
              <MyCoursesList navigate={this.props.navigate}/>
          </div>
      </div>
      
    );
  }
  
}

export default MyCoursesPage;