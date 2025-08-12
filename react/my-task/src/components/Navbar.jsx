import { Link} from "react-router-dom"

export default function Navbar(){
    return (
        <div style={{display: "flex", justifyContent: "flex-end", gap: "200px", margin: "20px", textDecoration: "none" , backgr}}>
            <Link to={"/"}>Home</Link>
            <Link to={"/AddTask"}>AddTask</Link>
            <Link to={"/About"}>About</Link>
        </div>
    )
}