import Logo from "./../../../assets/images/logo-white.jpg";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <img src={Logo} alt="Pimo Mafuta" className="w-40 md:w-60" />
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:flex gap-8 md:gap-60 text-center md:text-left font-axiformaBook text-sm">
          <div className="mb-6 md:mb-0">
            <h4 className="text-white font-semibold mb-3 md:mb-2">
              More Pimo Mafuta
            </h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link to={""} className="hover:text-white block py-1 md:py-0">
                  Rig Count
                </Link>
              </li>
              <li>
                <Link to={""} className="hover:text-white block py-1 md:py-0">
                  Shop Pimo Mafuta
                </Link>
              </li>
              <li>
                <Link to={""} className="hover:text-white block py-1 md:py-0">
                  Pimo Mafuta Store
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-2">
              Helpful Links
            </h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link to={""} className="hover:text-white block py-1 md:py-0">
                  Newsroom
                </Link>
              </li>
              <li>
                <Link to={""} className="hover:text-white block py-1 md:py-0">
                  Company Leadership
                </Link>
              </li>
              <li>
                <Link to={""} className="hover:text-white block py-1 md:py-0">
                  Energy Forward Stories
                </Link>
              </li>
              <li>
                <Link to={""} className="hover:text-white block py-1 md:py-0">
                  Digital Transformation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 md:flex-nowrap">
          <Link
            to={""}
            className="p-2 rounded-full border border-gray-500 hover:border-white transition-colors"
          >
            <FaLinkedin className="text-gray-400 hover:text-white text-lg" />
          </Link>
          <Link
            to={""}
            className="p-2 rounded-full border border-gray-500 hover:border-white transition-colors"
          >
            <FaXTwitter className="text-gray-400 hover:text-white text-lg" />
          </Link>
          <Link
            to={""}
            className="p-2 rounded-full border border-gray-500 hover:border-white transition-colors"
          >
            <FaYoutube className="text-gray-400 hover:text-white text-lg" />
          </Link>
          <Link
            to={""}
            className="p-2 rounded-full border border-gray-500 hover:border-white transition-colors"
          >
            <FaPinterest className="text-gray-400 hover:text-white text-lg" />
          </Link>
          <Link
            to={""}
            className="p-2 rounded-full border border-gray-500 hover:border-white transition-colors"
          >
            <FaInstagram className="text-gray-400 hover:text-white text-lg" />
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-6 md:my-8"></div>

      {/* Bottom Links */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm">
        <span className="order-2 md:order-1">© 2025 Pimo Mafuta Company</span>
        <div className="order-1 md:order-2 flex flex-wrap justify-center gap-3 md:gap-4">
          <Link to={""} className="hover:text-white whitespace-nowrap">
            Cookies
          </Link>
          <Link to={""} className="hover:text-white whitespace-nowrap">
            Terms
          </Link>
          <Link to={""} className="hover:text-white whitespace-nowrap">
            Conflict Minerals
          </Link>
          <Link to={""} className="hover:text-white whitespace-nowrap">
            E-Waste
          </Link>
          <Link to={""} className="hover:text-white whitespace-nowrap">
            Privacy Notice
          </Link>
          <Link to={""} className="hover:text-white whitespace-nowrap">
            Preferences
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
