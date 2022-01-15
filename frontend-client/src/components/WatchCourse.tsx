import React, { Component, useState } from "react";
import ReactPlayer from 'react-player/lazy'
import CourseOverview from "./CourseOverview";
import Sidebar from "./Sidebar";
import './WatchCourse.css';


class WatchCourse extends Component {
    render() {

        return (

            <div>
                <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", flexFlow: "row wrap"}}>
                    <ReactPlayer
                        className='player'
                        width="100%"
                        height="450px"
                        url='https://www.youtube.com/watch?v=Y-OLcnr8eNo&ab_channel=VivekJoy'
                        controls
                    />
                    <Sidebar>

                    </Sidebar>
                    <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "row" }}>
                        <CourseOverview />
                    </div>
                </div>
            </div>
        );
    }
}; export default WatchCourse;