import { Link } from "react-router-dom";
import Category from "../pages/Category";

function Header() {
  return (
    <header>
        <Link to={"/"}>Home</Link>
        <br />  
        <Link to={"/About"}>About</Link>
        <br />
        <Link to={"/Category"}>Category</Link>
        <br />
    </header>
  );
}
export default Header;