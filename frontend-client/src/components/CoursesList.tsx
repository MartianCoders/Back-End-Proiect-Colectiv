import React from "react";
import "./CoursesList.css";
import Videos from "./Videos";

class CoursesList extends React.Component<any,any> {
  render() {
    return (
      <div className="coursesDiv">
        <div className="courses">
          <Videos navigate={this.props.navigate}/>
        </div>
      </div>
    );
  }
}

export default CoursesList;
