import React, { useState } from "react";
import logo from "../../../public/images/images.png"
import styles from "./login.module.css"
import { Link } from "react-router";

export default function SignUp() {
    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPass, setShowPass] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await fetch("https://books-store-backend-mysql.vercel.app/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    email,
                    password
                })
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message);
                setName("");
                setEmail("");
                setPassword("");
            } else {
                alert(data.message || "An error occurred. Please try again."); 
            }
        } catch (error) {
            alert("Something went wrong. Please check your network and try again.");
            console.log("Signup Error:", error);
        }
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
                                <span
                                    onClick={() => setShowPass(!showPass)}
                                    style={{ fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>{showPass ? "Hide Password" : "Show Password"}
                                    <pre> </pre>
                                    <input
                                        checked={showPass}
                                        onChange={() => setShowPass(!showPass)}
                                        style={{ margin: "0", cursor: "pointer" }}
                                        type="checkbox" /></span>
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
                    <Link to={"/"}>← Go to Bookstore</Link>
                </div>
            </div>
        </>
    )
}