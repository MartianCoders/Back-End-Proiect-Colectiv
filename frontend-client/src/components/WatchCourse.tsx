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

        useEffect(() => {
            fetchTutorials();
        }, [])

        const fetchTutorials = async() => {
            axios.get(`${backend_url}/courses/${courseId}/tutorials`)
            .then((response)=>{
                // console.log(response);
                setTutorials(response.data)
            })
            .catch((err) => {
                alert(err);
            })
        };
        

        console.log(courseId)
        console.log(tutorials);

        // const tutorial = tutorials[0];
        // const video = tutorial.video;
        

        return (

            <div>
                <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", flexFlow: "row wrap"}}>
                    <ReactPlayer
                        className='player'
                        width="100%"
                        height="450px"
                        url={tutorials.length > 0 ? tutorials[0].video : ""}
                        controls
                    />
                     <Sidebar></Sidebar>
                </div>
               
                <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "row" }}>
                    <CourseOverview />
                </div>
            </div>
        );
    
}; export default WatchCourse;