


import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import UserProfile from "./components/UserProfile";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // On app load, check if user is logged in
    axios.get("https://book-review-platforms.onrender.com/check-auth", { withCredentials: true })
      .then(res => {
        if (res.data.loggedIn) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      })
      .catch(() => setLoggedIn(false))
      .finally(() => setCheckingAuth(false));
  }, []);

  if (checkingAuth) {
    return <div>Loading...</div>;  // or spinner
  }

  return (
    <Router>
      <Routes>
        {/* Redirect "/" based on login status */}
        <Route path="/" element={loggedIn ? <BookList /> : <Navigate to="/login" />} />

        {/* Protected routes */}
        <Route path="/books/:id" element={loggedIn ? <BookDetails /> : <Navigate to="/login" />} />
        <Route path="/users/:id" element={loggedIn ? <UserProfile /> : <Navigate to="/login" />} />

        {/* Public routes */}
        <Route path="/login" element={!loggedIn ? <Login setLoggedIn={setLoggedIn} /> : <Navigate to="/" />} />
        <Route path="/signup" element={!loggedIn ? <Signup /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
