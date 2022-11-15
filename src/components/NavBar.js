import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="">
      <div className="logoname">
        <h1 className="">BrightGam College</h1>
      </div>

      <div>
        <a className="linkage">
          <NavLink className="" to="/">
            HOME
          </NavLink>
        </a>
        <a className="linkage">
          <NavLink className="" to="/courses">
            COURSES
          </NavLink>
        </a>
        <a className="linkage">
          <NavLink className="" to="/students">
            STUDENTS
          </NavLink>
        </a>
        <a className="linkage">
          <NavLink className="" to="/teachers">
            TEACHERS
          </NavLink>
        </a>
        <a className="linkage">
          <NavLink className="" to="/about">
            ABOUT
          </NavLink>
        </a>
        <a className="linkage">
          <NavLink className="" to="/contactus">
            CONTACT US
          </NavLink>
        </a>
      </div>
    </nav>
  );
}
