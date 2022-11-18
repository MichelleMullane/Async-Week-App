import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Pear, NavBar } from "./views";
import { Login, Signup } from "./forms";

const Paths = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pear" element={<Pear />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Paths;
