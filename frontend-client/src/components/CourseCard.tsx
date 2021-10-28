import React from 'react'
import './CourseCard.css';
import {Button} from 'react-bootstrap';

function CourseCard(props: any) {
    return (
        <div className="courseCard">
            <img className="courseImg" src={props.imgSrc} alt="courseImg"></img>
            <h3>{props.courseTitle}</h3>

            <hr/>
            <p><i className="fa fa-play-circle"></i>{props.videos} videos</p>
            <div className="ratingDiv">
                <div className="rating">
                    <span className="stars">
                        &#11088;
                    </span>
                    {props.rating}
                    <span className="noOfStudents">&nbsp;{props.noOfStudents}</span>
                </div>
                <h3 className="price">{props.price}</h3>
            </div>

            <Button className="joinBtn">Start course</Button>
        </div>
    )
}

export default CourseCard
