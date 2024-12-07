import React from "react";
import logo from "../../../public/images/images.png"

export default function Signin() {
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
                    <div className="check-btn">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input type="checkbox" name="" id="" style={{ width: '17px', height: '17px', marginRight: '7px' }} />
                            <p style={{ color: '#3c434a' }}>Remember Me</p>
                        </div>
                        <button type="submit">Sign In</button>
                    </div>
                </div>
                <div className="a-con">
                    <a href="">Lost your password?</a>
                    <a href="index.html">← Go to Brandstore</a>
                </div>
            </div>
        </>
    )
}