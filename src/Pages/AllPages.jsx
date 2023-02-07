import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import Resume from "./Resume";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";

const AllPages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default AllPages;
