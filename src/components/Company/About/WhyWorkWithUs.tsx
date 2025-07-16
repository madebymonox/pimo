import "./../../../App.css";
import { Link } from "react-router";
import { motion } from "framer-motion";

function WhyWorkWithUs() {
  return (
    <>
      <section className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          {/* Left Section - Text */}
          <div className="md:w-1/2 px-6 text-left">
            <div className="border-t-2 border-teal-500 w-10 mb-4"></div>
            <h2 className="text-3xl text-gray-900 mb-4 font-soraBold">
              Why work with us
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4 font-axiformaBook">
              At Pimo-Mafuta Energies, we distinguish ourselves through
              progressive policies, measurable and verifiable standards, and a
              work environment that promotes a strong sense of family and
              collaboration. We prioritize the well-being of our employees,
              offering robust staff welfare programs and a culture that supports
              professional development and career growth.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-4 font-axiformaBook">
              We recognize that our people are our greatest asset. That’s why we
              invest heavily in continuous learning and skill diversification,
              empowering our workforce to thrive in an enabling environment. Our
              commitment to fostering personal and corporate advancement is
              reflected in our supportive policies and structured growth
              opportunities.
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
        </div>
      </section>
      ;
    </>
  );
}

export default WhyWorkWithUs;
