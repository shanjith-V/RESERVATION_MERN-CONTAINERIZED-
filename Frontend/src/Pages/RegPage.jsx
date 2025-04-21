import React, { useState } from "react";
import "./RegPage.css"; // Corrected CSS path
import SIGNFR from "../assets/signin.mp4";
import { useNavigate } from 'react-router-dom';

const RegPage = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async () => {
        if (!username || !email || !password) {
            alert("All fields are required!");
            return;
        }

        try {
            const response = await fetch('http://15.206.209.83:4000/api/v1/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log("Signup successful:", data.message);
                navigate('/');  // Redirect to the Login page after successful signup
            } else {
                console.error("Signup failed:", data.error);
                alert(`Signup failed: ${data.error}`);
            }
        } catch (error) {
            console.error("Sign Up Failed:", error);
            alert("Sign Up Failed. Please try again later.");
        }
    };

    return (
        <div className="SIGNIN">
            <div className="vids">
                <video src={SIGNFR} autoPlay loop muted></video>
            </div>
            <div className="hds">
                <h3>Create Your Apple ID</h3>
            </div>
            <div className="hs">
                <h3>One Apple ID is all you need to access all Apple services.</h3>
            </div>
            <div className="signin-container">
                <div className="signin-input-container">
                    <label htmlFor="name" className="signin-label">Enter Your Name:</label>
                    <input
                        type="text"
                        required
                        id="name"
                        className="signin-input"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="signin-input-container">
                    <label htmlFor="email-phone" className="signin-label">Enter Your Email:</label>
                    <input
                        type="email"
                        required
                        id="email-phone"
                        className="signin-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="signin-input-container">
                    <label htmlFor="password" className="signin-label">Password:</label>
                    <input
                        type="password"
                        required
                        id="password"
                        className="signin-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="signin-button" onClick={handleSignup}>
                        <svg className="signin-button-icon" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RegPage;
