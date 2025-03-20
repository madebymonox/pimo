import { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import Slider1 from "./../../assets/images/img1.png";
import Slider2 from "./../../assets/images/img2.png";
// import Slider3 from "./../../assets/images/img3.png";

function WhatWeDo() {
  const tabs = [
    {
      id: "oilfield",
      title: "Oilfield services & equipment",
      content: {
        heading: "Oilfield services & equipment",
        description:
          "Our oilfield technology and services help you operate efficiently and predictably, ensuring that projects are executed right the first time and assets consistently perform at peak productivity. Our portfolio is enriched by digitalization, artificial intelligence, and automation capabilities that enable remote operations, reduce risk, and drive decarbonization efforts.",
        featured: [
          {
            title: "Optimize reservoir performance",
            description:
              "With the SureCONNECT FE downhole fiber-optic/electric wet-mate system you can optimize reservoir performance with real-time insights.",
            image: Slider1,
          },
          {
            title: "InvictaSet self-regenerating cement system",
            description:
              "Maintain long-term zonal isolation with a cement system that repairs itself.",
            image: Slider1,
          },
        ],
      },
    },
    {
      id: "lng",
      title: "Liquefied natural gas (LNG)",
      content: {
        heading: "Liquefied natural gas (LNG)",
        description:
          "Our LNG solutions provide advanced, cost-effective, and reliable liquefaction technology. We help optimize the production and distribution of liquefied natural gas with state-of-the-art digital monitoring systems and automation.",
        featured: [
          {
            title: "Advanced LNG Liquefaction",
            description:
              "Enhancing efficiency in LNG production with next-generation liquefaction technology.",
            image: Slider2,
          },
        ],
      },
    },
    {
      id: "industrial",
      title: "Industrial technology",
      content: {
        heading: "Industrial technology",
        description:
          "Revolutionizing industrial technology with AI-driven automation and efficiency improvements.",
        featured: [],
      },
    },
    {
      id: "energy",
      title: "Energy transition",
      content: {
        heading: "Energy transition",
        description:
          "Pioneering solutions for a sustainable energy future through decarbonization and alternative energy sources.",
        featured: [],
      },
    },
    {
      id: "solutions",
      title: "Industrial solutions",
      content: {
        heading: "Industrial solutions",
        description:
          "Providing end-to-end industrial solutions for enhanced performance and sustainability.",
        featured: [],
      },
    },
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="mb-8">
          <div className="border-t-2 border-teal-500 w-10 mb-4"></div>
          <h2 className="text-3xl text-gray-900 mb-4 font-soraBold">
            What we do
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-4 font-axiformaBook">
            At Pimo-Mafuta Energies, we provide cutting-edge energy solutions
            that drive efficiency, safety, and sustainability in the oil and gas
            industry. Our expertise spans well construction, engineering,
            infrastructure development, and asset integrity management, ensuring
            seamless project execution across offshore and onshore operations.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-4 font-axiformaBook">
            We specialize in delivering high-quality energy services, leveraging
            advanced technology and industry best practices to optimize
            performance and maximize productivity. Our commitment to innovation
            allows us to develop tailored solutions that enhance operational
            reliability, reduce downtime, and improve safety standards.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-4 font-axiformaBook">
            Beyond technical excellence, we invest in people—fostering talent,
            skill diversity, and career growth within a dynamic and inclusive
            work environment. By integrating expertise with a forward-thinking
            approach, we help our clients navigate complex energy challenges
            while contributing to a more sustainable and efficient future.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-4 font-axiformaBook">
            At Pimo-Mafuta Energies, we don’t just service the energy sector—we
            redefine it.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row bg-gray-100 rounded-lg overflow-hidden">
          {/* Left Side - Tabs */}
          <div className="w-full md:w-1/3 border-r border-gray-300">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setSelectedTab(tab)}
                className={`w-full text-left h-28 px-4 text-sm transition-all flex items-center ${
                  selectedTab.id === tab.id
                    ? "border-l-4 border-teal-500 font-axiformaBold bg-gray-100"
                    : "font-axiformaBook text-gray-800 hover:bg-gray-200 bg-gray-200"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                {tab.title}
              </motion.button>
            ))}
          </div>

          {/* Right Side - Content */}
          <motion.div
            key={selectedTab.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full md:w-2/3 p-6"
          >
            <h3 className="text-2xl font-soraBold text-gray-900 mb-4">
              {selectedTab.content.heading}
            </h3>
            <p className="text-gray-600 text-sm mb-6 font-axiformaBook">
              {selectedTab.content.description}
            </p>

            {/* Featured Section */}
            {selectedTab.content.featured.length > 0 && (
              <div>
                <div className="border-t-2 border-teal-500 w-10 mb-4"></div>
                <h4 className="text-xl font-soraBold text-gray-900 mb-4">
                  Featured
                </h4>
                <div className="space-y-6">
                  {selectedTab.content.featured.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-6">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-44 h-28 object-cover rounded-lg"
                      />
                      <div>
                        <h5 className="text-lg font-soraBold text-gray-900">
                          {feature.title}
                        </h5>
                        <p className="text-gray-600 text-sm font-axiformaBook">
                          {feature.description}
                        </p>
                        <Link
                          to={"#"}
                          className="flex mt-6 text-teal-500 font-semibold text-xs hover:underline font-axiformaBold"
                        >
                          READ MORE{" "}
                          <motion.div
                            initial={{ x: 0 }}
                            whileHover={{ x: 5 }} // Moves right on hover
                            transition={{ type: "tween", duration: 0.2 }} // Smooth transition
                            className="ml-1"
                          >
                            <svg
                              width="15"
                              height="15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4.683 2.924a.5.5 0 010-.706l.137-.137a.5.5 0 01.707 0l4.992 5a.5.5 0 010 .707l-.187.187-4.676 4.75a.5.5 0 01-.71.004l-.138-.139a.5.5 0 010-.707L9.222 7.47 4.683 2.924z"
                                fill="#02A783"
                              ></path>
                            </svg>
                          </motion.div>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
