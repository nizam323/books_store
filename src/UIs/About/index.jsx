import React from "react";
import styles from "./about.module.css"

export default function About() {
    return (
        <>
            <div className={`${styles.bgcontainer} ${styles.aboutbgcon}`}
                style={{ backgroundImage: `url(/images/pexels-photo-1907785.jpeg)` }}>
                <div className={styles.bgcontent} style={{ justifyContent: "center", alignItems: "center" }}>
                    <div className={styles.bgcontentcontainer} style={{ margin: "0" }}>
                        <div className={styles.bgcon1}
                            style={{ color: "white", fontWeight: "600", height: "253px", display: "flex", alignItems: "center", textAlign: "center", justifyContent: "center" }}>
                            <h1>About Us</h1></div>
                    </div>
                </div>
            </div >

            <div className={styles.aboutsec2container}>
                <div className={styles.absec2firstparent}>
                    <div className={styles.absec2line}>
                    </div>
                    <div className={styles.absec2txt}>
                        <h1>Who We Are</h1>
                        <p style={{ textAlign: "justify", textAlign: "justify", fontSize: "18px", lineHeight: "2" }}>Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                            mattis,
                            pulvinar dapibus leo. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae
                            erat
                            consequat auctor eu in elit.</p>
                    </div>
                </div>
                <div className={`${styles.absec2firstparent} ${styles.absec2firstparentimg}`}
                    style={{ backgroundImage: `url(/images/about-2.jpg)`, backgroundSize: "100% 100%" }}
                >
                </div>
            </div>
            <div className={styles.absec3}>
                <div className={styles.sec3contentparent}>
                    <div className={styles.absec2line} style={{ width: "100px", marginBottom: "40px" }}></div>
                    <div className={styles.absec3txt1}>
                        <h2>A Few Words About</h2>
                    </div>
                    <div className={styles.absec3txt2}>
                        <h2>Our Team</h2>
                    </div>
                    <div className={styles.absec3txt3}>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat
                        consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra</div>
                </div>
                <div className={styles.otprofilescon}>
                    <div className={styles.otpro}>
                        <div className={styles.otproimg}><img src="/images/ourteam-1.jpg" alt="" /></div>
                        <div className={styles.otproname}>
                            <h4>Harvey Spector</h4>
                        </div>
                        <div className={styles.otproprofession}>Founder - CEO</div>
                    </div>
                    <div className={styles.otpro}>
                        <div className={styles.otproimg}><img src="/images/ourteam-2.jpg" alt="" /></div>
                        <div className={styles.otproname}>
                            <h4>Jessica Pearson</h4>
                        </div>
                        <div className={styles.otproprofession}>COO</div>
                    </div>
                    <div className={styles.otpro}>
                        <div className={styles.otproimg}><img src="/images/ourteam-3.jpg" alt="" /></div>
                        <div className={styles.otproname}>
                            <h4>Rachel Zain</h4>
                        </div>
                        <div className={styles.otproprofession}>Marketing Head</div>
                    </div>
                    <div className={styles.otpro}>
                        <div className={styles.otproimg}><img src="/images/ourteam-4.jpg" alt="" /></div>
                        <div className={styles.otproname}>
                            <h4>Luise Litt</h4>
                        </div>
                        <div className={styles.otproprofession}>Lead Developer</div>
                    </div>
                    <div className={styles.otpro}>
                        <div className={styles.otproimg}><img src="/images/ourteam-5.jpg" alt="" /></div>
                        <div className={styles.otproname}>
                            <h4>Katrina Bennett</h4>
                        </div>
                        <div className={styles.otproprofession}>Intern Designer</div>
                    </div>
                    <div className={styles.otpro}>
                        <div className={styles.otproimg}><img src="/images/ourteam-6.jpg" alt="" /></div>
                        <div className={styles.otproname}>
                            <h4>Mike Ross</h4>
                        </div>
                        <div className={styles.otproprofession}>Intern Designer</div>
                    </div>
                </div>
            </div>

            <div className={styles.followusparent}>
                <div className={styles.followuscontentcon}>
                    <div className={styles.followuscon1}></div>
                    <div className={styles.followuscon2}>
                        <h2>Follow Us</h2>
                    </div>
                    <div className={styles.followuscon3}>
                        <a><i className="fa-brands fa-facebook"></i></a>
                        <a><i className="fa-brands fa-twitter"></i></a>
                        <a><i className="fa-brands fa-instagram"></i></a>
                        <a><i className="fa-brands fa-google-plus-g"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}