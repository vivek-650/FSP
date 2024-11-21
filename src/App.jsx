import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import MainPage from "./Components/MainPage"; // Single page for all main components
import Login from "./Components/Login"; // Separate login page

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Main page route */}
        <Route path="/" element={<MainPage />} />
        {/* Login page route */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
