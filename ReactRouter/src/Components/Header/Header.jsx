import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 shadow-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              alt="Company Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium ${
                  isActive ? "text-orange-700" : "text-gray-700 hover:text-orange-700"
                } transition duration-200`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm font-medium ${
                  isActive ? "text-orange-700" : "text-gray-700 hover:text-orange-700"
                } transition duration-200`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-sm font-medium ${
                  isActive ? "text-orange-700" : "text-gray-700 hover:text-orange-700"
                } transition duration-200`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/github"
              className={({ isActive }) =>
                `text-sm font-medium ${
                  isActive ? "text-orange-700" : "text-gray-700 hover:text-orange-700"
                } transition duration-200`
              }
            >
              Github
            </NavLink>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-3">
            <Link
              to="/login"
              className="text-sm font-medium text-gray-700 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-md transition"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="text-sm font-medium bg-orange-700 hover:bg-orange-800 text-white px-4 py-2 rounded-md transition"
            >
              Get started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

