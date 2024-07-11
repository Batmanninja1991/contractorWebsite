import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-primary text-secondary py-10">
      <div className="max-w-7xl text-center mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <h3 className="text-xl lg:text-2xl underline underline-offset-4 font-semibold mb-4">
              Contact Us
            </h3>
            <a
              href="tel:123-456-7890"
              className="mb-2 hover:underline hover:text-accent"
            >
              (123) 456-7890
            </a>
            <a
              href="mailto:info@salemelectricco.com"
              className="mb-2 hover:underline hover:text-accent"
            >
              info@ConstructionLLC.com
            </a>
            <a
              traget="_blank"
              href="https://www.google.com/maps"
              className="mb-2 hover:underline hover:text-accent"
            >
              <p>1234 Construction Ave, Salem, OR</p>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl lg:text-2xl underline underline-offset-4 font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="flex gap-10 md:grid grid-cols-2 justify-center items-center md:gap-2 md:space-y-2">
              <li>
                <Link to="/" className="hover:underline hover:text-accent">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:underline hover:text-accent"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline hover:text-accent">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:underline hover:text-accent"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl lg:text-2xl underline underline-offset-4 font-semibold mb-4">
              Follow Us
            </h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                <FaFacebookF size={30} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                <FaTwitter size={30} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <p>&copy; 2024 Construction, LLC All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
