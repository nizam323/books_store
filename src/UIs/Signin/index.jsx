import React, { useState } from "react";
import logo from "../../../public/images/images.png"
import styles from "../Signup/login.module.css"
import { useNavigate } from "react-router";

export default function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })
            .then((response) => response.json())
            .then((data) => {
                window.localStorage.setItem("token", data.token)
                window.localStorage.setItem("userEmail", email)
                navigate("/user")
            })
            .catch((error) => console.log(error))
    }

    return (
        <>
            <div className={styles.formcon}>
                <div className={styles.logincon}>
                    <div className={styles.img} style={{ backgroundImage: `url(${logo})`, borderRadius: "40px" }}></div>
                    <div className={styles.unameemail}>
                        <form method="POST" onSubmit={handleSubmit}>
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
                            <center>
                                <div className={styles.checkbtn} style={{ justifyContent: "center" }}>
                                    <button type="submit">Sign In</button>
                                </div>
                            </center>
                        </form>
                    </div>
                </div>
                <div className={styles.acon}>
                    <a>Lost your password?</a>
                    <a href="index.html">← Go to Brandstore</a>
                </div>
            </div>
        </>
    )
}