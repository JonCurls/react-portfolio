import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Project from "../Project";
import About from "./about";
import Contact from "./contact";
import Resume from "./resume";

function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="navbar-item title">
          <strong>Jonathan Franklin</strong>
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <button className="button is-light">About Me</button>
            <button className="button is-light">Portfolio</button>
            <button className="button is-light">Contact</button>
            <button className="button is-light">Resume</button>
            {/* <Routes>
              <Route path="/" element={<About />} />
              <Route
                path="/portfolio"
                className="button is-light"
                element={<Project />}
              />
              <Route
                path="/portfolio"
                className="button is-light"
                element={<Contact />}
              />
              <Route
                path="/portfolio"
                className="button is-light"
                element={<Resume />}
              />
            </Routes> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
