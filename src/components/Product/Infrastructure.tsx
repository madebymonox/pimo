import { useState } from "react";

const tabs = [
  { key: "afm", label: "AFM" },
  { key: "him", label: "HIM" },
  { key: "pgm", label: "PGM" },
  { key: "epc", label: "EPC" },
  { key: "osm", label: "OSM" },
];

function InfrastructureTabSelector() {
  const [active, setActive] = useState("afm");

  // Swap whatever you like here – JSX, whole components, etc.
  const renderContent = () => {
    switch (active) {
      case "afm":
        return (
          <div className="bg-white flex flex-col items-center justify-center px-6 py-12">
            <div className="max-w-7xl w-full grid grid-cols-1 gap-12 items-start">
              {/* Left: Text */}
              <div>
                <h1 className="text-3xl md:text-4xl text-blue-900 mb-6 font-soraRegular">
                  Asset and Facility Management (AFM)
                </h1>

                <h2 className="text-lg font-axiformaBook text-blue-900 mb-3">
                  Overview
                </h2>

                <p className="text-gray-800 mb-4 leading-relaxed font-axiformaBook">
                  We specialize in ensuring the reliability, safety, and
                  longevity of critical infrastructure asset such as facility
                  management, pipelines, power plants, and offshore structures.
                </p>

                <p className="text-gray-800 leading-relaxed font-axiformaBook">
                  We oversees and maintains the physical environment within the
                  workplace and residential area. This aspect focuses on space
                  utilization and processes for facility upkeep, as well as
                  ensuring that structures meet all building codes and safety
                  standards. Internal systems, such as lighting, Gas Turbine
                  operations and maintenance, HV/LV stepdown transformers, Ring
                  main units (RMUs) repairs services, High and low voltage
                  switchgears,
                </p>
              </div>
            </div>
          </div>
        );
      case "him":
        return (
          <div className="bg-white flex flex-col items-center justify-center px-6 py-12">
            <div className="max-w-7xl w-full grid grid-cols-1 gap-12 items-start">
              {/* Left: Text */}
              <div>
                <h1 className="text-3xl md:text-4xl text-blue-900 mb-6 font-soraRegular">
                  HVAC Installation and Maintenance (HIM)
                </h1>

                <h2 className="text-lg font-axiformaBook text-blue-900 mb-3">
                  Overview
                </h2>

                <p className="text-gray-800 mb-4 leading-relaxed font-axiformaBook">
                  The Heating, Ventilation, and Air Conditioning (HVAC) systems
                  will be operated and maintained in line with OEM guidelines
                  and program to ensure that appropriate temperature and air
                  quality is maintained.
                </p>

                <p className="text-gray-800 leading-relaxed font-axiformaBook">
                  These services include:
                  <ul>
                    <li>
                      ✅ Replacement of failed gate valves on chilled
                      waterlines.
                    </li>
                    <li>
                      ✅ Carryout duct fabrication, installation, modification
                      and maintenance.
                    </li>
                    <li>
                      ✅ Provide engineering services such as heat load
                      calculation, system selection, design/review of HVAC
                      system drawings with necessary approvals.
                    </li>
                    <li>
                      ✅ De-scaling of chilled water line/chemical cleaning of
                      evaporator coils.
                    </li>
                    <li>
                      ✅ General/Complete maintenance on both
                      Industrial/Domestic HVAC System.
                    </li>
                  </ul>
                </p>
              </div>

              {/* Right: Image */}
              {/* <div className="flex justify-center">
                <img
                  src={trsImage}
                  alt="HVAC Installation and Maintenance (HIM)"
                  className="w-full max-w-md h-[500px] rounded shadow-lg object-cover"
                />
              </div> */}
            </div>
          </div>
        );
      case "pgm":
        return (
          <div className="bg-white flex flex-col items-center justify-center px-6 py-12">
            <div className="max-w-7xl w-full grid grid-cols-1 gap-12 items-start">
              {/* Left: Text */}
              <div>
                <h1 className="text-3xl md:text-4xl text-blue-900 mb-6 font-soraRegular">
                  Power Generation & Maintenance (PGM)
                </h1>

                <h2 className="text-lg font-axiformaBook text-blue-900 mb-3">
                  Overview
                </h2>

                <p className="text-gray-800 mb-4 leading-relaxed font-axiformaBook">
                  We specialize in technologies of private power generation
                  facilities and power generation control systems. We dispatch
                  our engineers to perform periodic inspections, parts
                  replacement, repairs, modifications, and improvements
                  according to manufacturers’ standards. As a group of
                  Generation and maintenance professionals, we also offer
                  consulting proposals adapted to the customer’s facility/
                  environment. We provide 24-hour telephone support to give
                  customers confidence through corrective maintenance.
                </p>
              </div>

              {/* Right: Image */}
              {/* <div className="flex justify-center">
                <img
                  src={trsImage}
                  alt="Power Generation & Maintenance (PGM)"
                  className="w-full max-w-md h-[500px] rounded shadow-lg object-cover"
                />
              </div> */}
            </div>
          </div>
        );
      case "epc":
        return (
          <div className="bg-white flex flex-col items-center justify-center px-6 py-12">
            <div className="max-w-7xl w-full grid grid-cols-1 gap-12 items-start">
              {/* Left: Text */}
              <div>
                <h1 className="text-3xl md:text-4xl text-blue-900 mb-6 font-soraRegular">
                  Engineering. Procurement and Construction (EPC)
                </h1>

                <h2 className="text-lg font-axiformaBook text-blue-900 mb-3">
                  Overview
                </h2>

                <p className="text-gray-800 mb-4 leading-relaxed font-axiformaBook">
                  We provide procurement & logistic support services to our
                  clients as may be required on their projects. This includes
                  but not limited to providing pricing information, sourcing and
                  expediting of equipment or material with the support of our
                  international suppliers and partners, review of vendor drawing
                  and documentation to ensure compliance to the design/project
                  objectives, and evaluation of bids.
                </p>

                <p className="text-gray-800 mb-4 leading-relaxed font-axiformaBook">
                  In addition to the typical engineering services PIMO, in
                  collaboration with construction companies, is disposed to
                  execute selected projects on Engineering Procurement
                  Construction Management (EPCM) or in special cases, on
                  Engineering Procurement Construction (EPC).
                </p>
              </div>

              {/* Right: Image */}
              {/* <div className="flex justify-center">
                <img
                  src={trsImage}
                  alt="Engineering. Procurement and Construction (EPC)"
                  className="w-full max-w-md h-[500px] rounded shadow-lg object-cover"
                />
              </div> */}
            </div>
          </div>
        );
      case "osm":
        return (
          <div className="bg-white flex flex-col items-center justify-center px-6 py-12">
            <div className="max-w-7xl w-full grid grid-cols-1 gap-12 items-start">
              {/* Left: Text */}
              <div>
                <h1 className="text-3xl md:text-4xl text-blue-900 mb-6 font-soraRegular">
                  Offshore Support / Maintenance (OSM)
                </h1>

                <h2 className="text-lg font-axiformaBook text-blue-900 mb-3">
                  Overview
                </h2>

                <p className="text-gray-800 mb-4 leading-relaxed font-axiformaBook">
                  we provide a broad range of highly specialised services
                  associated with the execution of offshore support services.
                </p>

                <p className="text-gray-800 mb-4 leading-relaxed font-axiformaBook">
                  In addition, we have dedicated teams of experts to handle the
                  preparation of detailed procedures and execution plans
                  associated with ENGINEERING & FACILITY MAINTENANCE SERVICES.
                </p>

                <p className="text-gray-800 leading-relaxed font-axiformaBook">
                  Our services includes:
                  <ul>
                    <li>✅ Onshore/Offshore fabrication</li>
                    <li>✅ NDT Services</li>
                    <li>
                      ✅ Calibration & recertification of instruments test
                      equipment
                    </li>
                    <li>
                      ✅ Provision for temporary refuge testing & maintenance
                    </li>
                    <li>✅ Tank and vessel cleaning</li>
                  </ul>
                </p>
              </div>

              {/* Right: Image */}
              {/* <div className="flex justify-center">
                <img
                  src={trsImage}
                  alt="Offshore Support/ Maintenance"
                  className="w-full max-w-md h-[500px] rounded shadow-lg object-cover"
                />
              </div> */}
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
        <div className="inline-flex items-center justify-center bg-gray-100 rounded-full p-1 w-max min-w-full">
          {tabs.map((tab, idx) => (
            <div key={tab.key} className="flex items-center">
              <button
                onClick={() => setActive(tab.key)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap hover:bg-white hover:text-black transition-colors duration-200
                focus:outline-none
                ${
                  active === tab.key
                    ? "bg-blue-900 text-white"
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

export default InfrastructureTabSelector;
