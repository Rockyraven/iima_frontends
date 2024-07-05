/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import logo from "../../public/assets/logo1.jpg";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-scroll";
import oldlogo from "../../public/assets/oldlogo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 right-0">
      <nav
        className={`py-4 md:px-12 px-4 bg-white ${isSticky ? "sticky top-0 right-0 left-0 bg-white" : ""
          }`}
      >
        <div className="flex items-center justify-between">
          <div className="text-white flex gap-5 font-bold text-lg cursor-pointer justify-center items-center">
            <img src={logo} alt="logo" className="w-24" />
            {/* <img src={oldlogo} alt="old logo" className="w-20 -mt-2" /> */}
          </div>

          {/* for larger device */}
          <div className="lg:flex items-center gap-3 hidden text-body">
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="home"
              className="block text-primary hover:text-gray-400 py-2 px-4 cursor-pointer"
            >
              Home
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="skills"
              className="block hover:text-gray-400 py-2 px-4 cursor-pointer"
            >
              Fun in Goa
            </Link>
            {/* <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="about"
              className="block hover:text-gray-400 py-2 px-4 cursor-pointer"
            >
              Why You Shouldn’t Miss It
            </Link> */}
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="union"
              className="block hover:text-gray-400 py-2 px-4 cursor-pointer"
            >
              15 Years Reunion Pictures
            </Link>
            {/* <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="challenge"
              className="block hover:text-gray-400 py-2 px-4 cursor-pointer"
            >
              Challenge
            </Link> */}
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="price"
              className="block hover:text-gray-400 py-2 px-4 cursor-pointer"
            >
              Price
            </Link>
            <div>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdPNebrgQc8_BIxkmUfhFAgHjfO07G5JCNQV6dWc6IlL4scbw/viewform?usp=sf_link">
                <button className="py-2 px-3 bg-blue-600 rounded-xl text-white font-semibolds">Register</button>
              </a>
            </div>
          </div>

          {/* contact me btn */}


          {/* btn for small devices */}
          <button onClick={toggleMenu} className="lg:hidden text-body text-3xl">
            <HiMenu />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mt-4 bg-body p-4 rounded-lg text-white">
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="home"
              className="block hover:text-gray-400 py-2"
            >
              Home
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="skills"
              className="block hover:text-gray-400 py-2"
            >
              Fun in Goa
            </Link>
            {/* <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="about"
              className="block hover:text-gray-400 py-2"
            >
              Why You Shouldn’t Miss It
            </Link> */}
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="union"
              className="block hover:text-gray-400 py-2"
            >
              15 Years Reunion Pictures
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="price"
              className="block hover:text-gray-400 py-2"
            >
              Price
            </Link>
            <div>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdPNebrgQc8_BIxkmUfhFAgHjfO07G5JCNQV6dWc6IlL4scbw/viewform?usp=sf_link">
                <button className="py-2 px-3 bg-blue-600 rounded-xl text-white font-semibolds">Register</button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
