import axios from 'axios';
import React from 'react'
import { backend_url } from '../utils/utils';
import CourseCard from './CourseCard';
import './Videos.css';

//Hardcoded courses
class Videos extends React.Component<any,any> {
    constructor(props:any){
        super(props);
        this.state = {
            courses: []
        }
    }

    fetchCourses = () =>{
        axios.get(`${backend_url}/courses`)
        .then((response)=>{
            console.log(response);
            this.setState({courses: [...response.data]})
        })
        .catch((err) => {
            alert(err);
        })
    }

    componentDidMount() {
        this.fetchCourses();
    }

    render() {
        console.log(this.state)
        return (
            <div className='recommendedVideos'>
                {
                    this.state.courses.map((course:any) => {
                        return <CourseCard courseTitle={course.title} imgSrc={course.image} videos={course.tutorials.length} rating={course.rating.starsAverage ? course.rating.starsAverage : 0}/>
                    })
                }
            </div>
        )
    }

    
}

export default Videos
