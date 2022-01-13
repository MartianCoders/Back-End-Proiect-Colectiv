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
    step1: { title: string, category: string, images: string, description: string, },
    step2: { formValues: Array<any>}
}

export default class AddCoursePage extends Component<IAddCourseProps, IAddCourseState> {
    state: IAddCourseState = {
        step1: { title: "", category: "", images: "", description: "" },
        step2: { formValues: [{title: "", video: ""}]}
    };

    saveStepData(id: number, data: any){
        switch(id){
            case 1: this.setState({step1: data}); break;
            case 2: this.setState({step2: data}); break;
        }
        console.log(this.state);
    }

    addCourseOnLastStep(step: number) {
        if(step === 2){
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
                <NavBar />
                <div className='step-progress'>
                    <StepZilla steps={steps} prevBtnOnLastStep={false} stepsNavigation={false} onStepChange={(step) => this.addCourseOnLastStep(step)} />
                </div>
            </div>
        )
    }
}
