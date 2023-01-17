/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <header className="nav-bar">
    <p className="Heading"> Math Magicians </p>
    <nav className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/quote">Quote</Link>
    </nav>
  </header>
);

export default Nav;