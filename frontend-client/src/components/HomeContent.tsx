import React from "react";
import CoursesList from "./CoursesList";
import Header from "./Header";

class HomeContent extends React.Component<any,any> {
  render() {
    return (
      <div>
        {/* <Header /> */}
        <CoursesList navigate={this.props.navigate}/>
      </div>
    );
  }
}

export default HomeContent;
