import React from "react";
import image1 from "../../../public/images/sec6-1.png";
import image2 from "../../../public/images/sec6-2.png";
import image3 from "../../../public/images/sec6-3.png";
import image4 from "../../../public/images/sec6-4.png";
import styles from "./footer.module.css";

export default function Footer() {
    return (
        <>
            <div className={styles.sec6}>
                <div className={styles.sec6content}>
                    <div className={styles.sec6con1}
                        style={{ backgroundImage: `url(${image1})` }}
                    ></div>
                    <div className={styles.sec6con2}>Worldwide Shipping</div>
                    <div className={styles.sec6con3}>We deliver books to every corner of the world.</div>
                </div>
                <div className={styles.sec6content}>
                    <div className={styles.sec6con1}
                        style={{ backgroundImage: `url(${image2})` }}
                    ></div>
                    <div className={styles.sec6con2}>Curated Collections</div>
                    <div className={styles.sec6con3}>Explore expertly curated collections of books for every taste.</div>
                </div>
                <div className={styles.sec6content}>
                    <div className={styles.sec6con1}
                        style={{ backgroundImage: `url(${image3})` }}
                    ></div>
                    <div className={styles.sec6con2}>Exclusive Discounts</div>
                    <div className={styles.sec6con3}>Enjoy amazing offers on bestsellers and new arrivals.</div>
                </div>
                <div className={styles.sec6content}>
                    <div className={styles.sec6con1}
                        style={{ backgroundImage: `url(${image4})` }}
                    ></div>
                    <div className={styles.sec6con2}>Secure Payments</div>
                    <div className={styles.sec6con3}>Shop with confidence using our secure payment methods.</div>
                </div>
            </div>
            <div className={styles.sec7}>
                <div className={styles.sec7txt}>
                    <a>SALE UP TO 50% OFF ON ALL BOOKS, INCLUDING BESTSELLERS AND CLASSICS.</a>
                </div>
            </div>
            <div className={styles.sec8}>
                <div className={styles.sec8content}>
                    <div className={styles.sec8con1}>
                        <div className={styles.sec8con2}><img style={{ borderRadius: "16px" }} src="../public/images/images.png" width="90" height="55" alt="" /></div>
                        <div className={styles.sec8con3}>Your next adventure starts with a book.</div>
                    </div>
                </div>
                <div className={styles.sec8content}>
                    <h2>Categories</h2>
                    <a href="">Fiction</a>
                    <a href="">Non-Fiction</a>
                    <a href="">Children's Books</a>
                    <a href="">Science & Technology</a>
                    <a href="">Biographies</a>
                </div>
                <div className={styles.sec8content}>
                    <h2>Popular Genres</h2>
                    <a href="">Romance</a>
                    <a href="">Thriller</a>
                    <a href="">Fantasy</a>
                    <a href="">Mystery</a>
                    <a href="">Historical</a>
                </div>
                <div className={`${styles.sec8content} sec8-extra`}>
                    <h2>Subscribe</h2>
                    <form action="" style={{ display: "contents" }}>
                        <input type="email" placeholder="Your email address..." id="sec8Email" required />
                        <button id="sec8Btn">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.footerTxt}>Copyright © 2024 Bookstore. Powered by Bookstore.</div>
                <div className={styles.footerIcon}>
                    <a href="" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="" target="_blank"><i className="fa-brands fa-youtube"></i></a>
                    <a href="" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                    <a href="" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="" target="_blank"><i className="fa-brands fa-google"></i></a>
                    <a href="" target="_blank"><i className="fa-brands fa-yelp"></i></a>
                </div>
            </div>
        </>
    );
}