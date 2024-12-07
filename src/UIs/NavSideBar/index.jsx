import React from "react";

export default function Navsidebar() {
    return (
        <>
            <div className="cart-sidebar">
                <div className="cart-sidebar-head">
                    <div className="add-to-cart-txt">Shopping Cart</div>
                    <div className="add-to-cart-btn">+</div>
                </div>
                <div className="addtocart-products-parent">
                    {/*  <div className="addtocart-products">
                        <div className="addtocart-products-img"><img src="images/product-9.jpg" width="100" alt=""></div>
                        <div className="addtocart-products-name">
                            <h2>dnk black shoes</h2>
                            <div className="addtocart-products-price">
                                <h3>$150.00</h3>
                            </div>
                            <div className="addtocart-products-quantity">
                                <p>1</p>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="add-to-cart-msg-con">
                    <div>No products in the cart.</div>
                </div>
                <div className="add-to-cart-shopbtn">
                    <div className="subtotal">
                        <p>Subtotal</p>
                        <p>$0.00</p>
                    </div>
                    <button id="checkout">CHECKOUT</button>
                    <button>Continue Shopping</button>
                </div>
            </div>
            <div className="nav-sidebar">
                <div style={{height: "50px"}}>
                    <div className="nav-sidebar-close-btn">+</div>
                </div>
                <div className="nav-sidebar-login">
                    <a href="login.html"><i className="fa-solid fa-user"></i></a>
                </div>
                <div className="nav-sidebar-anchors"><a href="everything-page.html">EVERYTHING</a></div>
                <div className="nav-sidebar-anchors"><a href="women-page.html">WOMEN</a></div>
                <div className="nav-sidebar-anchors"><a href="men-page.html">MEN</a></div>
                <div className="nav-sidebar-anchors"><a href="accessories-page.html">ACCESSORIES</a></div>
                <div className="nav-sidebar-anchors-sepration" style={{height: "50px"}}></div>
                <div className="nav-sidebar-anchors" style={{fontWeight: "100"}}><a href="about.html">ABOUT</a></div>
                <div className="nav-sidebar-anchors" style={{fontWeight: "100"}}><a href="contact-us.html">CONTACT US</a></div>
            </div>
        </>
    )
}