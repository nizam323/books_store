import React from "react";
import { Link } from "react-router";

export default function ProductCards({ proName, proPrice, proURl, proId, addToCart }) {
    return (
        <>
            <div className="pro-card">
                <div className="addtocart-hover">
                    <abbr title="add to cart">
                        <i onClick={addToCart} className="fa-solid fa-cart-shopping"></i>
                    </abbr>
                </div>
                <Link to={`product-page/${proId}`} className="anchor">
                    <div className="pro-img">
                        <span className="anchor">
                            <img src={proURl} width="100%" height="100%" alt="pic" />
                        </span>
                    </div>
                    <div className="pro-txt-parent">
                        <div className="pro-name">
                            <span className="anchor">{proName}</span>
                        </div>
                        <div className="pro-price">{proPrice}$</div>
                        <div className="pro-rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}