


import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const res = await axios.post("https://book-review-platforms.onrender.com/register", { username, email, bio, password });
    localStorage.setItem("userName", username);
    localStorage.setItem("userEmail", email);
      setSuccess("User registered! You can now login.");
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      setError(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <h2>Sign Up</h2>
        {error && <p className="signup-error">{error}</p>}
        {success && <p className="signup-success">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label><br />
            <input value={username} onChange={e => setUsername(e.target.value)} required />
          </div>
          <div>
            <label>Email:</label><br />
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div>
            <label>Bio:</label><br />
            <textarea value={bio} onChange={e => setBio(e.target.value)} />
          </div>
          <div>
            <label>Password:</label><br />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <button type="submit" style={{ marginTop: 10 }}>Sign Up</button>
        </form>
        <p>Already have an account? <Link to="/login">Login here</Link></p>
      </div>
    </div>
  );
}

export default Signup;
