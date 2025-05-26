// Header.jsx
import React, { useState } from "react";
import axios from "axios";
import "./Header.css";

const Header = ({ user }) => {
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => setShowProfile(!showProfile);

  const handleLogout = async () => {
    try {
      await axios.post("https://book-review-platforms.onrender.com/logout", {}, { withCredentials: true });

      // Optional: clear user info if stored in localStorage or context
    //   localStorage.removeItem("user");

      // Redirect to login page
      window.location.href = "/login";
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <header className="header">
      <h1 className="logo">📘 BookWorld</h1>

      {user && (
        <div className="user-profile-container">
          <div className="user-circle" onClick={toggleProfile}>
            {user.name[0].toUpperCase()}
          </div>

          {showProfile && (
            <div className="profile-popup">
              <p><strong>{user.name}</strong></p>
              <p>{user.email}</p>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
