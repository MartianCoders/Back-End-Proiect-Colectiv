import React, { useState} from 'react';
import 'react-bootstrap';
import './style.css';

type questions = {
    question1:{
        id:number,
        question: string,
        answers:[{
            id_ans: number,
            label: String,
            is_correct: boolean
        },
        {
            id_ans: number,
            label: String,
            is_correct: boolean
        },
        {
            id_ans: number,
            label: String,
            is_correct: boolean
        },
        {
            id_ans: number,
            label: String,
            is_correct: boolean
        }
        ],
        },
    question2:{
        id:number,
        question: string,
        answers:[{
            id_ans: number,
            label: String,
            is_correct: boolean
        },
        {
            id_ans: number,
            label: String,
            is_correct: boolean
        },
        {
            id_ans: number,
            label: String,
            is_correct: boolean
        },
        {
            id_ans: number,
            label: String,
            is_correct: boolean
        }
        ],
        },
    question3:{
        id:number,
        question: string,
        answers:[{
            id_ans: number,
            label: String,
            is_correct: boolean
        },
        {
            id_ans: number,
            label: String,
            is_correct: boolean
        },
        {
            id_ans: number,
            label: String,
            is_correct: boolean
        },
        {
            id_ans: number,
            label: String,
            is_correct: boolean
        }
        ],
        },
}

class Quiz extends React.Component<any,any>{
    constructor(props:any){
        super(props)
        this.state = {
            score: 0,
            showScore:false
        }
      }

    onSubmit(e:React.SyntheticEvent){
        //#TODO BE stuff
        this.setState({showScore:true})
    }
    
    
    render() {
        return <>
            <form className="quiz-form"
            onSubmit={this.onSubmit}>
                <p className='form-title'> QUIZ</p>
                <div className="question-label">
                    <p className="question-text">
                        {this.props.questions.question1.id}.{this.props.questions.question1.question}</p>
                        <div className="question-answers">  
                            <div className="answer-button">
                                <input type="radio" value={this.props.questions.question1.answers[0].is_correct} name="question1"/>
                                {this.props.questions.question1.answers[0].label}
                            </div>
                            <div className="answer-button">
                                <input type="radio" value={this.props.questions.question1.answers[1].is_correct} name="question1" />
                                {this.props.questions.question1.answers[1].label}
                            </div>
                            <div className="answer-button">
                            <input type="radio" value={this.props.questions.question1.answers[2].is_correct} name="question1" />
                                {this.props.questions.question1.answers[2].label}
                            </div>
                            <div className="answer-button">
                                <input type="radio" value={this.props.questions.question1.answers[3].is_correct} name="question1" />
                                {this.props.questions.question1.answers[3].label}
                            </div>
                        </div>  
                    

                </div>
                <div className="question-label">
                <p className="question-text">
                        {this.props.questions.question2.id}.{this.props.questions.question2.question}</p>
                        <div className="question-answers">  
                            <div className="answer-button">
                                <input type="radio" value={this.props.questions.question2.answers[0].is_correct} name="question2"/>
                                {this.props.questions.question2.answers[0].label}
                            </div>
                            <div className="answer-button">
                                <input type="radio" value={this.props.questions.question2.answers[1].is_correct} name="question2" />
                                {this.props.questions.question2.answers[1].label}
                            </div>
                            <div className="answer-button">
                            <input type="radio" value={this.props.questions.question2.answers[2].is_correct} name="question2" />
                                {this.props.questions.question2.answers[2].label}
                            </div>
                            <div className="answer-button">
                                <input type="radio" value={this.props.questions.question2.answers[3].is_correct} name="question2" />
                                {this.props.questions.question2.answers[3].label}
                            </div>
                        </div>  
                    

                </div>
                <div className="question-label">
                <p className="question-text">
                        {this.props.questions.question3.id}.{this.props.questions.question3.question}</p>
                        <div className="question-answers">  
                            <div className="answer-button">
                                <input type="radio" value={this.props.questions.question3.answers[0].is_correct} name="question3"/>
                                {this.props.questions.question3.answers[0].label}
                            </div>
                            <div className="answer-button">
                                <input type="radio" value={this.props.questions.question3.answers[1].is_correct} name="question3" />
                                {this.props.questions.question3.answers[1].label}
                            </div>
                            <div className="answer-button">
                            <input type="radio" value={this.props.questions.question3.answers[2].is_correct} name="question3" />
                                {this.props.questions.question3.answers[2].label}
                            </div>
                            <div className="answer-button">
                                <input type="radio" value={this.props.questions.question3.answers[3].is_correct} name="question3" />
                                {this.props.questions.question3.answers[3].label}
                            </div>
                        </div>  
                    

                </div>
                <button
                    value="Submit"  
                    className="btn btn-primary btn-block">
                    Submit answers
                </button>
                {this.state.showScore && (
                    <div className="message">
                        your score is {this.state.score}
                    </div>
                )}
            </form>
        </>
    }
}

export default Quiz