import axios from 'axios';
import React from 'react'
import { connect } from 'react-redux';
import { IAppState } from '../reducers/app';
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

    filterByUser = (user:any) => {
        const courses = this.state.courses.filter((course:any) => {
            return course.user_id === user
        })
        return courses;
    } 

    render() {
        
        let courses = this.state.courses;

        if(this.props.parent === "my-courses"){
            courses = this.filterByUser(this.props.appState.currentUser.username);
        }

        return (
            <div className='recommendedVideos'>
                {
                    courses.map((course:any) => {
                        return <CourseCard courseTitle={course.title} imgSrc={course.image} videos={course.tutorials.length} rating={course.rating.starsAverage ? course.rating.starsAverage : 0} courseId={course.id} navigate={this.props.navigate}/>
                    })
                }
            </div>
        )
    }

    
}

const mapStateToProps = (state:any) => {
    const appState: IAppState = state.app;

    const appProps:any ={
        appState,
        reduxState:state,
    };
    
    return appProps;
}

export default connect<any,any,any>(mapStateToProps)(Videos);
