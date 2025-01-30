import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

 
 const Navbar = () => {

    const location = useLocation(); // Get the current URL path
  const [active, setActive] = useState("home");

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
  
   return (
    <nav className="flex items-center justify-between top-0 sticky shadow-bottom-only bg-black z-50  lg:h-[70px]   text-white md:h-11   sm:h-10  h-10  opacity-90 backdrop-blur-3xl " >
    <span className="font-ayan flex items-center justify-center lg:mx-8 mx-1 lg:text-lg md:text-lg sm:text-md text-[12px]">
      Ayan Saifi
    </span>

    <ul className="items-center justify-center flex lg:space-x-32 lg:text-[16px]  md:space-x-20 md:text-md sm:space-x-12 sm:text-sm space-x-3  text-[12px]  ">
      <li
        className={`hover:cursor-pointer hover:text-blue-400 ${
          active === "home" ? "underline text-blue-400 underline-offset-8 decoration-3" : ""
        }`}
      >
        <Link to="/">Home</Link>
      </li>
      <li
        className={`hover:cursor-pointer hover:text-blue-400 ${
          active === "about" ? "underline text-blue-400 underline-offset-8 decoration-3" : ""
        }`}
      >
        <Link to="/about">About</Link>
      </li>
      <li
        className={`hover:cursor-pointer hover:text-blue-400 ${
          active === "contact" ? "underline text-blue-400 underline-offset-8 decoration-3" : ""
        }`}
      >
        <Link to="/contact">Contact</Link>
      </li>
    </ul>

    <div className="items-center justify-center hover:cursor-pointer flex lg:mx-8 lg:gap-4 md:mx-2 md:gap-3 sm:mx-2 sm:gap-2 mx-2 gap-2 ">
      <a href="https://www.instagram.com/ayaan_saifi__1/">
        <img src="/insta.png" alt="Instagram" className="lg:w-3 lg:h-3 md:w-3 md:h-3 sm:w-[10px] sm:h-[10px] w-[8px] h-[8px] text-white" />
      </a>
      <img src="/x.png" alt="X" className="lg:w-3 lg:h-3 md:w-3 md:h-3 sm:w-[10px] sm:h-[10px] w-[8px] h-[8px] text-white" />
      <img src="/f.png" alt="Facebook" className="lg:w-3 lg:h-3 md:w-3 md:h-3 sm:w-[10px] sm:h-[10px] w-[8px] h-[8px] text-white" />
    </div>
    <div className="h-[1px] bg-gray-400 w-full absolute bottom-0  "></div>
  </nav>
   )
 }
 
 export default Navbar