import React, { useContext, useEffect, useState } from "react";
import { globalStates } from "../../App";
import Navsidebar from "../../UIs/NavSideBar";
import AddToCart from "../../UIs/AddToCart";
import { NavLink, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import UserNavsidebar from "../../UIs/UserNavSideBar";

export default function UserNavbar() {
    const [data, setData] = useState();
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

    const cartItems = useSelector((state) => state.cart.items)
    const navigate = useNavigate();
    let userEmail = window.localStorage.getItem("userEmail");
    const { showNavSideBar, setShowNavSideBar, showCart, setShowCart, dropDown, setDropDown } = useContext(globalStates);
    const totalPrice = cartItems.reduce((sum, item) => sum + item.productprice * item.quantity, 0);

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
                    </div>
                </div>
                <div className="nav-2nd">
                    <div onClick={() => setShowCart(!showCart)} className="amount-cart" style={{ cursor: "pointer", }} >
                        <ul>
                            <li><a><span className="nav-2nd-span"><span>$</span>{totalPrice ? totalPrice : "0"}.00</span></a></li>
                            <li><a><i className="fa-solid fa-bag-shopping">
                                <div className="product-count">{cartItems.length}</div>
                            </i></a></li>
                        </ul>
                    </div>
                    <div className="login"
                        style={{ position: "relative", cursor: "pointer" }}
                        onClick={() => setDropDown(!dropDown)}><ul>
                            <li><a style={{
                                border: "3px solid saddlebrown",
                                marginLeft: "10px",
                                padding: "10px",
                                borderRadius: " 50px",
                                backgroundColor: "black",
                            }}>{data?.username}</a></li>
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
                                    window.localStorage.removeItem("cart")
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

            <UserNavsidebar />
            <AddToCart />
        </>
    )
}