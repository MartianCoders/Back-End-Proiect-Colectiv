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

export default class CourseCard extends Component<ICourseProps, ICourseState> {
    render() : JSX.Element {
        const {courseTitle, imgSrc, videos, rating, noOfStudents, price}: ICourseProps = this.props;
        return (
            <div className="courseCard">
                <img className="courseImg" src={imgSrc} alt="courseImg"></img>
                <h3>{courseTitle}</h3>

                <hr/>
                <p><i className="fa fa-play-circle"></i>{videos} videos</p>
                <div className="ratingDiv">
                    <div className="rating">
                        <span className="stars">
                            &#11088;
                        </span>
                        {rating}
                        <span className="noOfStudents">&nbsp;{noOfStudents}</span>
                    </div>
                    <h3 className="price">{price}</h3>
                </div>

            <Button className="joinBtn">Start course</Button>
            </div>
        )
    }
}
