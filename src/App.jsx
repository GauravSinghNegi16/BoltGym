import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from './Components/Home';
import AboutDetail from './Components/AboutDetail';
import Contact from './Components/Contact';
import Programs from './Components/Programs';
import Pricing from './Components/Pricing';

import NavBar from './Components/NavBar';

function App() {
  const location = useLocation();

  return (
    <div className="w-full min-h-[100vh] bg-black">
      {/* Show NavBar only on home page */}
      {location.pathname === "/" && <NavBar />}

      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Hero's "Learn More" button */}
        <Route path="/about" element={<AboutDetail />} />

        {/* Hero's "Join Now" button */}
        <Route path="/contact" element={<Contact />} />

        {/* Hero's "Explore All" button */}
        <Route path="/programs" element={<Programs />} />

        {/* Pricing page */}
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </div>
  );
}

export default App;
