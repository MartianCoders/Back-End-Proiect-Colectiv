import React, { Component } from 'react'
import './Quiz.css';

interface IQuizProps{
}

interface IQuizState{
    statement: string;
    first_answer: string;
    second_answer: string;
    third_answer: string;
    correct_answer: string;
}

interface Index{
    index: number;
}

export default class Quiz extends Component {
    state: IQuizState = {
        statement: "",
        first_answer: "",
        second_answer: "",
        third_answer: "",
        correct_answer: ""
    };
    index: Index = { index: 0 };

    handleChange = (fieldName: keyof IQuizState) => (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        this.setState({ ...this.state, [fieldName]: e.currentTarget.value});
        console.log(this.state);
    };

    render() {
        return (
            <div className='quiz-page'>
                <div className='main-content'>
                    <div className="add-quiz-header"><span>Add Quiz for the Course</span></div>
                    <div className='add-quiz-main-content'>
                        <div className='form-inline-quiz'>
                            <div className='question'>
                                <label>Question: </label>
                                <input className='question-quiz' type="text" name="question" onChange={this.handleChange("statement")}></input>
                                <label>Answer 1: </label>
                                <input className='answer-quiz' type='text' name='answer' onChange={this.handleChange("first_answer")}></input>
                                <label>Answer 2: </label>
                                <input className='answer-quiz' type='text' name='answer' onChange={this.handleChange("second_answer")}></input>
                                <label>Answer 3: </label>
                                <input className='answer-quiz' type='text' name='answer' onChange={this.handleChange("third_answer")}></input>
                                <label>Correct answer is (Answer Number): </label>
                                <input className='answer-quiz' type='text' name='answer' onChange={this.handleChange("correct_answer")}></input>
                        </div>
                        </div>
                        { this.index.index < 3 ? 
                        <div className='button-section'>
                            <button className='button-add' type='button' onClick={() => {this.index.index++; console.log(this.index.index)}}>Add another question</button>
                        </div>
                        : null }
                    </div>
                </div>
            </div>
        )
    }
}
