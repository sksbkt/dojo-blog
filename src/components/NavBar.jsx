import { Link } from "react-router-dom";
const NavBar = () => {
    return (<nav className="navbar">
        <h1>the dojo blog</h1>
        <div className="links">
            <Link to="/" >Home</Link>
            <Link to="/create" style={{
                color: "white",
                backgroundColor: "#f1356d",
                borderRadius: "9px",
            }}>New blog</Link>
        </div>
    </nav>);
}

export default NavBar;