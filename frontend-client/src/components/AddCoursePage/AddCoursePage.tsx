import React, { Component } from 'react';
import './AddCoursePage.css';
import NavBar from '../NavBar';
import './AddCoursePage.css';
import CourseInfo from './CourseInfo';
import Tutorials from './Tutorials';
import Quiz from './Quiz';
import StepZilla from 'react-stepzilla';

interface IAddCourseProps {}

interface IAddCourseState {
    step1: { title: string, tutor: string, category: string, images: string, videos: number, description: string, },
}

export default class AddCoursePage extends Component<IAddCourseProps, IAddCourseState> {
    state: IAddCourseState = {
        step1: { title: "", tutor: "", category: "", images: "", videos: 0, description: "" },
    };

    saveStepData(id: number, data: any){
        switch(id){
            case 1: this.setState({step1: data}); break;
        }
    }
    render() {
        const steps =
        [
        { name: 'General Info', component: <CourseInfo saveData={this.saveStepData.bind(this)} {...this.state.step1} isActive={true} /> },
        { name: 'Tutorials', component: <Tutorials />},
        { name: 'Quiz', component: <Quiz />},
        { name: 'Done', component: <CourseInfo saveData={this.saveStepData} {...this.state.step1} isActive={false}/>}
        ];

        return (
            <div className='step-wrapper'>
                <NavBar />
                <div className='step-progress'>
                    <StepZilla steps={steps} prevBtnOnLastStep={false} stepsNavigation={false} />
                </div>
            </div>
        )
    }
}
