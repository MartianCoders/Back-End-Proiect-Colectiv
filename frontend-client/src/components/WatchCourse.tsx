import React, { Component, useEffect, useState } from "react";
import ReactPlayer from 'react-player/lazy'
import CourseOverview from "./CourseOverview";
import { useParams } from 'react-router-dom'
import axios from "axios";
import { backend_url } from "../utils/utils";
import Sidebar from "./Sidebar";
import './WatchCourse.css';

function WatchCourse()  {

        const {courseId} = useParams()
        const [tutorials,setTutorials] = useState<any[]>([]);
        const [video,setVideo] = useState("");
        const [currentCourse,setCurrentCourse] = useState({})

        useEffect(() => {
            fetchTutorials();
            fetchCourse();
        }, [])

        const fetchTutorials = () => {
            axios.get(`${backend_url}/courses/${courseId}/tutorials`)
            .then((response)=>{
                setTutorials(response.data)
            })
            .catch((err) => {
                alert(err);
            })
        };

        const fetchCourse = () => {
            axios.get(`${backend_url}/courses/${courseId}`)
            .then((response)=>{
                setCurrentCourse(response.data)
            })
            .catch((err) => {
                alert(err);
            })
        };
        
        console.log(currentCourse);
        

        return (

            <div>
                <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", flexFlow: "row wrap"}}>
                    <ReactPlayer
                        className='player'
                        width="100%"
                        height="450px"
                        url={video}
                        controls
                    />
                     <Sidebar courseId={courseId} setVideo={setVideo}></Sidebar>
                </div>
               
                <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "row" }}>
                    <CourseOverview course={currentCourse}/>
                </div>
            </div>
        );
    
}; export default WatchCourse;