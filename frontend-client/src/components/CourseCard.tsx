import React, { Component } from "react";
import "./CourseCard.css";
import { Button } from "react-bootstrap";
interface ICourseProps {
  courseTitle: string;
  imgSrc: string;
  videos: number;
  description: string;
}
interface ICourseState {}

export default class CourseCard extends Component<ICourseProps, ICourseState> {
  render(): JSX.Element {
    const { courseTitle, imgSrc, videos, description }: ICourseProps =
      this.props;
    console.log(this.props);
    return (
      <div className="courseCard">
        <img className="courseImg" src={imgSrc} alt="courseImg"></img>
        <h3>{courseTitle}</h3>
        <p>{description}</p>
        <hr />
        <p>
          <i className="fa fa-play-circle"></i>
          {videos} videos
        </p>

        <Button className="joinBtn">Start course</Button>
      </div>
    );
  }
}
