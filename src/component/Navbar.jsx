import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
      <ul className="navbar">
        <li>
          <NavLink exact to="/" className="navbarItem">Le vignoble</NavLink>
        </li>
        <li>
          <NavLink exact to="/plants" className="navbarItem">Les éléments</NavLink>
        </li>
        <li>
          <NavLink exact to="/map" className="navbarItem">Les viticulteurs</NavLink>
        </li>
      </ul>
  )

  export default Navbar;
