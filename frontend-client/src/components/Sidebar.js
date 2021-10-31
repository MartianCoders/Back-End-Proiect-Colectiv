import "../App.css"
import {SidebarData} from './SidebarData'


function sidebar() {
    
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

export default sidebar