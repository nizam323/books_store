import React, { useContext } from "react";
import { globalStates } from "../../App";
import { NavLink } from "react-router";

export default function Navsidebar() {
    const { showNavSideBar, setShowNavSideBar } = useContext(globalStates);
    return (
        <>
            <div className="nav-sidebar" style={{ width: showNavSideBar ? "100vmin" : "0px" }}>
                <div style={{ height: "50px" }}>
                    <div onClick={() => setShowNavSideBar(false)} className="nav-sidebar-close-btn">+</div>
                </div>

                <div className="nav-sidebar-anchors"><NavLink to="/" className={({ isActive }) => (isActive ? "active2" : "inactive2")}>HOME</NavLink></div>
                <div className="nav-sidebar-anchors"><NavLink to="/about" className={({ isActive }) => (isActive ? "active2" : "inactive2")}>ABOUT</NavLink></div>

                <div className="nav-sidebar-anchors-sepration" style={{ height: "50px" }}></div>

                <div className="nav-sidebar-login">
                    <a><i className="fa-solid fa-user"></i></a>
                </div>

                <div className="nav-sidebar-anchors" style={{ fontWeight: "100" }}><NavLink to="/signup" className={({ isActive }) => (isActive ? "active2" : "inactive2")}>SIGN UP</NavLink></div>
                <div className="nav-sidebar-anchors" style={{ fontWeight: "100" }}><NavLink to="/signin" className={({ isActive }) => (isActive ? "active2" : "inactive2")}>SIGN IN</NavLink></div>

            </div>
        </>
    )
}