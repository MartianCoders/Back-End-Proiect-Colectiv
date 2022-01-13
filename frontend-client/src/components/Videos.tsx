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
        })
        .catch((err) => {
            alert(err);
        })
    }

    componentDidMount() {
        this.fetchCourses();
    }

    render() {
        return (
            <div className='recommendedVideos'>
                 <CourseCard
                    courseTitle={"Android Development Bootcamp - 2021 Guide"}
                    imgSrc={"https://lh3.googleusercontent.com/GTmuiIZrppouc6hhdWiocybtRx1Tpbl52eYw4l-nAqHtHd4BpSMEqe-vGv7ZFiaHhG_l4v2m5Fdhapxw9aFLf28ErztHEv5WYIz5fA"}
                    videos={15}
                    rating={4.4}
                    noOfStudents={"(110)"}
                    price={"$4.99"}
                />
    
                <CourseCard
                    courseTitle={"iOS 13 & Swift 5 - The Complete iOS App Development Bootcamp"}
                    imgSrc={"https://miro.medium.com/max/2079/1*YgzCwVtNCwdgqeIDwaFOxQ.png"}
                    videos={15}
                    rating={4.4}
                    noOfStudents={"(110)"}
                    price={"$4.99"}
                />
    
                <CourseCard
                    courseTitle={"Advanced CSS and Sass: Flexbox, Grid, Animations and More!"}
                    imgSrc={"https://themefisher.com/wp-content/uploads/2018/12/SASS-Compiler-Tools.jpg"}
                    videos={34}
                    rating={4.8}
                    noOfStudents={"(67)"}
                    price={"$6.99"}
                />
    
                
                <CourseCard
                    courseTitle={"Cisco CCNA 200-301 – The Complete Guide to Getting Certified"}
                    imgSrc={"https://images.youracclaim.com/images/a31c0301-ff96-4cee-9435-0a4b40ce6e66/linkedin_thumb_cisco_ccna_R_26S.png"}
                    videos={28}
                    rating={4.4}
                    noOfStudents={"(50)"}
                    price={"$4.99"}
                />
    
                <CourseCard
                    courseTitle={"Angular - The Complete Guide (2021)"}
                    imgSrc={"https://www.technosoft.eu/app/uploads/sites/5/2021/02/Angular-logo.png"}
                    videos={30}
                    rating={4.8}
                    noOfStudents={"(121)"}
                    price={"$8.99"}
                />
            </div>
        )
    }

    
}

export default Videos
