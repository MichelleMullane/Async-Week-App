import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Pear, NavBar } from './views';

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
