import React from "react";
import Navbar from "../Navbar";

export default function Herosection() {
    return (
        <>
            <div className="bg-container">
                <Navbar />
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