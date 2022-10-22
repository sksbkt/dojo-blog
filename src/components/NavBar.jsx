const NavBar = () => {
    return (<nav className="navbar">
        <h1>the dojo blog</h1>
        <div className="links">
            <a href="/" >Home</a>
            <a href="/create" style={{
                color: "white",
                backgroundColor: "#f1356d",
                borderRadius: "9px",
            }}>New blog</a>
        </div>
    </nav>);
}

export default NavBar;