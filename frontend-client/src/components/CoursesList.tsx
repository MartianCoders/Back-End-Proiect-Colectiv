import React from "react";
import "./CoursesList.css";
import Videos from "./Videos";

class CoursesList extends React.Component {
  render() {
    return (
      <div className="coursesDiv">
        <div className="courses">
          <Videos />
        </div>
      </div>
    );
  }
}

export default CoursesList;
