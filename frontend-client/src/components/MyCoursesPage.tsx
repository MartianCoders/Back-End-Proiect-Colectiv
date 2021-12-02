import React from 'react';
import NavBar from './NavBar';
import HomeContent from './HomeContent';
import MyCoursesList from "./MyCoursesList";
import './HomePage.css';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

function MyCoursesPage() {
  return (
    <div className="homePage">
        <div className="main">
            <NavBar />
            <p className="styleText">My Courses</p>
            <MyCoursesList />
        </div>
    </div>
    
  );
}

export default MyCoursesPage;