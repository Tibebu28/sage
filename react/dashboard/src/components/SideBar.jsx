import {Link} from "react-router-dom"
import "./SideBar.css"

export default function SideBar(){
	return(
	<div className="sidebar">
		  <h1>
Admin</h1>
			<div className="sidebar-b">
		  <Link to="/"><span></span>Dashboard</Link>
		  <Link to="/users"><span></span>Users</Link>
          <Link to="/Agents"><span></span>Agents</Link>
		  <Link to="/operators"><span></span>operators</Link>
		</div>
		  </div>

		)
}