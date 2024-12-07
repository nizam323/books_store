import React from "react";
import logo from "../../../public/images/images.png"

export default function Signup() {
    return (
        <>
            <div className="form-con">
                <div className="login-con">
                        <div className="img" style={{ backgroundImage: `url(${logo})`, borderRadius: "40px" }}></div>
                    <div className="u-name-email">
                        <form action="">
                            <label htmlFor="u-name" style={{ color: '#3c434a' }}>Email Address</label>
                            <input type="text" id="u-name" required />
                            <br />
                            <br />
                            <label htmlFor="pswd" style={{ color: '#3c434a' }}>Password</label>
                            <input type="password" id="pswd" required />
                        </form>
                    </div>
                    <div className="check-btn" style={{justifyContent:"center"}}>
                        <button type="submit">Sign Up</button>
                    </div>
                </div>
                <div className="a-con">
                    <a href="index.html">← Go to Brandstore</a>
                </div>
            </div>
        </>
    )
}