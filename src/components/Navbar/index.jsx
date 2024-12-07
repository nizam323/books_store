import React from "react";

export default function Navbar() {
    return (
        <>
            <div className="bg-container">
                <nav className="nav">
                    <div className="nav-1st">
                        <div className="logo"> </div>
                        <div className="anchors">
                            <ul>
                                <li><a href="everything-page.html">EVERYTHING</a></li>
                                <li><a href="women-page.html">WOMEN</a></li>
                                <li><a href="men-page.html">MEN</a></li>
                                <li><a href="accessories-page.html">ACCESSORIES</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="nav-2nd">
                        <ul className="abo-con">
                            <li><a href="about.html">ABOUT</a></li>
                            <li><a href="contact-us.html">CONTACT US</a></li>
                        </ul>
                        <div className="amount-cart" style={{ cursor: "pointer", }} >
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
                        <div className="burger-icon-parent">
                            <div className="burger-icon">
                                <div className="b-i-1"></div>
                                <div className="b-i-1"></div>
                                <div className="b-i-1"></div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="bg-content"
                    style={{ position: "relative" }}
                >
                    <div className="bg-content-container">
                        <div className="bg-con-1">Raining Offers For Hot Summer!</div>
                        <div className="bg-con-2">25% Off On All Products</div>
                        <div className="bg-con-3"><button className="bg-btn bg-btn-1">SHOP NOW</button><button
                            className="bg-btn bg-btn-2">FIND MORE</button></div>
                    </div>
                </div>
            </div>
        </>
    )
}