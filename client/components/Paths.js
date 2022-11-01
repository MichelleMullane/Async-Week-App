import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import Pear from './Pear';

const Paths = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pear" element={<Pear />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Paths;
