import React, { useContext, useEffect, useState } from "react";
import { globalStates } from "../../App";
import { NavLink, useNavigate } from "react-router";
import styles from "../NavSideBar/navsidebar.module.css"

export default function UserNavsidebar() {
    const { showNavSideBar, setShowNavSideBar } = useContext(globalStates);
    const navigate = useNavigate();
    const [data, setData] = useState();
    let userEmail = window.localStorage.getItem("userEmail");

    useEffect(() => {
        fetch("https://books-store-backend-mysql.vercel.app/profile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userEmail })
        })
            .then((response) => response.json())
            .then((data) => {
                setData(data)
            })
            .catch((error) => {
                console.error(error)
                setData(false)
            })
    }, [])

    return (
        <>
            <div className={styles.navsidebar} style={{ width: showNavSideBar ? "100vmin" : "0px" }}>
                <div style={{ height: "50px" }}>
                    <div onClick={() => setShowNavSideBar(false)} className={styles.navsidebarclosebtn}>+</div>
                </div>

                <div className={styles.navsidebaranchors}><NavLink to="/user" className={({ isActive }) => (isActive ? "active2" : "inactive2")}>HOME</NavLink></div>
                <div className={styles.navsidebaranchors}><NavLink to="/user/about" className={({ isActive }) => (isActive ? "active2" : "inactive2")}>ABOUT</NavLink></div>

                <div className={styles.navsidebaranchorssepration} style={{ height: "50px" }}></div>

                <div className={styles.navsidebarlogin}>
                    <a><i className="fa-solid fa-user"></i></a>
                </div>

                <div className={styles.navsidebaranchors} style={{ fontWeight: "100" }}>
                    <a style={{
                        fontWeight: "900",
                        letterSpacing: "1px"
                    }}>{data?.username}</a>
                </div>

                <div className={styles.navsidebaranchors} style={{ fontWeight: "100" }}>
                    <h5 style={{
                        backgroundColor: "#4b3e3e",
                        color: "antiquewhite",
                        borderRadius: "6px",
                        textAlign: "center",
                        padding: "8px",
                        cursor: "pointer"
                    }}
                        onClick={() => {
                            window.localStorage.removeItem("token")
                            window.localStorage.removeItem("userEmail")
                            window.localStorage.removeItem("cart")
                            navigate("/")
                        }}
                    >SIGN OUT</h5>
                </div>

            </div>
        </>
    )
}