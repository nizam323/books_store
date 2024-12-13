import React, { useContext } from "react";
import { globalStates } from "../../App";
import styles from "./addtocart.module.css"

export default function AddToCart() {
    const { showCart, setShowCart } = useContext(globalStates);
    return (
        <>
            <div style={{ width: showCart ? "65vmax" : "0px" }} className={styles.cartsidebar}>
                <div className={styles.cartsidebarhead}>
                    <div className={styles.addtocarttxt}>Shopping Cart</div>
                    <div onClick={() => setShowCart(false)} className={styles.addtocartbtn}>+</div>
                </div>
                <div className={styles.addtocartproductsparent}>
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
                <div className={styles.addtocartmsgcon}>
                    <div>No products in the cart.</div>
                </div>
                <div className={styles.addtocartshopbtn}>
                    <div className={styles.subtotal}>
                        <p>Subtotal</p>
                        <p>$0.00</p>
                    </div>
                    <button id={styles.checkout}>CHECKOUT</button>
                    <button>Continue Shopping</button>
                </div>
            </div>
        </>
    )
}