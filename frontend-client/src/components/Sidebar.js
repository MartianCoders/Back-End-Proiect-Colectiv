import React from "react"
import "../App.css"
import {SidebarData} from './SidebarData'
import axios from "axios";
import { backend_url } from "../utils/utils";


class Sidebar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tutorials:[]
        }
    }

    fetchTutorials = () => {
        axios.get(`${backend_url}/courses/${this.props.courseId}/tutorials`)
        .then((response)=>{
            // console.log(response);
            this.setState({tutorials: [...response.data]});
        })
        .catch((err) => {
            alert(err);
        })
    };
    
    componentDidMount() {
        this.fetchTutorials()
    }

    onClickTitle = (e) => {
        const video = e.target.attributes.value.nodeValue;
        this.props.setVideo(video);
    }

    render(){
    console.log(this.state);
    return (
            <ul className="sidebar-list">
            {this.state.tutorials.map((val)=>(
                <li className="section">
                <div value={val.video} onClick={this.onClickTitle}>{val.description}</div>
                </li>
            )
            )}
            </ul>
    )
    }
}

export default Sidebar