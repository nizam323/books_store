import React, { useContext } from "react";
import { globalStates } from "../../App";
import styles from "./addtocart.module.css"
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/slices/addToCartSlice";
import { Link } from "react-router";

export default function AddToCart() {
    const { showCart, setShowCart } = useContext(globalStates);
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items)
    const totalPrice = cartItems.reduce((sum, item) => sum + item.productprice * item.quantity, 0);

    return (
        <>
            <div style={{ width: showCart ? "65vmax" : "0px", display: "flex", flexDirection: "column" }} className={styles.cartsidebar}>
                <div className={styles.cartsidebarhead}>
                    <div className={styles.addtocarttxt}>Shopping Cart</div>
                    <div onClick={() => setShowCart(false)} className={styles.addtocartbtn}>+</div>
                </div>
                <div className={styles.addtocartproductsparent}>

                    {cartItems == "" ?
                        <div className={styles.addtocartmsgcon}>
                            <div>No products in the cart.</div>
                        </div>
                        :
                        cartItems.map((items, index) => {
                            return (
                                <div key={index} className={styles.addtocartproducts}>
                                    <div className="addtocart-products-img"><img src={items.productpicurl} width="130" height="100" alt="img" /></div>
                                    <div className={styles.addtocartproductsname}>
                                        <h2>{items.productname}</h2>
                                        <div className={styles.addtocartproductsprice}>
                                            <h3>{items.productprice}$</h3>
                                        </div>
                                        <div className="addtocart-products-quantity">
                                            <p>Q: {items.quantity}</p>
                                        </div>
                                    </div>
                                    <span className={styles.addtocartdeletebtn}
                                        onClick={() => dispatch(removeFromCart(items))}
                                    >+</span>
                                </div>
                            )
                        })}

                </div>
                <div className={styles.addtocartshopbtn}>
                    {cartItems.length > 0 &&
                        <>
                            <div className={styles.subtotal}>
                                <p>Subtotal</p>
                                <p>${totalPrice ? totalPrice : "0"}.00</p>
                            </div>
                            <Link style={{ color: "white", textDecoration: "none", width: "100%", textAlign: "center" }} to={"checkout"}>
                                <button id={styles.checkout}>
                                    CHECKOUT
                                </button>
                            </Link>
                        </>
                    }
                    <Link style={{ color: "white", textDecoration: "none", width: "100%", textAlign: "center" }} to={"/user"}>
                        <button>Continue Shopping</button>
                    </Link>
                </div>
            </div >
        </>
    )
}