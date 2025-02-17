import { useState } from "react";
import Logo from "./../../../assets/images/Logo.png";
import "./../../../App.css";

function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const DropdownArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4"
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
      title: "Featured Solutions",
      content: [
        { name: "Energy Transition", description: "Advancing to net-zero" },
        { name: "Hydrogen Technologies", description: "Accelerating hydrogen" },
        { name: "Geothermal Solutions", description: "Geothermal expertise" },
      ],
    },
    {
      title: "Products & Services",
      content: [
        { name: "Drilling Services", description: "Advanced drilling tech" },
        { name: "Oilfield Equipment", description: "Reliable oilfield gear" },
        { name: "Pipeline Management", description: "Pipeline monitoring" },
      ],
    },
    {
      title: "Company",
      content: [
        { name: "About Us", description: "Our mission and values" },
        { name: "Careers", description: "Join our team" },
        { name: "Sustainability", description: "Eco-friendly initiatives" },
      ],
    },
  ];

  return (
    <section className="absolute flex w-full min-h-14 h-auto pt-4 bg-white items-end shadow-sm px-40">
      <div className="w-full flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <img src={Logo} alt="Pimo Logo" className="h-14" />
        </div>
        <ul className="flex gap-6">
          {navItems.map((item, index) => (
            <li key={index} className="relative">
              <button
                onClick={() => toggleDropdown(index)}
                className={`flex items-center gap-2 text-gray-700 hover:text-teal-500 px-2 py-4 font-soraRegular text-sm ${
                  openDropdown === index ? "border-b-2 border-teal-500" : ""
                }`}
              >
                {item.title} {DropdownArrow}
              </button>

              {openDropdown === index && (
                <div className="absolute left-0 mt-2 w-[500px] bg-white shadow-xl border rounded-lg p-4 grid grid-cols-3 gap-6">
                  {item.content.map((subItem, subIndex) => (
                    <div key={subIndex} className="flex flex-col gap-1">
                      <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                      <p className="font-semibold text-gray-800">
                        {subItem.name}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {subItem.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Header;
