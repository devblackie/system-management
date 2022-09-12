import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
        <a href="/#">
        <NavLink className="nav-link " to='/records'>Records</NavLink>
        <NavLink className="nav-link " to='/sales'>Sales</NavLink>
        <NavLink className="nav-link " to='/expenditure'>Expenditure</NavLink>
        <NavLink className="nav-link " to='/feeding'>Feeding</NavLink>
        </a>
    </div>
  );
}