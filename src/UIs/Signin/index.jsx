import React from "react";
import logo from "../../../public/images/images.png"
import styles from "./login.module.css"

export default function Signin() {
    return (
        <>
            <div className={styles.formcon}>
                <div className={styles.logincon}>
                        <div className={styles.img} style={{ backgroundImage: `url(${logo})`, borderRadius: "40px" }}></div>
                    <div className={styles.unameemail}>
                        <form action="">
                            <label htmlFor="u-name" style={{ color: '#3c434a' }}>Email Address</label>
                            <input type="text" id="u-name" required />
                            <br />
                            <br />
                            <label htmlFor="pswd" style={{ color: '#3c434a' }}>Password</label>
                            <input type="password" id="pswd" required />
                        </form>
                    </div>
                    <div className={styles.checkbtn}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input type="checkbox" name="" id="" style={{ width: '17px', height: '17px', marginRight: '7px' }} />
                            <p style={{ color: '#3c434a' }}>Remember Me</p>
                        </div>
                        <button type="submit">Sign In</button>
                    </div>
                </div>
                <div className={styles.acon}>
                    <a>Lost your password?</a>
                    <a>← Go to Brandstore</a>
                </div>
            </div>
        </>
    )
}