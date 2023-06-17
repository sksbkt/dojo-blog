import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../../NavBar";

function Layout() {
    return <React.Fragment>
        <div className="App">
            <NavBar />
            <div className="content">
                <Outlet />
            </div></div>
    </React.Fragment>
}

export default Layout;
