import React, { Component } from 'react'
import './CourseInfo.css';

interface ICourseProps {
    isActive: boolean;
    title: string;
    images: string;
    tutor: string;
    category: string;
    videos: number;
    description: string;
    saveData: Function;
}

interface ICourseState {
    isActive: boolean;
    images: string;
    title: string;
    tutor: string;
    category: string;
    videos: number;
    description: string;
}

export default class CourseInfo extends Component<ICourseProps, ICourseState> {
    state: ICourseState = {
        isActive: this.props.isActive,
        images: "",
        title: "",
        tutor: "",
        category: "",
        description: "",
        videos: 0,
    };

    componentDidMount(){
        this.setState({
            title: this.props.title,
            tutor: this.props.tutor,
            category: this.props.category,
            images: this.props.images,
            videos: this.props.videos,
            description: this.props.description
        });
    }

    componentWillUnmount(){
        this.props.saveData(1, { 
            title: this.state.title,
            tutor: this.state.tutor,
            category: this.state.category,
            images: this.state.images,
            videos: this.state.videos,
            description: this.state.description
        })
    }

    handleToggle = () => {
        this.setState({isActive: false});
    }

    onChangeTitle = (el: any) => {
        this.setState({title: el.target.value});
        console.log(this.state);
    }

    onChangeTutor = (e: any) => {
        this.setState({tutor: e.target.value});
        console.log(this.state);
    }

    onChangeCategory = (e: any) => {
        this.setState({category: e.target.value});
        console.log(this.state);
    }

    onChangeThumbnail = (event: any) => {
        this.setState({
            isActive: true,
            images: URL.createObjectURL(event.target.files[0])
        })
    }

    onChangeVideos = (e: any) => {
        this.setState({videos: e.target.value});
    }

    onChangeDescription = (e: any) => {
        this.setState({description: e.target.value});
        console.log(this.state);
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
                            <textarea value={this.state.title} onChange={this.onChangeTitle} className="full"></textarea>
                        </div>
                        <div className="tutor">
                            <label>Tutor Name</label>
                            <input value={this.state.tutor} onChange={this.onChangeTutor} className="full"/>
                        </div>
                        <div className="category">
                            <label>Category</label>
                            <input value={this.state.category} onChange={this.onChangeCategory} className="full"/>
                        </div>
                        <div className="videos">
                            <label>Videos</label>
                            <input value={this.state.videos === 0 ? "" : this.state.videos} onChange={this.onChangeVideos} className="full"/>
                        </div>
                        <div className="description">
                            <label>Short Description</label>
                            <input value={this.state.description} onChange={this.onChangeDescription} className="full"/>
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
