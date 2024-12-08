import React, { useContext } from "react";
import { globalStates } from "../../App";

export default function AddToCart() {
    const { showCart, setShowCart } = useContext(globalStates);
    return (
        <>
            <div style={{ width: showCart ? "65vmax" : "0px" }} className="cart-sidebar">
                <div className="cart-sidebar-head">
                    <div className="add-to-cart-txt">Shopping Cart</div>
                    <div onClick={() => setShowCart(false)} className="add-to-cart-btn">+</div>
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
        </>
    )
}