import React, { useState } from "react";
import "../style/css.css";
const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Password:", password);
  };

  return (
    <div className="container">
      <div className="signup-card">
        <div className="signup-image">
          <img src="/images/photo.png" alt="Signup Visual" />
        </div>
        <div className="signup-form">
          <h1>FASCO</h1>
          <h2>Create Account</h2>
          <div className="social-signup">
            <button className="google-btn">
              <img src="/images/google.png" alt="Google" /> Sign up with Google
            </button>
            <button className="gmail-btn">
              <img src="/images/gmail.png" alt="Gmail" /> Sign up with Email
            </button>
          </div>
          <div className="divider">
            <span>OR</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="create-account">
              Create Account
            </button>
          </form>
          <div className="login-link">
            Already have an account? <a href="#">Login</a>
          </div>
          <div className="terms">FASCO Terms & Conditions</div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
