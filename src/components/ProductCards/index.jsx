import React, { useEffect, useState } from "react";
import ProductCards from "../../components/ProductCard";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/addToCartSlice";

export default function ProductCard() {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("http://localhost:3000/get-products")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error(error))
    }, [])

    return (
        <>
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
                                        proURl={items.productpicurl}
                                        proId={items.id}
                                        addToCart={() => dispatch(addToCart(items))}
                                    />
                                )
                            })
                            : "no products"
                    }

                </div>
            </div>
        </>
    )
}