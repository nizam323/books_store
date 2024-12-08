import React, { useContext } from "react";
import { globalStates } from "../../App";

export default function Navsidebar() {
    const { showNavSideBar, setShowNavSideBar } = useContext(globalStates);
    return (
        <>
            <div className="nav-sidebar" style={{ width: showNavSideBar ? "100vmin" : "0px" }}>
                <div style={{ height: "50px" }}>
                    <div onClick={()=> setShowNavSideBar(false)} className="nav-sidebar-close-btn">+</div>
                </div>
                <div className="nav-sidebar-login">
                    <a href="login.html"><i className="fa-solid fa-user"></i></a>
                </div>
                <div className="nav-sidebar-anchors"><a href="everything-page.html">EVERYTHING</a></div>
                <div className="nav-sidebar-anchors"><a href="women-page.html">WOMEN</a></div>
                <div className="nav-sidebar-anchors"><a href="men-page.html">MEN</a></div>
                <div className="nav-sidebar-anchors"><a href="accessories-page.html">ACCESSORIES</a></div>
                <div className="nav-sidebar-anchors-sepration" style={{ height: "50px" }}></div>
                <div className="nav-sidebar-anchors" style={{ fontWeight: "100" }}><a href="about.html">ABOUT</a></div>
                <div className="nav-sidebar-anchors" style={{ fontWeight: "100" }}><a href="contact-us.html">CONTACT US</a></div>
            </div>
        </>
    )
}