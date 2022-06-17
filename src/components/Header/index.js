import React from "react";

function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a className="navbar-item">
          <strong>Jonathan Franklin</strong>
        </a>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-light">About Me</a>
            <a className="button is-light">Portfolio</a>
            <a className="button is-light">Contact</a>
            <a className="button is-light">Resume</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
