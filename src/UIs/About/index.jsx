import React from "react";

export default function About() {
    return (
        <>
            <div className="bg-container about-bg-con">
                <div className="bg-content" style={{ justifyContent: "center", alignItems: "center" }}>
                    <div className="bg-content-container" style={{ margin: "0" }}>
                        <div className="bg-con-1"
                            style={{ color: "white", fontWeight: "600", height: "253px", display: "flex", alignItems: "center", textAlign: "center", justifyContent: "center" }}>
                            About Us</div>
                    </div>
                </div>
            </div >

            <div className="about-sec-2-container">
                <div className="ab-sec-2-first-parent">
                    <div className="ab-sec-2-line">
                    </div>
                    <div className="ab-sec-2-txt">
                        <h1>Who We Are</h1>
                        <p style={{ textAlign: "justify", textAlign: "justify", fontSize: "18px", lineHeight: "2" }}>Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                            mattis,
                            pulvinar dapibus leo. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae
                            erat
                            consequat auctor eu in elit.</p>
                    </div>
                </div>
                <div className="ab-sec-2-first-parent ab-sec-2-first-parent-img"
                    style={{ backgroundImage: `url(images/about-2.jpg)`, backgroundSize: "100% 100%" }}
                >
                </div>
            </div>
            <div className="ab-sec-3">
                <div className="sec-3-content-parent">
                    <div className="ab-sec-2-line" style={{ width: "100px", marginBottom: "40px" }}></div>
                    <div className="ab-sec-3-txt1">
                        <h2>A Few Words About</h2>
                    </div>
                    <div className="ab-sec-3-txt2">
                        <h2>Our Team</h2>
                    </div>
                    <div className="ab-sec-3-txt3">Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat
                        consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra</div>
                </div>
                <div className="ot-profiles-con">
                    <div className="ot-pro">
                        <div className="ot-pro-img"><img src="images/ourteam-1.jpg" alt="" /></div>
                        <div className="ot-pro-name">
                            <h4>Harvey Spector</h4>
                        </div>
                        <div className="ot-pro-profession">Founder - CEO</div>
                    </div>
                    <div className="ot-pro">
                        <div className="ot-pro-img"><img src="images/ourteam-2.jpg" alt="" /></div>
                        <div className="ot-pro-name">
                            <h4>Jessica Pearson</h4>
                        </div>
                        <div className="ot-pro-profession">COO</div>
                    </div>
                    <div className="ot-pro">
                        <div className="ot-pro-img"><img src="images/ourteam-3.jpg" alt="" /></div>
                        <div className="ot-pro-name">
                            <h4>Rachel Zain</h4>
                        </div>
                        <div className="ot-pro-profession">Marketing Head</div>
                    </div>
                    <div className="ot-pro">
                        <div className="ot-pro-img"><img src="images/ourteam-4.jpg" alt="" /></div>
                        <div className="ot-pro-name">
                            <h4>Luise Litt</h4>
                        </div>
                        <div className="ot-pro-profession">Lead Developer</div>
                    </div>
                    <div className="ot-pro">
                        <div className="ot-pro-img"><img src="images/ourteam-5.jpg" alt="" /></div>
                        <div className="ot-pro-name">
                            <h4>Katrina Bennett</h4>
                        </div>
                        <div className="ot-pro-profession">Intern Designer</div>
                    </div>
                    <div className="ot-pro">
                        <div className="ot-pro-img"><img src="images/ourteam-6.jpg" alt="" /></div>
                        <div className="ot-pro-name">
                            <h4>Mike Ross</h4>
                        </div>
                        <div className="ot-pro-profession">Intern Designer</div>
                    </div>
                </div>
            </div>

            <div className="followus-parent">
                <div className="followus-content-con">
                    <div className="followus-con-1"></div>
                    <div className="followus-con-2">
                        <h2>Follow Us</h2>
                    </div>
                    <div className="followus-con-3">
                        <a href=""><i className="fa-brands fa-facebook"></i></a>
                        <a href=""><i className="fa-brands fa-twitter"></i></a>
                        <a href=""><i className="fa-brands fa-instagram"></i></a>
                        <a href=""><i className="fa-brands fa-google-plus-g"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}