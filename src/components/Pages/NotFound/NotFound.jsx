import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>404 page not found</p>
            <Link to="/">back to the home page...</Link>
        </div>
    );
}

export default NotFound;