import React from "react";
import "./CoursesList.css";
import Videos from "./Videos";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

class MyCoursesList extends React.Component {
  render() {
    return (
      <div className="coursesDiv">
        <div className="courses">
        <button type="button" className="btn btn-dark" style={{fontSize:'20px', borderRadius:'10px', display:'flex',margin:'0 auto 30px'}}><AddCircleRoundedIcon />  Add course</button>
          <Videos parent="my-courses"/>
        </div>
      </div>
    );
  }
}

export default MyCoursesList;
