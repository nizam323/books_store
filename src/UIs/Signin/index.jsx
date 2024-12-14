import React, { useState } from "react";
import logo from "../../../public/images/images.png"
import styles from "../Signup/login.module.css"

export default function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit() {
        fetch("http:/localhost:3000/signin"), {
            method: "post",
            Headers: {},
            body: JSON.stringify(
                {
                    email,
                    password
                }
            )
        }
    }

    return (
        <>
            <div className={styles.formcon}>
                <div className={styles.logincon}>
                    <div className={styles.img} style={{ backgroundImage: `url(${logo})`, borderRadius: "40px" }}></div>
                    <div className={styles.unameemail}>
                        <form method="post" onSubmit={handleSubmit}>
                            <label htmlFor="u-email" style={{ color: '#3c434a' }}>Email Address</label>
                            <input className={styles.input} type="text" id="u-email" required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <br />
                            <br />
                            <label htmlFor="pswd" style={{ color: '#3c434a' }}>Password</label>
                            <input className={styles.input} type="password" id="pswd" required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </form>
                    </div>
                    <center>
                        <div className={styles.checkbtn} style={{ justifyContent: "center" }}>
                            <button type="submit">Sign In</button>
                        </div>
                    </center>
                </div>
                <div className={styles.acon}>
                    <a>Lost your password?</a>
                    <a href="index.html">← Go to Brandstore</a>
                </div>
            </div>
        </>
    )
}