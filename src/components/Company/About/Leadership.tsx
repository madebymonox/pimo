import "./../../../App.css";

function Leadership() {
  return (
    <>
      <section className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto items-center">
          <div className="md:w-full px-6 text-left">
            <div className="border-t-2 border-teal-500 w-10 mb-4"></div>
            <h2 className="text-5xl text-gray-900 mb-4 font-soraBold">
              Company leadership
            </h2>
            <p className="text-gray-500 font-axiformaBook md:w-1/2">
              We foster a culture of open dialogue, collaboration, and rigorous
              decision-making to create long-term value for our stakeholders.
            </p>
          </div>
          <div className="md:w-full px-6 py-10">
            <ul className="flex gap-10 font-axiformaBook font-sm cursor-pointer">
              <li className="text-teal-500">Management Team</li>
              <li>Board of Directors</li>
            </ul>
            <aside className="grid grid-cols-5 py-8 gap-10">
              <span className="text-center space-y-2">
                <img
                  className="border border-gray-300 rounded-full"
                  src={
                    "https://www.bakerhughes.com/sites/bakerhughes/files/styles/small_1_1_768x768_/public/2023-02/lorenzo_simonelli_crop_4.webp?h=ba7b7286&itok=_gJMdTV9"
                  }
                  alt="Directory 1"
                />
                <hgroup>
                  <h4 className="font-soraRegular text-teal-500">
                    Lorenzo Simonelli
                  </h4>
                  <h6 className="font-axiformaBook text-gray-500 text-xs">
                    Chairman and CEO
                  </h6>
                </hgroup>
              </span>
              <span className="text-center space-y-2">
                <img
                  className="border border-gray-300 rounded-full"
                  src={
                    "https://www.bakerhughes.com/sites/bakerhughes/files/styles/small_1_1_768x768_/public/2025-03/moghal_ahmed_profile_v4.webp?h=f2eda756&itok=Creqbf_R"
                  }
                  alt="Directory 1"
                />
                <hgroup>
                  <h4 className="font-soraRegular text-teal-500">
                    Ahmed Moghal
                  </h4>
                  <h6 className="font-axiformaBook text-gray-500 text-xs">
                    Executive Vice President & Chief Financial Officer
                  </h6>
                </hgroup>
              </span>
              <span className="text-center space-y-2">
                <img
                  className="border border-gray-300 rounded-full"
                  src={
                    "https://www.bakerhughes.com/sites/bakerhughes/files/styles/small_1_1_768x768_/public/2024-09/a_gatti-bio_picture-rt-090324-2.webp?h=6903eae8&itok=rfLB5Zn_"
                  }
                  alt="Directory 1"
                />
                <hgroup>
                  <h4 className="font-soraRegular text-teal-500">
                    Amerino Gatti
                  </h4>
                  <h6 className="font-axiformaBook text-gray-500 text-xs">
                    Executive Vice President of Oilfield Services & Equipment
                  </h6>
                </hgroup>
              </span>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

export default Leadership;
