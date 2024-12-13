import React from "react";
import logo from "../../../public/images/images.png"
import styles from "../Signin/login.module.css"

export default function Signup() {
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
                    <div className={styles.checkbtn} style={{justifyContent:"center"}}>
                        <button type="submit">Sign Up</button>
                    </div>
                </div>
                <div className={styles.acon}>
                    <a href="index.html">← Go to Brandstore</a>
                </div>
            </div>
        </>
    )
}