import React, { useEffect, useState } from "react";
import dummyImage from "../../../public/images/images.png"
import { useParams } from "react-router";
import { addToCart } from "../../redux/slices/addToCartSlice";
import { useDispatch } from "react-redux";

export default function ProductDetailPage() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`http://localhost:3000/get-product/${id}`)
            .then((response) => {
                if (!response.ok) {
                    new Error("Product not found");
                    setProduct(null)
                }
                return response.json();
            })
            .then((data) => setProduct(data))
            .catch((err) => err.message)
    }, [id])

    if (product == null) return <div>Error</div>

    const handleAddToCart = () => {
        if (window.localStorage.getItem("token")) {
            dispatch(addToCart(product));
        } else {
            alert("You need to sign in first to add items to the cart.");
        }
    };

    return (
        <>

            <div className="product-main-parent">
                <div className="product-main-container">
                    <div className="product-show">
                        <span id="productCard">
                            <div className="show-img" style={{ backgroundImage: `url(${product?.productpicurl})` }}></div>
                        </span>
                        <div className="show-txt-con">
                            <div className="show-txt">
                                <h1>{product?.productname}</h1>
                                <p>{product?.productprice}$ <span style={{ fontSize: "16px" }}>  + Free Shipping</span></p>
                                <p style={{ fontSize: "16px", lineHeight: "1.7", textAlign: "justify" }}>Nam nec tellus a odio tincidunt
                                    auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent
                                    taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in
                                    erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit
                                    sed.</p>
                                <button id="addtocartproductpage" onClick={handleAddToCart}>ADD TO CART</button>
                                <span style={{ display: "block", marginTop: "20px", fontSize: "16px" }}>Category: EDU</span>
                            </div>
                        </div>
                    </div>
                    <div className="product-desc-parent" style={{ paddingTop: "30px" }}>
                        <div className="product-desc-content-con">
                            <div className="product-desc-txt-1">
                                <h3 style={{ fontSize: "26px" }}>Product description</h3>
                            </div>
                            <div className="product-desc-txt-2">
                                <p style={{ textAlign: "justify", margin: "30px 0 45px", fontSize: "16px", lineHeight: "1.7" }}>Since it’s
                                    creation lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                    laborum.</p>
                            </div>
                            <div className="product-desc-txt-3">
                                <p style={{ marginBottom: "40px", fontSize: "16px", textAlign: "justify", lineHeight: "1.7" }}>Duis aute
                                    irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                    occaecat cupidatat non proident.</p>
                            </div>
                        </div>
                        <div className="product-desc-content-con-3">
                            <div className="product-desc-content-con-2-img"
                                style={{ backgroundImage: `url(${product?.productpicurl})` }}
                            // style="background-image: url(images/product-page-3.jpg);"
                            ></div>
                            <div className="product-desc-content-con-2-img spec"
                                style={{ backgroundColor: "white", display: "flex", alignItems: "center" }}>
                                <div className="product-desc-txt-4-con">
                                    <div className="product-desc-txt-4">
                                        <h5>Ut enim ad minim</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                            incididunt.</p>
                                    </div>
                                    <div className="product-desc-txt-5">
                                        <h5>Quis nostrud</h5>
                                        <p>Sed do eiusmod tempor incididunt ut labore.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-desc-content-con-4">
                            <div className="product-desc-content-con-2-img"
                                style={{ backgroundImage: `url(${product?.productpicurl})` }}
                            // style="background-image: url(images/product-page-4.jpg);"
                            ></div>
                            <div className="product-desc-content-con-2-img spec"
                                style={{ backgroundColor: "white", display: "flex", alignItems: "center" }}>
                                <div className="product-desc-txt-4-con-2nd">
                                    <h4>More about the product</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                        dolor in.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}