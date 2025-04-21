import './Login.css';
import LOGINIMG from "../assets/applesignlogo.jpg";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      alert("Please fill out both fields.");
      return;
    }

    try {
      const response = await fetch('http://15.206.209.83:4000/api/v1/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data.token);
        localStorage.setItem('token', data.token);
        navigate('/Home');
      } else {
        alert(data.error || "Login failed");
      }
    } catch (e) {
      console.error("Login Failed:", e);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="LOGIN">
      <div className="loginPage">
        <h2 className="head">Sign in for faster checkout.</h2>
        <h3 className="idapp">LOGIN ID</h3>
        <h4 className="header">Sign in to  Store</h4>

        <div className="LOGO">
          <img src={LOGINIMG} alt="Apple Sign In Logo" />
        </div>

        <form className="login-container" onSubmit={handleLogin}>
          <div className="login-input-container">
            <label htmlFor="email-phone" className="login-label">Enter Your Email:</label>
            <input 
              type="text"
              id="email-phone" 
              className="login-input" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              autoComplete="off"
            />
          </div>

          <div className="login-input-container">
            <label htmlFor="password" className="login-label">Password:</label>
            <input 
              type="password"
              id="password" 
              className="login-input" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              autoComplete="off"
            />
          </div>

          <button type="submit" className="login-button">
            <svg className="login-button-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </form>

        <h5 className="foot">Do not have an  ID?</h5>  
        <div className="regpage">
          <Link to="/user">Create yours now.</Link>  {/* Already redirects to RegPage */}
        </div>
      </div>
    </div>
  );
};

export default Login;
