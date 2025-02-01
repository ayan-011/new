import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // Get the current URL path
  const [active, setActive] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle

  // Update active state based on the current path
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setActive("home");
    } else if (path === "/about") {
      setActive("about");
    } else if (path === "/contact") {
      setActive("contact");
    }
  }, [location]);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-10 bg-black text-white opacity-95 backdrop-blur-lg shadow-bottom-only">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <span className="font-ayan text-lg lg:text-xl">Ayan Saifi</span>

        {/* Hamburger Menu (Mobile) */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden lg:flex lg:space-x-8">
          <li
            className={`hover:text-blue-400 ${
              active === "home"
                ? "underline text-blue-400 underline-offset-8 decoration-3"
                : ""
            }`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`hover:text-blue-400 ${
              active === "about"
                ? "underline text-blue-400 underline-offset-8 decoration-3"
                : ""
            }`}
          >
            <Link to="/about">About</Link>
          </li>
          <li
            className={`hover:text-blue-400 ${
              active === "contact"
                ? "underline text-blue-400 underline-offset-8 decoration-3"
                : ""
            }`}
          >
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Social Icons (Desktop) */}
        <div className="hidden lg:flex lg:space-x-4">
          <a href="https://www.instagram.com/ayaan_saifi__1/">
            <img
              src="/insta.png"
              alt="Instagram"
              className="w-5 h-5 hover:opacity-75"
            />
          </a>
          <img
            src="/x.png"
            alt="X"
            className="w-5 h-5 hover:opacity-75"
          />
          <img
            src="/f.png"
            alt="Facebook"
            className="w-5 h-5 hover:opacity-75"
          />
        </div>
      </div>

      {/* Mobile Menu (Card Overlay) */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-20 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="fixed top-4 right-4 bg-black rounded-lg shadow-lg w-64 p-6">
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-2 right-2 text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            {/* Menu Links */}
            <ul className="flex flex-col space-y-4">
              <li
                className={`hover:text-blue-400 ${
                  active === "home"
                    ? "underline text-blue-400 underline-offset-8 decoration-3"
                    : ""
                }`}
              >
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li
                className={`hover:text-blue-400 ${
                  active === "about"
                    ? "underline text-blue-400 underline-offset-8 decoration-3"
                    : ""
                }`}
              >
                <Link to="/about" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li
                className={`hover:text-blue-400 ${
                  active === "contact"
                    ? "underline text-blue-400 underline-offset-8 decoration-3"
                    : ""
                }`}
              >
                <Link to="/contact" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex justify-center space-x-4 mt-6">
              <a href="https://www.instagram.com/ayaan_saifi__1/">
                <img
                  src="/insta.png"
                  alt="Instagram"
                  className="w-5 h-5 hover:opacity-75"
                />
              </a>
              <img
                src="/x.png"
                alt="X"
                className="w-5 h-5 hover:opacity-75"
              />
              <img
                src="/f.png"
                alt="Facebook"
                className="w-5 h-5 hover:opacity-75"
              />
            </div>
          </div>
        </div>
      )}

      {/* Bottom Border */}
      <div className="h-[1px] bg-gray-400 w-full absolute bottom-0"></div>
    </nav>
  );
};

export default Navbar;