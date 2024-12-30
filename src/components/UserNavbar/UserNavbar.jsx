import React, { useContext, useEffect } from "react";
import { globalStates } from "../../App";
import Navsidebar from "../../UIs/NavSideBar";
import AddToCart from "../../UIs/AddToCart";
import { NavLink, useNavigate } from "react-router";
import { useSelector } from "react-redux";

export default function UserNavbar() {
    useEffect(() => {

    }, [])

    const cartItems = useSelector((state) => state.cart.items)
    const navigate = useNavigate();
    let userEmail = window.localStorage.getItem("userEmail");
    const { showNavSideBar, setShowNavSideBar, showCart, setShowCart, dropDown, setDropDown } = useContext(globalStates);
    return (
        <>
            <nav className="nav">
                <div className="nav-1st">
                    <div className="logo"> </div>
                    <div className="anchors">
                        <ul>
                            <li><NavLink end to="/user" className={({ isActive }) => (isActive ? "active" : "inactive")}
                            ><h2 style={{ paddingLeft: "20px", cursor: "pointer" }}>HOME</h2></NavLink></li>
                            <li><NavLink to="/user/about" className={({ isActive }) => (isActive ? "active" : "inactive")}
                            ><h2 style={{ paddingLeft: "20px", cursor: "pointer" }}>ABOUT</h2></NavLink></li>
                        </ul>



                        <h1>{userEmail}</h1>



                    </div>
                </div>
                <div className="nav-2nd">
                    <div onClick={() => setShowCart(!showCart)} className="amount-cart" style={{ cursor: "pointer", }} >
                        <ul>
                            <li><a><span className="nav-2nd-span"><span>$</span>0.00</span></a></li>
                            <li><a><i className="fa-solid fa-bag-shopping">
                                <div className="product-count">{cartItems.length}</div>
                            </i></a></li>
                        </ul>
                    </div>
                    <div className="login"
                        style={{ position: "relative", cursor: "pointer" }}
                        onClick={() => setDropDown(!dropDown)}><ul>
                            <li><a>{"username"}</a></li>
                        </ul>
                        {dropDown && <div className="login-routes" style={{ padding: "12px", right: "-16px" }}>
                            <span style={{ display: "block", height: "5px" }}></span>
                            <h5 style={{
                                backgroundColor: "red",
                                color: "antiquewhite",
                                borderRadius: "6px",
                                textAlign: "center",
                                padding: "7px 1px",
                            }}
                                onClick={() => {
                                    window.localStorage.removeItem("token")
                                    window.localStorage.removeItem("userEmail")
                                    navigate("/")
                                }}
                            >SIGN OUT</h5></div>}
                    </div>
                    <div onClick={() => setShowNavSideBar(!showNavSideBar)} className="burger-icon-parent">
                        <div className="burger-icon">
                            <div className="b-i-1"></div>
                            <div className="b-i-1"></div>
                            <div className="b-i-1"></div>
                        </div>
                    </div>
                </div>
            </nav >

            <Navsidebar />
            <AddToCart />
        </>
    )
}