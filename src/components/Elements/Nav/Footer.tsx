import React from "react";
import {
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <img src="/logo.svg" alt="Baker Hughes" className="w-40" />
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-12 text-center md:text-left">
          <div>
            <h4 className="text-white font-semibold mb-2">More Baker Hughes</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-white">
                  Rig Count ↗
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Shop Baker Hughes ↗
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Baker Hughes Store ↗
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Helpful Links</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-white">
                  Newsroom
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Company Leadership
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Energy Forward Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Digital Transformation
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a
            href="#"
            className="p-2 rounded-full border border-gray-500 hover:border-white"
          >
            <FaLinkedin className="text-gray-400 hover:text-white text-lg" />
          </a>
          <a
            href="#"
            className="p-2 rounded-full border border-gray-500 hover:border-white"
          >
            <FaXTwitter className="text-gray-400 hover:text-white text-lg" />
          </a>
          <a
            href="#"
            className="p-2 rounded-full border border-gray-500 hover:border-white"
          >
            <FaYoutube className="text-gray-400 hover:text-white text-lg" />
          </a>
          <a
            href="#"
            className="p-2 rounded-full border border-gray-500 hover:border-white"
          >
            <FaPinterest className="text-gray-400 hover:text-white text-lg" />
          </a>
          <a
            href="#"
            className="p-2 rounded-full border border-gray-500 hover:border-white"
          >
            <FaInstagram className="text-gray-400 hover:text-white text-lg" />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-6"></div>

      {/* Bottom Links */}
      <div className="text-center text-sm space-x-4">
        <span>© 2025 Baker Hughes Company</span>
        <a href="#" className="hover:text-white">
          Cookies
        </a>
        <a href="#" className="hover:text-white">
          Terms
        </a>
        <a href="#" className="hover:text-white">
          Conflict Minerals
        </a>
        <a href="#" className="hover:text-white">
          E-Waste
        </a>
        <a href="#" className="hover:text-white">
          Privacy Notice
        </a>
        <a href="#" className="hover:text-white">
          Preferences ↗
        </a>
      </div>
    </footer>
  );
};

export default Footer;
