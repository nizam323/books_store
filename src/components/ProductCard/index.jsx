import React from "react";

export default function ProductCards({ proName, proPrice, proURl }) {
    return (
        <>
            <div className="pro-card">
                <div className="pro-img">
                    <a href="#">
                        <div className="addtocart-hover">icon</div>
                        <img src={proURl} width="100%" height="100%" alt="pic" />
                    </a>
                </div>
                <div className="pro-txt-parent">
                    <div className="pro-name">
                        <a href="#" className="anchor">{proName}</a>
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
            </div>
        </>
    )
}