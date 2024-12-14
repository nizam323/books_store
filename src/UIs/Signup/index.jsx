import React, { useState } from "react";
import logo from "../../../public/images/images.png"
import styles from "./login.module.css"

export default function SignUp() {
    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPass, setShowPass] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                email,
                password
            })
        })
        setName("");
        setEmail("");
        setPassword("");
    }

    return (
        <>
            <div className={styles.formcon}>
                <div className={styles.logincon}>
                    <div className={styles.img} style={{ backgroundImage: `url(${logo})`, borderRadius: "40px" }}></div>
                    <div className={styles.unameemail}>
                        <form method="POST" onSubmit={handleSubmit}>
                            <label htmlFor="u-name" style={{ color: '#3c434a' }}>User Name</label>
                            <input className={styles.input} type="text" id="u-name" required
                                value={username}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <br />
                            <br />
                            <label htmlFor="u-email" style={{ color: '#3c434a' }}>Email Address</label>
                            <input className={styles.input} type="email" id="u-email" required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <br />
                            <br />
                            <label htmlFor="pswd" style={{ color: '#3c434a' }}>Password</label>
                            <input className={styles.input} type={showPass ? "text" : "password"} id="pswd" required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <br />
                            <br />
                            <center>
                                <span style={{ fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>{showPass ? "Hide Password" : "Show Password"}
                                    <pre> </pre>
                                    <input onClick={() => setShowPass(!showPass)} style={{ cursor: "pointer" }} type="checkbox" /></span>
                            </center>
                            <center>
                                <div className={styles.checkbtn}>
                                    <button type="submit">Sign Up</button>
                                </div>
                            </center>
                        </form>
                    </div>
                </div>
                <div className={styles.acon}>
                    <a>← Go to Brandstore</a>
                </div>
            </div>
        </>
    )
}