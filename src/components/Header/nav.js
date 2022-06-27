import React from "react";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <div>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/project">Portfolio</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/resume">Resume</NavLink>
    </div>
  );
};

export default Nav;
