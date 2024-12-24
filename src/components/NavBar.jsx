import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/LOGO_ACS.png";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  // Navigation links data with updated paths for routing
  const navLinks = [
    { id: "/", title: "Home" },
    { id: "/aboutus", title: "About Us" },
    { id: "/board", title: "Executive Board" },
    { id: "/business", title: "Business" },
  ];

  return (
    <div className="w-full flex py-6 justify-between items-center navbar relative">
      {/* Logo and Branding */}
      <div className="flex items-center">
        <img src={logo} alt="logo of ajha consultancy" className="w-20 h-20" />
        <h2 className="font-poppins text-white uppercase ml-6 sm:text-sm md:text-lg">
          Ajha Consultancy Services
        </h2>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-sm text-white mr-4 ${
              index !== navLinks.length - 1 ? "mr-10" : ""
            } sm:text-xs md:text-lg p-1`}
          >
            <Link to={nav.id}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle Icon */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <i
          className={`fa-solid ${
            toggle ? "fa-times" : "fa-bars"
          } w-6 h-6 text-white cursor-pointer pt-1`}
          onClick={() => setToggle(!toggle)}
        ></i>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 bg-gray-800 p-6 transition-transform transform ${
          toggle ? "translate-x-0" : "-translate-x-full"
        } sm:hidden`}
      >
        <ul className="list-none flex flex-col">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="font-poppins font-normal cursor-pointer mb-4 text-white"
            >
              <Link to={nav.id} onClick={() => setToggle(false)}>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
