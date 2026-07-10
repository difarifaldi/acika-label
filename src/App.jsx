import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

export default function App() {
  return (
    <div className="min-h-screen font-sans text-gray-900">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route
            path="/location"
            element={<div className="p-20">Location (placeholder)</div>}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}
