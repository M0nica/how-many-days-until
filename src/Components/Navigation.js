import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/newyearseve">New Years Eve</NavLink></li>
      <li><NavLink to="/christmas">Christmas</NavLink></li>
    </ul>
  </nav>
);

export default Navigation;