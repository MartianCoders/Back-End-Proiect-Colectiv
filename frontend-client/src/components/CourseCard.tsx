import React, { Component } from 'react'
import './CourseCard.css';
import {Button} from 'react-bootstrap';
interface ICourseProps{
    courseTitle: string;
    imgSrc: string;
    videos: number;
    rating: number;
    noOfStudents: string;
    price: string;
}
interface ICourseState{

}

export default class CourseCard extends Component<any, any> {
    render() : JSX.Element {
        const {courseTitle, imgSrc, videos, rating} = this.props;
        return (
            <div className="courseCard">
                <img className="courseImg" src={imgSrc} alt="courseImg"></img>
                <h3>{courseTitle}</h3>

                <hr/>
                <div className="lower-wrapper">
                    <p><i className="fa fa-play-circle"></i>{videos} videos</p>
                    <div className="ratingDiv">
                        <div className="rating">
                            <span className="stars">
                                &#11088;
                            </span>
                            {rating}
                        </div>
                    </div>
                </div>

            <Button className="joinBtn">Start course</Button>
            </div>
        )
    }
}
