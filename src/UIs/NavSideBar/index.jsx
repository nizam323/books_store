import React, { useContext } from "react";
import { globalStates } from "../../App";
import { NavLink } from "react-router";
import styles from "./navsidebar.module.css"

export default function Navsidebar() {
    const { showNavSideBar, setShowNavSideBar } = useContext(globalStates);
    return (
        <>
            <div className={styles.navsidebar} style={{ width: showNavSideBar ? "100vmin" : "0px" }}>
                <div style={{ height: "50px" }}>
                    <div onClick={() => setShowNavSideBar(false)} className={styles.navsidebarclosebtn}>+</div>
                </div>

                <div className={styles.navsidebaranchors}><NavLink to="/" className={({ isActive }) => (isActive ? "active2" : "inactive2")}>HOME</NavLink></div>
                <div className={styles.navsidebaranchors}><NavLink to="/about" className={({ isActive }) => (isActive ? "active2" : "inactive2")}>ABOUT</NavLink></div>

                <div className={styles.navsidebaranchorssepration} style={{ height: "50px" }}></div>

                <div className={styles.navsidebarlogin}>
                    <a><i className="fa-solid fa-user"></i></a>
                </div>

                <div className={styles.navsidebaranchors} style={{ fontWeight: "100" }}><NavLink to="/signup" className={({ isActive }) => (isActive ? "active2" : "inactive2")}>SIGN UP</NavLink></div>
                <div className={styles.navsidebaranchors} style={{ fontWeight: "100" }}><NavLink to="/signin" className={({ isActive }) => (isActive ? "active2" : "inactive2")}>SIGN IN</NavLink></div>

            </div>
        </>
    )
}