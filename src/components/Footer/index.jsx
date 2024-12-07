import React from "react";

export default function Footer() {
    return (
        <>
            <div class="sec-6">
                <div class="sec6-content">
                    <div class="sec6-con-1" 
                    // style={{backgroundImage: url()}}
                    ></div>
                    <div class="sec6-con-2">Worldwide Shipping</div>
                    <div class="sec6-con-3">It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
                </div>
                <div class="sec6-content">
                    <div class="sec6-con-1" 
                    // style="background-image: url(images/sec6-2.png);"
                    ></div>
                    <div class="sec6-con-2">Best Quality</div>
                    <div class="sec6-con-3">It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
                </div>
                <div class="sec6-content">
                    <div class="sec6-con-1" 
                    // style="background-image: url(images/sec6-3.png);"
                    ></div>
                    <div class="sec6-con-2">Best Offers</div>
                    <div class="sec6-con-3">It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
                </div>
                <div class="sec6-content">
                    <div class="sec6-con-1" 
                    // style="background-image: url(images/sec6-4.png);"
                    ></div>
                    <div class="sec6-con-2">Secure Payments</div>
                    <div class="sec6-con-3">It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
                </div>
            </div>
        {/* </div >  */}
            <div className="sec-7">
                <div className="sec7-txt">
                    <a >SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.</a>
                </div>
            </div>
            <div className="sec-8">
                <div className="sec8-content">
                    <div className="sec8-con-1">
                        <div className="sec8-con-2"><img style={{borderRadius:"16px"}} src="../public/images/images.png" width="90" height="55" alt="" /></div>
                        <div className="sec8-con-3">The best look anytime, anywhere.</div>
                    </div>
                </div>
                <div className="sec8-content">
                    <h2>For Her</h2>
                    <a href="">Women Jeans</a>
                    <a href="">Tops and Shirts</a>
                    <a href="">Women Jackets</a>
                    <a href="">Heels and Flats</a>
                    <a href="">Women Accessories</a>
                </div>
                <div className="sec8-content">
                    <h2>For Him</h2>
                    <a href="">Men Jeans</a>
                    <a href="">Men Shirts</a>
                    <a href="">Men Shoes</a>
                    <a href="">Men Accessories</a>
                    <a href="">Men Jackets</a>
                </div>
                <div className="sec8-content sec8-extra">
                    <h2>Subscribe</h2>
                    <form action="" style={{display: "contents"}}>
                        <input type="email" placeholder="Your email address..." id="sec8Email" required />
                            <button id="sec8Btn">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="footer">
                <div className="footer-txt">Copyright © 2024 Brandstore. Powered by Brandstore.</div>
                <div className="footer-icon">
                    <a href="" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="" target="_blank"><i className="fa-brands fa-youtube"></i></a>
                    <a href="" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                    <a href="" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="" target="_blank"><i className="fa-brands fa-google"></i></a>
                    <a href="" target="_blank"><i className="fa-brands fa-yelp"></i></a>
                </div>
            </div>
        </>
    )
}