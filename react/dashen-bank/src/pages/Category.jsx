import { Link } from "react-router-dom";

function Category(){
    return (
        <div>
            <h1>Welcome to Category Page</h1>
        <Link to="/Category/electronic">electronic</Link>
        </div>
    );
}

export default Category;