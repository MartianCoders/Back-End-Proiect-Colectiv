import React from "react";
import CoursesList from "./CoursesList";
import Header from "./Header";

class HomeContent extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <CoursesList />
      </div>
    );
  }
}

export default HomeContent;
