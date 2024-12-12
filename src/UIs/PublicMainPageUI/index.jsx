import React from "react";
import Footer from "../../components/Footer";
import ProductCards from "../../components/ProductCard";
import Herosection from "../../components/Herosection";
import Navsidebar from "../NavSideBar";
import AddToCart from "../AddToCart";

export default function PublicMainPageUI() {
    return (
        <>
            <Herosection />
            <div className="sec-4">
                <div className="hd">
                    Featured Products
                    <div className="hd-border"></div>
                </div>
                <div className="pro-cards-sec">

                    <ProductCards />
                    <ProductCards />
                    <ProductCards />

                </div>
            </div>
            <Footer />
        </>
    )
}