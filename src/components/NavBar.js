import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"

export default function NavBar() {
 
  return (
    <nav className="">
      <div className="logoname">
        <h1 className="">BrightGam College</h1>
      </div>

      <div>
        <NavLink className="" to="/">
          <a href="/"> HOME</a>
        </NavLink>

        <NavLink className="" to="/courses">
          <a href="/courses">COURSES</a>
        </NavLink>

        <NavLink className="" to="/students">
          <a href="/students"> STUDENTS</a>
        </NavLink>

        <NavLink className="" to="/teachers">
          <a href="/teachers">TEACHERS</a>
        </NavLink>

        <NavLink className="" to="/about">
          <a href="">ABOUT</a>
        </NavLink>

        <NavLink className="" to="/contactus">
          <a href="/contactus">CONTACT US</a>
        </NavLink>
      </div>
    </nav>
  );
}
