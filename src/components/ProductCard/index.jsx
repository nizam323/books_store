import React from "react";

export default function ProductCards() {
    return (
        <>
            <div className="pro-card">
                <div className="pro-img">
                    <a href="#">
                        <div className="addtocart-hover">icon</div>
                        <img src={"../public/images/images.png"} width="100%" height="100%" alt="DNK Red Shoes" />
                    </a>
                </div>
                <div className="pro-txt-parent">
                    <div className="pro-name">
                        <a href="#" className="anchor">DNK Red Shoes</a>
                    </div>
                    <div className="pro-price">$120.00</div>
                    <div className="pro-rating">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half-stroke"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                    </div>
                </div>
            </div>
        </>
    )
}