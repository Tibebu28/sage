import { CgProfile } from "react-icons/cg";
import { RiDashboardHorizontalFill, RiAdminFill } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineSupportAgent,MdReportProblem  } from "react-icons/md";
import { GrCompliance } from "react-icons/gr";
import {Link} from "react-router-dom"
import "./Sidebar.css"

export default function Sidebar(){
	return(
	<div className="sidebar">
		  <h1><RiAdminFill />
Admin</h1>
			<div className="sidebar-b">
		  <Link to="/"><span><RiDashboardHorizontalFill /></span>Dashboard</Link>
		  <Link to="/users"><span><CgProfile /></span>Users</Link>
		  <Link to="/operators"><span><FaCalendarAlt /></span>operators</Link>
		  <Link to="/agents"><span><MdOutlineSupportAgent /></span>agents</Link>
		  <Link to="/complaints"><span><GrCompliance /></span>complaints</Link>
		  <Link to="/fraud"><span><MdReportProblem /></span>fraud</Link>
		</div>
		  </div>

		)
}