import { useState } from "react";
import trsImage from "./../../assets/images/PHOTO 3.jpg";
import pdsImage from "./../../assets/images/PHOTO 6.JPG";
import omsImage from "./../../assets/images/PHOTO 5.jpg";
import casImage from "./../../assets/images/PHOTO 7.jpg";
import tisImage from "./../../assets/images/PHOTO 8.jpg";
import cwdImage from "./../../assets/images/CASEBIT.jpg";
import cwdImageSub from "./../../assets/images/PHOTO 0.jpg";

const tabs = [
  { key: "trs", label: "Tubular Running Service (TRS)" },
  { key: "pds", label: "Pile Driving Service (PDS)" },
  { key: "oms", label: "Onsite Machining Service (OMS)" },
  { key: "cas", label: "Casing/Cementing Accessories Supply (CAS)" },
  { key: "tis", label: "Tubular Inspection Services (TIS)" },
  { key: "cwd", label: "Casing While Drilling (CWD)" },
];

function Construction() {
  const [active, setActive] = useState("trs");

  // Swap whatever you like here – JSX, whole components, etc.
  const renderContent = () => {
    switch (active) {
      case "trs":
        return (
          <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left: Text */}
              <div>
                <h1 className="text-3xl md:text-4xl text-blue-900 mb-6 font-soraRegular">
                  Tubular Running Service (TRS)
                </h1>

                <h2 className="text-lg font-axiformaBook text-blue-900 mb-3">
                  Overview
                </h2>

                <p className="text-gray-800 mb-4 leading-relaxed font-axiformaBook">
                  Our focus is on deploying reliable technology in all aspects
                  of our operation. The solutions we provide ensures casing and
                  completion strings are installed in the wellbore safely and
                  efficiently. This is why our customers trust us to provide
                  professional service every time.
                </p>

                <p className="text-gray-800 leading-relaxed font-axiformaBook">
                  We have experience in every terrain and rig type: offshore
                  (deep & shallow water), onshore (swamp & land). With multiple
                  projects on floaters, jack-ups, swamp barges and land rigs, we
                  have proven that consistent performance is achievable.
                </p>
              </div>

              {/* Right: Image */}
              <div className="flex justify-center">
                <img
                  src={trsImage}
                  alt="Tubular Running Equipment"
                  className="w-full max-w-md h-[500px] rounded shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        );
      case "pds":
        return (
          <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left: Text */}
              <div>
                <h1 className="text-3xl md:text-4xl text-blue-900 mb-6 font-soraRegular">
                  Pile Driving Service (PDS)
                </h1>

                <h2 className="text-lg font-axiformaBook text-blue-900 mb-3">
                  Overview
                </h2>

                <p className="text-gray-800 mb-4 leading-relaxed font-axiformaBook">
                  Hydraulic hammers have become the most reliable way of
                  installing stove pipes and conductors in well construction. We
                  have extensive experience driving piles for a variety of
                  applications within the oil & gas industry including
                  installation of platforms, mooring piles, stove pipes,
                  conductors and so on.
                </p>

                <p className="text-gray-800 leading-relaxed font-axiformaBook">
                  With the largest regional fleet of hydraulic hammers dedicated
                  to the oil & gas industry (including multiple units of S-90,
                  S-150 and S-200), we ensure our customers never have to wait
                  for service.
                </p>

                <p className="text-gray-800 leading-relaxed font-axiformaBook">
                  Our experience ensures we deliver pile shoe deviation not more
                  than ±0.3° to the vertical ensuring the well is drilled
                  without any challenges.
                </p>
              </div>

              {/* Right: Image */}
              <div className="flex justify-center">
                <img
                  src={pdsImage}
                  alt="Pile Driving Service"
                  className="w-full max-w-md h-[500px] rounded shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        );
      case "oms":
        return (
          <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left: Text */}
              <div>
                <h1 className="text-3xl md:text-4xl text-blue-900 mb-6 font-soraRegular">
                  Onsite Machining Services (OMS)
                </h1>

                <h2 className="text-lg font-axiformaBook text-blue-900 mb-3">
                  Overview
                </h2>

                <p className="text-gray-800 mb-4 leading-relaxed font-axiformaBook">
                  When machining service is required on the field, we have a
                  suite of field proven machining services to meet your needs.
                  Our equipment are mobile, portable, lightweight and accurate.
                  Designed to get the work done where it’s needed.
                </p>

                <p className="text-gray-800 leading-relaxed font-axiformaBook">
                  Our on-site machines are able to perform:
                  <ul>
                    <li>
                      ✅ Orbital Cold Cutting & Bevelling (internal and
                      external)
                    </li>
                    <li>
                      ✅ Squaring, Counterboring, Weld Removal and preparation
                    </li>
                    <li>✅ Surfacing & Boring</li>
                    <li>✅ Facing & Resurfacing</li>
                    <li>✅ Tapping</li>
                    <li>✅ RTJ Grooves</li>
                    <li>✅ Conical Machining</li>
                  </ul>
                </p>
              </div>

              {/* Right: Image */}
              <div className="flex justify-center">
                <img
                  src={omsImage}
                  alt="Onsite Machining Services"
                  className="w-full max-w-md h-[500px] rounded shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        );
      case "cas":
        return (
          <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left: Text */}
              <div>
                <h1 className="text-3xl md:text-4xl text-blue-900 mb-6 font-soraRegular">
                  Casing Accessories Supply (CAS)
                </h1>

                <h2 className="text-lg font-axiformaBook text-blue-900 mb-3">
                  Overview
                </h2>

                <p className="text-gray-800 mb-4 leading-relaxed font-axiformaBook">
                  We stock world class casing and cementing accessories
                  manufactured by VAREL Energy Solutions. VAREL is trusted
                  worldwide for reliable and high performance casing and
                  cementing accessories.
                </p>

                <p className="text-gray-800 mb-4 leading-relaxed font-axiformaBook">
                  Our accessories range ensures every casing string is optimized
                  to reach the target depth (as planned) and cement is placed
                  where it should.
                </p>

                <p className="text-gray-800 leading-relaxed font-axiformaBook">
                  We stock:
                  <ul>
                    <li>✅ Float Shoes, Guide Shoes and Float Collars</li>
                    <li>✅ Reamer Shoes</li>
                    <li>✅ Top and Bottom Plugs</li>
                    <li>
                      ✅ Centralizers and Stop Collars (all types including
                      custom designs)
                    </li>
                    <li>
                      ✅ Solid Body Centralizers including market leader:
                      Spirolizer
                    </li>
                    <li>✅ Rigid Centralizers</li>
                    <li>✅ Cement Baskets</li>
                  </ul>
                </p>
              </div>

              {/* Right: Image */}
              <div className="flex justify-center">
                <img
                  src={casImage}
                  alt="Casing Accessories Supply"
                  className="w-full max-w-md h-[500px] rounded shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        );
      case "tis":
        return (
          <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left: Text */}
              <div>
                <h1 className="text-3xl md:text-4xl text-blue-900 mb-6 font-soraRegular">
                  Tubular Inspection Services (TIS)
                </h1>

                <h2 className="text-lg font-axiformaBook text-blue-900 mb-3">
                  Overview
                </h2>

                <p className="text-gray-800 mb-4 leading-relaxed font-axiformaBook">
                  We ensure the integrity of the pipes utilized in the well
                  construction life cycle. Whether its drill pipes, collars,
                  heavy weight, tubings, casings, conductors, line pipes, BHA
                  tools, etc., we provide inspection assurance to the asset
                  owner before commencement of work.
                </p>

                <p className="text-gray-800 leading-relaxed font-axiformaBook">
                  Services include:
                  <ul>
                    <li>✅ Visual Inspection</li>
                    <li>✅ Thread Inspection</li>
                    <li>
                      ✅ Non-Destructive Testing including:{" "}
                      <ul>
                        <li>- Ultrasonic Testing (UT)</li>
                        <li>- Electromagnetic Testing (EMI)</li>
                        <li>- Magnetic Particle Inspection (MPI)</li>
                        <li>- Liquid Penetrant Inspection (LPI)</li>
                      </ul>
                    </li>
                  </ul>
                </p>
              </div>

              {/* Right: Image */}
              <div className="flex justify-center">
                <img
                  src={tisImage}
                  alt="Tubular Inspection Services"
                  className="w-full max-w-md h-[500px] rounded shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        );
      case "cwd":
        return (
          <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left: Text */}
              <div>
                <h1 className="text-3xl md:text-4xl text-blue-900 mb-6 font-soraRegular">
                  Casing While Drilling (CwD)
                </h1>

                <h2 className="text-lg font-axiformaBook text-blue-900 mb-3">
                  Overview
                </h2>

                <p className="text-gray-800 mb-4 leading-relaxed font-axiformaBook">
                  Casing while drilling shortens well construction time while
                  reducing associated risks and other potential drilling
                  hazards. With our fleet of CRTi’s and strategic partnerships,
                  we are well positioned to deliver CwD services. CwD compresses
                  drilling, casing, cementing into a single run/trip.
                </p>

                <img src={cwdImageSub} alt="" />
              </div>

              {/* Right: Image */}
              <div className="flex justify-center">
                <img
                  src={cwdImage}
                  alt="Casing While Drilling"
                  className="w-full max-w-md h-[500px] rounded shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full p-4">
      {/* Scrollable tab bar */}
      <div className="overflow-x-auto">
        <div className="inline-flex items-center bg-gray-100 rounded-full p-1 w-max min-w-full">
          {tabs.map((tab, idx) => (
            <div key={tab.key} className="flex items-center">
              <button
                onClick={() => setActive(tab.key)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200
                focus:outline-none
                ${
                  active === tab.key
                    ? "bg-black text-white"
                    : "text-black hover:text-gray-600"
                }`}
              >
                {tab.label}
              </button>

              {/* divider */}
              {idx !== tabs.length - 1 && (
                <span className="mx-2 h-4 w-px bg-gray-400/60" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Content below */}
      <div className="mt-6">{renderContent()}</div>
    </div>
  );
}

export default Construction;
