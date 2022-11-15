import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="w-full bg-white shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <h1 className="">BrightGam College</h1>
          </div>
        </div>
        <div>
          <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            <li className="text-gray-600 hover:text-blue-600">
              <NavLink className="hover:border-b-4 pb-2 border-white" to="/">
                HOME
              </NavLink>
            </li>
            <li className="text-gray-600 hover:text-blue-600">
              <NavLink
                className="hover:border-b-4 pb-2 border-white"
                to="/courses"
              >
                COURSES
              </NavLink>
            </li>
            <li className="text-gray-600 hover:text-blue-600">
              <NavLink
                className="hover:border-b-4 pb-2 border-white"
                to="/students"
              >
                STUDENTS
              </NavLink>
            </li>
            <li className="text-gray-600 hover:text-blue-600">
              <NavLink
                className="hover:border-b-4 pb-2 border-white"
                to="/teachers"
              >
                TEACHERS
              </NavLink>
            </li>
            <li className="text-gray-600 hover:text-blue-600">
              <NavLink
                className="hover:border-b-4 pb-2 border-white"
                to="/about"
              >
                ABOUT
              </NavLink>
            </li>
            <li className="text-gray-600 hover:text-blue-600">
              <NavLink
                className="hover:border-b-4 pb-2 border-white"
                to="/contactus"
              >
                CONTACT US
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
