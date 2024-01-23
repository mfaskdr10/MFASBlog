import { NavLink } from "react-router-dom";

import {
  FaFacebook,
  FaDribbble,
  FaTwitter,
  FaBars,
  FaXmark,
} from "react-icons/fa6";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", link: "Home" },
    { path: "/services", link: "Services" },
    { path: "/about", link: "About" },
    { path: "/blogs", link: "Blogs" },
    { path: "/contact", link: "Contact" },
  ];
  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0">
      <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
        <a className="text-xl font-bold text-white">
          MFAS<span className="text-orange-500">Blog</span>
        </a>

        {/* NavItems for lg device */}
        <ul className="md:flex gap-12 text-lg hidden">
          {navItems.map(({ path, link }) => (
            <li className="text-white" key={path}>
              <NavLink
                to={path}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="text-white lg:flex gap-4 items-center hidden">
          <a href="/" className="hover:text-orange-500">
            <FaFacebook />
          </a>
          <a href="/" className="hover:text-orange-500">
            <FaDribbble />
          </a>
          <a href="/" className="hover:text-orange-500">
            <FaTwitter />
          </a>
          <button className="bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-150 ease-out">
            Log In{" "}
          </button>
        </div>

        {/* Mobile Menu Btn, Display Mobile Screen */}
        <button
          className="cursor-pointer text-white md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <FaXmark className="w-5 h-5" />
          ) : (
            <FaBars className="w-5 h-5" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div>
        <ul
          className={`md:hidden block bg-white gap-12 text-lg space-y-4 px-4 py-6 mt-14 ${
            isMenuOpen
              ? "fixed top-1 left-0 w-full transition-all ease-out duration-200"
              : "hidden"
          }`}
        >
          {navItems.map(({ path, link }) => (
            <li className="text-black" key={path}>
              <NavLink to={path}>{link}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
