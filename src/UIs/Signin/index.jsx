import React, { useState } from "react";
import logo from "../../../public/images/images.png"
import styles from "../Signup/login.module.css"
import { Link, useNavigate } from "react-router";

export default function SignIn() {
    const [showPass, setShowPass] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        fetch("https://books-store-backend-mysql.vercel.app/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })
            .then(async (response) => {
                const data = await response.json();
                if (response.ok) {
                    alert("SignIn Successful");
                    setEmail("");
                    setPassword("");
                    window.localStorage.setItem("token", data.token)
                    window.localStorage.setItem("userEmail", email)
                    navigate("/user")
                } else {
                    alert(data.message || "An error occurred. Please try again.");
                }
            })
            .catch((error) => console.log(error))
    }

    return (
        <>
            <div className={styles.formcon}>
                <div className={styles.logincon}>
                    <center>
                        <div className={styles.img} style={{ backgroundImage: `url(${logo})`, borderRadius: "40px" }}></div>
                    </center>
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
                            <input className={styles.input} type={showPass ? "text" : "password"} id="pswd" required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <br />
                            <br />
                            <center>
                                <span
                                    onClick={() => setShowPass(!showPass)}
                                    style={{ fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>{showPass ? "Hide Password" : "Show Password"}
                                    <pre> </pre>
                                    <input
                                        type="checkbox"
                                        checked={showPass}
                                        onChange={() => setShowPass(!showPass)}
                                        style={{ margin: "0", cursor: "pointer" }} /></span>
                            </center>
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
                    <Link to={"/"}>← Go to Bookstore</Link>
                </div>
            </div>
        </>
    )
}