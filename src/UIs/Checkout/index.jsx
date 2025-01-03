import React, { useState } from "react";
import styles from "./checkoutpage.module.css"
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart } from "../../redux/slices/addToCartSlice";
import styles2 from "../AddToCart/addtocart.module.css"

export default function CheckoutPage() {
    const [orderPlaced, setOrderPlaced] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items)
    const totalPrice = cartItems.reduce((sum, item) => sum + item.productprice * item.quantity, 0);

    const [inpValue1, setInpValue1] = useState("");
    const [inpValue2, setInpValue2] = useState("");
    const [inpValue3, setInpValue3] = useState("");
    const [inpValue4, setInpValue4] = useState("");
    const [inpValue5, setInpValue5] = useState("");

    function orderPlacedFn(e) {
        if (!cartItems) { return alert("Please Add Items First") }

        e.preventDefault();
        setOrderPlaced(true)
        setTimeout(() => {
            setOrderPlaced(false)
            setInpValue1("")
            setInpValue2("")
            setInpValue3("")
            setInpValue4("")
            setInpValue5("")
            dispatch(clearCart())
            navigate("/user")
        }, 2000);
    }


    return (
        <>
            <div className={styles.checkcon}>
                <div className={styles.chehd}>
                    <h1 style={{ marginBottom: "25px" }}>Checkout</h1>
                </div>
                <form onSubmit={orderPlacedFn}>
                    <fieldset>
                        <legend>Billing details</legend>
                        <div className={styles.flnamecon}>
                            <label htmlFor="f-name">First Name</label>
                            <input onChange={(e) => setInpValue1(e.target.value)} value={inpValue1} type="text" name="" id="f-name" required />

                            <label htmlFor="l-name">Last Name</label>
                            <input onChange={(e) => setInpValue2(e.target.value)} value={inpValue2} type="text" name="" id="l-name" required />
                        </div>
                        <label htmlFor="country">Country</label>
                        <select name="" id="country">
                            <option value="">Pakistan</option>
                            <option value="">India</option>
                            <option value="">Bangladesh</option>
                            <option value="">Qatar</option>
                            <option value="">Saudi Arabia</option>
                        </select>
                        <label htmlFor="address">Address</label>
                        <input onChange={(e) => setInpValue3(e.target.value)} value={inpValue3} type="text" name="" id="address" required />

                        <label htmlFor="phone">Phone</label>
                        <input onChange={(e) => setInpValue4(e.target.value)} value={inpValue4} type="number" name="" id="phone" required />

                        <label htmlFor="email">Email address</label>
                        <input onChange={(e) => setInpValue5(e.target.value)} value={inpValue5} type="text" name="" id="email" required />

                        <label htmlFor="add-info" style={{ margin: "0" }}>
                            <h1 style={{ fontSize: "20px", marginBottom: "13px" }}>Additional information</h1>
                        </label>
                        <textarea name="" id="add-info"
                            placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                        <button type="submit" id={styles.placeorder}>Place Order</button>

                        <div>
                            {
                                cartItems.length > 0 &&
                                <>
                                    <br />
                                    <div className={styles2.subtotal}>
                                        <p>Subtotal</p>
                                        <p>${totalPrice ? totalPrice : "0"}.00</p>
                                    </div>

                                    <br />
                                    <center>
                                        <h2 style={{ borderBottom: "2px solid", width: "100px" }}>Your Cart</h2>
                                    </center>
                                </>
                            }

                            {
                                cartItems.length > 0 ?
                                    cartItems.map((items, index) => {
                                        return (
                                            <div key={index} className={styles2.addtocartproducts}>
                                                <div className="addtocart-products-img"><img src={items.productpicurl} width="130" height="100" alt="img" /></div>
                                                <div className={styles2.addtocartproductsname}>
                                                    <h2>{items.productname}</h2>
                                                    <div className={styles2.addtocartproductsprice}>
                                                        <h3>{items.productprice}$</h3>
                                                    </div>
                                                    <div className="addtocart-products-quantity">
                                                        <p>Q: {items.quantity}</p>
                                                    </div>
                                                </div>
                                                <span className={styles2.addtocartdeletebtn}
                                                    onClick={() => dispatch(removeFromCart(items))}
                                                >+</span>
                                            </div>
                                        )
                                    })
                                    : ""
                            }
                        </div>

                    </fieldset>
                </form>
            </div>

            {orderPlaced &&
                <div className={styles.alert}>
                    <div className={styles.ordericon}><i className="fa-regular fa-circle-check"></i></div>
                    <div className={styles.ordertxt}> Order confirmed !</div>
                </div>}
        </>
    )
}