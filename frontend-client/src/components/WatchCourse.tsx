import React, { Component, useEffect, useState } from "react";
import ReactPlayer from 'react-player/lazy'
import CourseOverview from "./CourseOverview";
import { useParams } from 'react-router-dom'
import axios from "axios";
import { backend_url } from "../utils/utils";
import Sidebar from "./Sidebar";

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

        const tutorial = tutorials[0];
        const video = tutorial.video;
        

        return (

            <div>
                <div>
                    <ReactPlayer
                        width="1020px"
                        height="450px"
                        url={video}
                        controls
                    />
                </div>
                <Sidebar></Sidebar>
                <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "row" }}>
                    <CourseOverview />
                </div>
            </div>
        );
    
}; export default WatchCourse;