import { useState } from "react";
import { Link } from "react-router";
// import { Link } from "react-router-dom";
import Logo from "./../../../assets/images/logo.png";
import "./../../../App.css";

function Header() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<number | null>(
    null
  );

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenMobileDropdown(null);
  };

  const toggleMobileDropdown = (index: number) => {
    setOpenMobileDropdown(openMobileDropdown === index ? null : index);
  };

  const DropdownArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4 transition-transform duration-300"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );

  const navItems = [
    {
      title: "Company",
      content: [
        {
          name: "About Us",
          link: "/about",
          description: "Who we are",
        },
        {
          name: "Our Journey",
          link: "/about",
          description: "Advancing to net-zero",
        },
        {
          name: "Leadership Team",
          link: "#",
          description: "The Core of Pimo",
        },
      ],
    },
    {
      title: "HR",
      content: [
        {
          name: "Careers",
          link: "/careers",
          description: "Join our team",
        },
        {
          name: "Our stories",
          link: "/careers",
          description: "Learn about our experience",
        },
      ],
    },
    {
      title: "Products & Services",
      content: [
        {
          name: "Well Construction & Engineering",
          link: "/product?type=construction",
          description: "Advanced drilling tech",
        },
        {
          name: "Infrastructure & Asset Integrity",
          link: "/product?type=infrastructure",
          description: "Pipeline monitoring",
        },
      ],
    },
    {
      title: "Solutions",
      content: [
        {
          name: "Technical Tools",
          link: "#",
          description: "Reliable oilfield gear",
        },
      ],
    },
  ];

  return (
    <section className="flex w-full min-h-14 h-auto py-4 bg-white items-end shadow-sm px-4 md:px-40">
      <div className="w-full flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link to="/">
            <img src={Logo} alt="Pimo Logo" className="h-14" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 z-auto">
          {navItems.map((item, index) => (
            <li key={index} className="relative">
              <button
                onClick={() => toggleDropdown(index)}
                className={`flex items-center gap-2 text-gray-700 hover:text-teal-500 px-2 py-4 font-soraRegular text-sm ${
                  openDropdown === index ? "border-b-2 border-teal-500" : ""
                }`}
              >
                {item.title}
                <span
                  className={`transition-transform ${
                    openDropdown === index ? "rotate-180" : ""
                  }`}
                >
                  {DropdownArrow}
                </span>
              </button>

              {openDropdown === index && (
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-xl border rounded-lg p-3 z-40">
                  {item.content.map((subItem, subIndex) => (
                    <Link to={subItem.link}>
                      <div
                        key={subIndex}
                        className="flex items-center gap-4 p-2 hover:bg-gray-100 cursor-pointer rounded-lg transition"
                      >
                        <div>
                          <p className="font-semibold text-gray-800 font-axiformaMedium text-sm">
                            {subItem.name}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-gray-600 hover:text-teal-500"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-28 left-0 w-full bg-white shadow-lg z-50">
          <ul className="py-4 px-4 space-y-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => toggleMobileDropdown(index)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-teal-500 py-2 font-soraRegular text-sm"
                >
                  {item.title}
                  <span
                    className={`transition-transform ${
                      openMobileDropdown === index ? "rotate-180" : ""
                    }`}
                  >
                    {DropdownArrow}
                  </span>
                </button>

                {openMobileDropdown === index && (
                  <div className="ml-4 mt-2 space-y-4">
                    {item.content.map((subItem, subIndex) => (
                      <div
                        key={subIndex}
                        className="flex items-center gap-4 p-2 hover:bg-gray-100 cursor-pointer rounded-lg transition"
                      >
                        <div>
                          <p className="font-semibold text-gray-800 font-axiformaMedium text-sm">
                            {subItem.name}
                          </p>
                          <p className="text-gray-500 text-xs font-soraRegular">
                            {subItem.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default Header;
