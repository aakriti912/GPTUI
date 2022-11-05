import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return <ul className="nav-links">
            <li className="hover:text-pink-300">
              < NavLink to="/home">Home</NavLink>
            </li>
           <li className="hover:text-pink-300">
              <NavLink to="/calendar">Calendar</NavLink>
            </li>
            <li className="hover:text-pink-300">
                <NavLink to="/appointment">Appointment </NavLink>
            </li>
            <li className="hover:text-pink-300 text-black">
                <NavLink to="/about">About</NavLink>
            </li>
            <li className="hover:text-pink-300">
                <NavLink to="/">Log Out</NavLink>
            </li>
</ul>
};

export default NavLinks;