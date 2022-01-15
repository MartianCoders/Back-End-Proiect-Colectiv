import React, { Component } from 'react';
import './AddCoursePage.css';
import NavBar from '../NavBar';
import './AddCoursePage.css';
import CourseInfo from './CourseInfo';
import Tutorials from './Tutorials';
import Quiz from './Quiz';
import StepZilla from 'react-stepzilla';
import axios from 'axios';
import { backend_url } from '../../utils/utils';

interface IAddCourseProps {}

interface IAddCourseState {
    step1: { title: string, category: string, images: string, description: string, },
    step2: { formValues: Array<any>}
}

export default class AddCoursePage extends Component<any, any> {
    state = {
        step1: { title: "", category: "", image: "", description: "" },
        step2: { formValues: [{title: "", video: ""}]}
    };

    saveStepData(id: number, data: any){
        switch(id){
            case 1: this.setState({step1: data}); break;
            case 2: this.setState({step2: data}); break;
        }
        console.log(this.state);
    }

    addCourseOnLastStep = (step: number) => {
        if(step === 1){
            const {title,category,image,description} = this.state.step1;

            const imageUrl = image.replace("blob:","");
            console.log(imageUrl);

            const course = {
                title,
                category,
                description,
                imageUrl
            }

            const headers = {
                'Authorization': `Token ${localStorage.getItem('token')}`
            }

            console.log(this.state , localStorage.getItem('token'));

            axios.post(`${backend_url}/courses/create`,course,{
                headers:headers
            })
            .then((response)=>{})
            .catch((err) => {
                console.log(err);
            })
        }else if(step === 2){
            console.log(this.state);
        }
    }

    render() {
        const steps =
        [
        { name: 'General Info', component: <CourseInfo saveData={this.saveStepData.bind(this)} {...this.state.step1} isActive={true} /> },
        { name: 'Tutorials', component: <Tutorials saveData={this.saveStepData.bind(this)} {...this.state.step2} />},
        { name: 'Quiz', component: <Quiz />},
        // { name: 'Done', component: <CourseInfo saveData={this.saveStepData} {...this.state.step1} isActive={false}/>}
        ];

        return (
            <div className='step-wrapper'>
                <NavBar parent="add-course" navigate={this.props.navigate}/>
                <div className='step-progress'>
                    <StepZilla steps={steps} prevBtnOnLastStep={false} stepsNavigation={false} onStepChange={(step) => this.addCourseOnLastStep(step)} />
                </div>
            </div>
        )
    }
}
