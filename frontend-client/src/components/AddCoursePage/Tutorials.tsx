import { Rect } from '@popperjs/core';
import React, { Component } from 'react'
import './Tutorials.css';

interface ITutorialsProps {
    saveData: Function;
    formValues: Array<any>;
}

interface ITutorialsState{
    formValues: Array<any>;
}

export default class Tutorials extends Component<ITutorialsProps, ITutorialsState> {
    state: ITutorialsState = {
        formValues: [{title: "", video: ""}]
    };
    
    componentDidMount(){
        this.setState({formValues: this.props.formValues});
        console.log(this.props.formValues);
    }

    componentWillUnmount(){
        this.props.saveData(2, {
            formValues: this.state.formValues
        });
    }

    handleChangeTitle(i: number, e: React.ChangeEvent<HTMLInputElement>){
        let formValues = this.state.formValues;
        formValues[i].title = e.currentTarget.value;
        this.setState({formValues});
        console.log(this.state);
    }

    handleChangeVideo = (i: number, event: any) => {
        let formValues = this.state.formValues;
        formValues[i].video = URL.createObjectURL(event.target.files[0]);
        this.setState({formValues});
        console.log(this.state);
    }
    
    addFormFields(){
        this.setState(({
            formValues: [...this.state.formValues, { title: "", video: ""}]
        }))
    }

    removeFormFields(i: number){
        let formValues = this.state.formValues;
        formValues.splice(i, 1);
        this.setState({formValues});
    }


    render() {
        return (
            <div className='tutorials-page'>
                <div className="main-content">
                    <div className="add-tutorial-header"> <span>Add Tutorials for the Course</span></div>
                    <div className='add-tutorials-main-content'>
                        { this.state.formValues.map((element, index) => (
                            <div className='form-inline' key={index}>
                                <div className='title'>
                                    <label>Title: </label>
                                    <input className='title-tutorial' value={this.state.formValues[index].title || ""} type='text' name='title' onChange={e => this.handleChangeTitle(index, e)}/>
                                </div>
                                <div className='video'>
                                    <label>Video: </label>
                                    <input type="file" name='video' onChange={e => this.handleChangeVideo(index, e)}/>
                                </div>
                                {
                                    index ?
                                    <div className='button-section'>
                                        <button type='button' className="button-remove" onClick={() => this.removeFormFields(index)}>Remove</button>
                                    </div>
                                    : null
                                }
                            </div>
                        ))}
                    </div>
                    <div className='button-section'>
                        <button className="button-add" type="button" onClick={() => this.addFormFields()}>Add another field</button>
                    </div>
                    </div>
            </div>
        )
    }
}
