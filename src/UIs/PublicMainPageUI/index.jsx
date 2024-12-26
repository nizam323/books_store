import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import ProductCards from "../../components/ProductCard";
import Herosection from "../../components/Herosection";
import Navsidebar from "../NavSideBar";
import AddToCart from "../AddToCart";

export default function PublicMainPageUI() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/get-products")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error(error))
    }, [])

    console.log(data);

    return (
        <>
            <Herosection />
            <div className="sec-4">
                <div className="hd">
                    Featured Products
                    <div className="hd-border"></div>
                </div>
                <div className="pro-cards-sec">

                    {
                        data.length > 0 ?
                            data.map((items) => {
                                return (
                                    < ProductCards
                                        key={items.id}
                                        proName={items.productname}
                                        proPrice={items.productprice}
                                        proURl={items.productpicurl} />
                                )
                            })
                            : "no products"
                    }

                </div>
            </div>
            <Footer />
        </>
    )
}