import "./../../../App.css";
import { Link } from "react-router";
import { motion } from "framer-motion";

function Career() {
  return (
    <>
      <section className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          {/* Left Section - Text */}
          <div className="md:w-4/5 px-6 text-left">
            <div className="border-t-2 border-teal-500 w-10 mb-4"></div>
            <h2 className="text-3xl text-gray-900 mb-4 font-soraBold">
              Career Information
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4 font-axiformaBook">
              At Pimo-Mafuta Energies, our people are our greatest asset. We
              place a strong emphasis on a recruitment process designed to
              identify and engage the right talent for every role.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-4 font-axiformaBook">
              We encourage employees to take charge of their personal and
              professional growth, while the company remains firmly committed to
              supporting their development. Through a combination of in-house
              and external training programs, on-the-job learning,
              cross-functional projects, and secondment opportunities, we
              provide the resources and exposure needed to build diverse skill
              sets and achieve both short- and long-term career goals.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-4 font-axiformaBook">
              At Pimo-Mafuta Energies, we actively promote coaching and
              mentoring as essential tools for enhancing employee development
              and strengthening core competencies across the organization.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-4 font-axiformaBook">
              You can become part of the Pimo-Mafuta team by following our
              structured recruitment process when openings become available:{" "}
              <br />
              <ul>
                <li>
                  ✅ Job vacancies are advertised through our official social
                  media channels, including LinkedIn.
                </li>
                <li>
                  ✅ Interested candidates are invited to submit their CVs to
                  our recruitment email:{" "}
                  <Link
                    to={"mailto:jobopening@pimomafuta.com"}
                    className="text-teal-500"
                  >
                    jobopening@pimomafuta.com
                  </Link>
                </li>
                <li>
                  ✅ Applications are reviewed, and shortlisted candidates are
                  contacted directly.
                </li>
                <li>
                  ✅ Depending on the role, candidates may be required to
                  complete relevant assessments.
                </li>
                <li>Interviews are conducted either virtually or in person.</li>
                <li>
                  ✅ Final selection and onboarding follow successful interview
                  outcomes
                </li>
                <li>
                  ✅ We encourage passionate, skilled, and driven individuals to
                  apply and take the next step in their career journey with us.
                </li>
              </ul>
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

export default Career;
