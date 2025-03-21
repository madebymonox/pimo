import { Link } from "react-router";
import { motion } from "framer-motion";
import WhatWeDo from "./../../assets/images/img2.jpg";

function WhoWeAre() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Section - Text */}
        <div className="md:w-1/2 px-6 text-left">
          <div className="border-t-2 border-teal-500 w-10 mb-4"></div>
          <h2 className="text-3xl text-gray-900 mb-4 font-soraBold">
            Who we are
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-4 font-axiformaBook">
            At Pimo-Mafuta Energies, we are more than just an energy services
            company—we are innovators, problem-solvers, and industry leaders
            dedicated to shaping the future of energy. We understand the
            complexities of energy production, the importance of efficiency, and
            the necessity of sustainable solutions.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-4 font-axiformaBook">
            With a strong foundation in well construction, engineering, and
            asset integrity, we leverage cutting-edge technology, rigorous
            safety standards, and a deep commitment to excellence to deliver
            world-class energy solutions. Our team is built on expertise,
            collaboration, and a culture that values continuous learning and
            development.
          </p>
          <Link
            to={"#"}
            className="flex mt-6 text-teal-500 font-semibold text-xs hover:underline font-axiformaBold"
          >
            DISCOVER MORE{" "}
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

        {/* Right Section - Image/Video */}
        <div className="md:w-1/2 px-6 mt-8 md:mt-0">
          <div className="relative w-full h-64 md:h-80">
            <img
              src={WhatWeDo}
              alt="Energy Technology Workers"
              className="w-full h-full object-cover rounded-lg"
            />
            {/* Play Button (Optional for Video) */}
            <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl rounded-full w-12 h-12 mx-auto my-auto">
              ▶
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
