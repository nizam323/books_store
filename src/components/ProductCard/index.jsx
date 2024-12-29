import React from "react";
import { Link } from "react-router";

export default function ProductCards({ proName, proPrice, proURl, proId }) {
    return (
        <>
            <div className="pro-card">
                <Link to={`product-page/${proId}`} className="anchor">
                    <div className="pro-img">
                        <span className="anchor">
                            <div className="addtocart-hover"><i className="fa-solid fa-cart-shopping"></i></div>
                            <img src={proURl} width="100%" height="100%" alt="pic" />
                        </span>
                    </div>
                    <div className="pro-txt-parent">
                        <div className="pro-name">
                            <span className="anchor">{proName}</span>
                        </div>
                        <div className="pro-price">{proPrice}</div>
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