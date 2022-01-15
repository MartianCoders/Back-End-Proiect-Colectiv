import React, { Component } from 'react'
import './CourseInfo.css';

interface ICourseProps {
    isActive: boolean;
    title: string;
    images: string;
    category: string;
    description: string;
    saveData: Function;
}

interface ICourseState {
    isActive: boolean;
    images: string;
    title: string;
    category: string;
    description: string;
}

export default class CourseInfo extends Component<ICourseProps, ICourseState> {
    state: ICourseState = {
        isActive: this.props.isActive,
        images: "",
        title: "",
        category: "",
        description: "",
    };


    componentDidMount(){
        this.setState({
            title: this.props.title,
            category: this.props.category,
            images: this.props.images,
            description: this.props.description
        });
    }

    componentWillUnmount(){
        this.props.saveData(1, { 
            title: this.state.title,
            category: this.state.category,
            images: this.state.images,
            description: this.state.description
        })
    }

    handleToggle = () => {
        this.setState({isActive: false});
    }

    handleChange = (fieldName: keyof ICourseState) => (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        this.setState({ ...this.state, [fieldName]: e.currentTarget.value});
    };

    onChangeThumbnail = (event: any) => {
        this.setState({
            isActive: true,
            images: URL.createObjectURL(event.target.files[0])
        })
    }

    render() {
        const isActive = this.state.isActive;
        return (
            <div className='course-page'>
                <div className={isActive ? "main-content printed" : "as-card"}>
                    <div className="add-course-header"> <span>Course's General Informations</span><span>New course added! &#127881;</span></div>
                    <div className="id__wrapper">
                        <div className="deco"></div>
                        <label className="thumbnail" id="image-form" htmlFor="image-input">
                            <input id="image-input" type="file" onChange={this.onChangeThumbnail}/>
                            <div className="image-persuader">Upload Image Here</div>
                            <img id="imager" src={this.state.images} alt=""/>
                        </label>
                        <div className="name">
                            <label>Course Name</label>
                            <textarea value={this.state.title} onChange={this.handleChange("title")} className="full"></textarea>
                        </div>
                        <div className="category">
                            <label>Category</label>
                            <input value={this.state.category} onChange={this.handleChange("category")} className="full"/>
                        </div>
                        <div className="description">
                            <label>Short Description</label>
                            <input value={this.state.description} onChange={this.handleChange("description")} className="full"/>
                        </div>
                        <div className="blood">
                            <label>Your Expertise</label>
                            <div className="checkbox__wrapper">
                                <div className="checkbox">
                                    <input id="design" type="checkbox" value="1" />
                                    <label className="label-check" htmlFor="design">Admin</label>
                                </div>
                                <div className="checkbox">
                                    <input id="front-end" type="checkbox" value="2"/>
                                    <label className="label-check" htmlFor="front-end">Front-end Dev</label>
                                </div>

                                <div className="checkbox">
                                    <input id="product" type="checkbox" value="3"/>
                                    <label className="label-check" htmlFor="product">Product Owner</label>
                                </div>
                                <div className="checkbox">
                                    <input id="other" type="checkbox" value="4"/>
                                    <label className="label-check" htmlFor="other">Other</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}
