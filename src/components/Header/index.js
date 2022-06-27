import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Project from "../Project";
import About from "./about";
import Contact from "./contact";
import Resume from "./resume";

function Header() {
  return (
    <Router>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item title">
            <strong>Jonathan Franklin</strong>
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link to="/Project" className="button is-light">
                Portfolio
              </Link>
              <Link to="/Contact" className="button is-light">
                Contact
              </Link>
              <Link to="/Resume" className="button is-light">
                Resume
              </Link>
              <Link to="/" className="button is-light">
                About Me
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<About />} />
        <Route
          path="/Project"
          className="button is-light"
          element={<Project />}
        />
        <Route
          path="/Contact"
          className="button is-light"
          element={<Contact />}
        />
        <Route
          path="/Resume"
          className="button is-light"
          element={<Resume />}
        />
      </Routes>
    </Router>
  );
}

export default Header;
