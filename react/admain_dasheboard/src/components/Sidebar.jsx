import { CgProfile } from "react-icons/cg";
import { RiDashboardHorizontalFill, RiAdminFill } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineSupportAgent,MdReportProblem  } from "react-icons/md";
import { GrCompliance } from "react-icons/gr";
import {Link} from "react-router-dom"

export default function Sidebar(){
	return(
		<>
		 <style>
		 	{`
		 	.sidebar {
		 		display: flex;
		 		flex-direction: column;
		 		background-color: blue;
		 		width: 18%;
		 		height: 100vh;
		 		position: fixed;
		 		z-index: 1;
		 		top: 0;
		 		left: 0;
		 		
		 	}
		 	.sidebar h1{
		 		font-size: 4vh;
		 		color: white;
		 	}
		 	.sidebar a {
		 		text-decoration: none;
		 		color: white;
		 		font-size: 23px;

		 	}

		 	.sidebar-b {
		 		display: flex;
		 		flex-direction: column;
		 		margin: 30px 0 0 10px;
		 		gap: 15px;

		 	}
		 	.sidebar-b span{
		 		margin-right: 10px;
		 	}
		 		.sidebar a:hover{
		 		background-color: black;
		 		border-radius: 10px;
		 		opacity: 0.8;

		 		}
     		
		 `}
		 </style>
		  <div className="sidebar">
		  <h1><RiAdminFill />
Admin Dashboard</h1>
			<div className="sidebar-b">
		  <Link to="/"><span><RiDashboardHorizontalFill /></span>Dashboard</Link>
		  <Link to="/users"><span><CgProfile /></span>Users</Link>
		  <Link to="/operators"><span><FaCalendarAlt /></span>operators</Link>
		  <Link to="/agents"><span><MdOutlineSupportAgent /></span>agents</Link>
		  <Link to="/complaints"><span><GrCompliance /></span>complaints</Link>
		  <Link to="/fraud"><span><MdReportProblem /></span>fraud</Link>
		</div>
		  </div>
	    </>
		)
}