import React, { useState } from "react";
import "../style/css.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="container">
      <div className="signin-card">
        <div className="signin-image">
          <img src="/images/photo.png" alt="Signin Visual" />
        </div>
        <div className="signin-form">
          <h1>FASCO</h1>
          <h2>Sign In To FASCO</h2>
          <div className="social-signin">
            <button className="google-btn">
              <img src="/images/google.png" alt="Google" /> Sign in with Google
            </button>
            <button className="gmail-btn">
              <img src="/images/gmail.png" alt="Gmail" /> Sign in with Email
            </button>
          </div>
          <div className="divider">
            <span>OR</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="signinbtn">
              Sign In
            </button>
            <button type="button" className="register">
              Register Now
            </button>
          </form>
          <div className="forget">
            <a href="#">Forget Password?</a>
          </div>
          <div className="terms">FASCO Terms & Conditions</div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
