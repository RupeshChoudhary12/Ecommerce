import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import SignUp from "./components/pages/SignUp";
import Cart from "./components/Cart";
import LogSection from "./components/LogSection";
import ViewSection from "./components/ViewSection";
import FoundSection from "./components/FoundSection";
import BilingSection from "./components/BilingSection";
import ProfileSection from "./components/ProfileSection";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/log" element={<LogSection />} />
          <Route path="/view" element={<ViewSection />} />
          <Route path="/found" element={<FoundSection />} />
          <Route path="/bill" element={<BilingSection />} />
          <Route path="/profile" element={<ProfileSection />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
