import Logo from "./../../../assets/images/logo-white.png";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 md:py-20 px-4 md:px-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <img src={Logo} alt="Pimo Mafuta" className="w-40 md:w-50" />
          <span className="order-2 md:order-1 text-sm mt-10">
            © 2025 Pimo-Mafuta Energies Limited
          </span>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:flex gap-8 md:gap-60 text-center md:text-left font-axiformaBook text-sm">
          <div className="mb-6 md:mb-0">
            <h4 className="text-white font-semibold mb-3 md:mb-2">
              More Pimo Mafuta
            </h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link
                  to={"/product?type=construction"}
                  className="hover:text-white block py-1 md:py-0"
                >
                  Well Construction & Engineering
                </Link>
              </li>
              <li>
                <Link to={""} className="hover:text-white block py-1 md:py-0">
                  Infrastructure & Asset Integrity
                </Link>
              </li>
              <li>
                <Link
                  to={"/product?type=infrastructure"}
                  className="hover:text-white block py-1 md:py-0"
                >
                  Pimo Mafuta Store
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 md:flex-nowrap">
          <Link
            to={"https://www.linkedin.com/company/pimo-mafuta-energies"}
            className="p-2 rounded-full border border-gray-500 hover:border-white transition-colors"
          >
            <FaLinkedin className="text-gray-400 hover:text-white text-lg" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
