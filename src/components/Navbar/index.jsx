import React, { useContext } from "react";
import { globalStates } from "../../App";

export default function Navbar() {
    const { showNavSideBar, setShowNavSideBar,showCart,setShowCart } = useContext(globalStates);
    return (
        <>
            <nav className="nav">
                <div className="nav-1st">
                    <div className="logo"> </div>
                    <div className="anchors">
                        <ul>
                            <li><a><h2 style={{ paddingLeft: "20px" }}>HOME</h2></a></li>
                        </ul>
                    </div>
                </div>
                <div className="nav-2nd">
                    <div onClick={() => setShowCart(!showCart)} className="amount-cart" style={{ cursor: "pointer", }} >
                        <ul>
                            <li><a><span className="nav-2nd-span"><span>$</span>0.00</span></a></li>
                            <li><a><i className="fa-solid fa-bag-shopping">
                                <div className="product-count">0</div>
                            </i></a></li>
                        </ul>
                    </div>
                    <div className="login">
                        <ul>
                            <li><a href="login.html"><i className="fa-solid fa-user"></i></a></li>
                        </ul>
                    </div>
                    <div onClick={() => setShowNavSideBar(!showNavSideBar)} className="burger-icon-parent">
                        <div className="burger-icon">
                            <div className="b-i-1"></div>
                            <div className="b-i-1"></div>
                            <div className="b-i-1"></div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}