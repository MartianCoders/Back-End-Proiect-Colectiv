import React from "react"
import "../App.css"
import {SidebarData} from './SidebarData'


class Sidebar extends React.Component<any,any> {
    
    render(){
    return (
            <ul className="sidebar-list">
            {SidebarData.map((val)=>(
                <li className="section">
                <a href={val.link}>{val.section}</a>
                </li>
            )
            )}
            </ul>
    )
    }
}

export default Sidebar