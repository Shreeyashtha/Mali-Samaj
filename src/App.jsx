import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import YouthCommittee from './pages/YouthCommittee';
import ExecutiveCommittee from './pages/ExecutiveCommittee';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/youth-committee" element={<YouthCommittee />} />
        <Route path="/executive-committee" element={<ExecutiveCommittee />} />
        <Route path="/about-us" element={<AboutUs/>} />
      </Routes>
    </Router>
  );
}

export default App;