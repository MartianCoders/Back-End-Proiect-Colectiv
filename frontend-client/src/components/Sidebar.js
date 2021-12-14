import React from "react"
import "../App.css"

class Sidebar extends React.Component {

     tutorials;

    getTutorials(){
        axios({
            method: 'get',
            url: 'localhost:8000/courses/'
            })

            .then(function (response) {
                tutorials.add(response.data)
            });
                }
    
    render(){

    return (
            <ul className="sidebar-list">
            {tutorials.map((val)=>(
                <li className="section">
                <a href={val.video}>{val.title}</a>
                </li>
            )
            )}
            </ul>
    )
    }
}

export default Sidebar