import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/constructionLogo.jpeg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Modal from "./Modal";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full h-[125px] bg-secondary fixed top-0 left-0 z-40">
      {/* Navbar */}
      <div className="h-full flex justify-between xl:px-20 items-center">
        <div className="z-50">
          <a href="https://contractorllc.davidshawwebdesign.com">
            <img src={logo} className="w-[275px] md:w-[200px]" alt="Logo" />
          </a>
        </div>
        <div className="hidden md:flex justify-center items-center gap-8 lg:gap-20">
          <ul className="flex gap-8 lg:gap-20 text-primary">
            <li>
              <Link to="/" onClick={handleLinkClick}>
                <p className="hover:underline decoration-accent decoration-4 underline-offset-4 text-xl font-medium hover:scale-105">
                  Home
                </p>
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={handleLinkClick}>
                <p className="hover:underline decoration-accent decoration-4 underline-offset-4 text-xl font-medium hover:scale-105">
                  Services
                </p>
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleLinkClick}>
                <p className="hover:underline decoration-accent decoration-4 underline-offset-4 text-xl font-medium hover:scale-105">
                  About
                </p>
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleLinkClick}>
                <p className="hover:underline decoration-accent decoration-4 underline-offset-4 text-xl font-medium hover:scale-105">
                  Contact
                </p>
              </Link>
            </li>
          </ul>
        </div>
        <div><button
          onClick={() => setIsModalOpen(true)}
          className="hidden md:block bg-accent hover:bg-primary hover:text-accent text-lg rounded-xl mr-2 px-6 py-4 font-bold hover:scale-105"
        >
          Free Estimates
        </button></div>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        <div
          className="flex justify-center items-center gap-4 md:hidden z-50 text-primary pr-4"
          onClick={handleMenu}
        >
          {!menuOpen ? (
            <AiOutlineMenu size={40} />
          ) : (
            <AiOutlineClose size={40} />
          )}
        </div>
      </div>

      {/* Hidden Menu */}
      <div
        className={`w-full bg-secondary flex flex-col items-center justify-center transform ${
          menuOpen ? "translate-y-0" : "-translate-y-full opacity-0"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <ul className="flex flex-col justify-center items-center gap-10 py-10">
          <li>
            <Link to="/" onClick={handleLinkClick}>
              <p className="hover:underline decoration-accent decoration-4 underline-offset-4 text-2xl hover:scale-105 text-primary">
                Home
              </p>
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={handleLinkClick}>
              <p className="hover:underline decoration-accent decoration-4 underline-offset-4 text-2xl hover:scale-105 text-primary">
                Services
              </p>
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleLinkClick}>
              <p className="hover:underline decoration-accent decoration-4 underline-offset-4 text-2xl hover:scale-105 text-primary">
                About
              </p>
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleLinkClick}>
              <p className="hover:underline decoration-accent decoration-4 underline-offset-4 text-2xl hover:scale-105 text-primary">
                Contact
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
