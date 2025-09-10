import "./../../../App.css";

function Career() {
  return (
    <>
      <section className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start px-6">
          {/* Left Section - Text */}
          <div className="md:w-4/5">
            {/* Heading */}
            <div className="border-t-2 border-teal-500 w-12 mb-4"></div>
            <h2 className="text-3xl text-gray-900 mb-6 font-soraBold">
              Career Information
            </h2>

            {/* Intro Paragraphs */}
            <div className="space-y-5 text-justify text-gray-600 text-base leading-relaxed font-axiformaBook">
              <p>
                At Pimo-Mafuta Energies, our people are our greatest asset. We
                place a strong emphasis on a recruitment process designed to
                identify and engage the right talent for every role.
              </p>
              <p>
                We encourage employees to take charge of their personal and
                professional growth, while the company remains firmly committed
                to supporting their development. Through a combination of
                in-house and external training programs, on-the-job learning,
                cross-functional projects, and secondment opportunities, we
                provide the resources and exposure needed to build diverse skill
                sets and achieve both short- and long-term career goals.
              </p>
              <p>
                At Pimo-Mafuta Energies, we actively promote coaching and
                mentoring as essential tools for enhancing employee development
                and strengthening core competencies across the organization.
              </p>
            </div>

            {/* Recruitment Process */}
            <div className="mt-10">
              <h3 className="text-xl font-soraBold text-gray-800 mb-4">
                Recruitment Process
              </h3>
              <ul className="space-y-3 list-inside list-disc text-gray-700 text-base leading-relaxed font-axiformaBook text-justify">
                <li>
                  Job vacancies are advertised through our official LinkedIn
                  channels.
                </li>
                <li>
                  Applications are reviewed, and shortlisted candidates are
                  contacted directly.
                </li>
                <li>
                  Depending on the role, candidates may be required to complete
                  relevant assessments.
                </li>
                <li>Interviews are conducted either virtually or in person.</li>
                <li>
                  Final selection and onboarding follow successful interview
                  outcomes.
                </li>
                <li>
                  We encourage passionate, skilled, and driven individuals to
                  apply and take the next step in their career.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Career;
