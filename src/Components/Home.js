import React from "react";
import { NavLink } from 'react-router-dom';
import "./Home.css";

const Home = () => (
  <div className="Home">
    <h1>How many days until?</h1>
    <ul>
      <li><NavLink to="/newyearseve">New Years Eve</NavLink></li>
      <li><NavLink to="/christmas">Christmas</NavLink></li>
    </ul>
  </div>
);

export default Home;