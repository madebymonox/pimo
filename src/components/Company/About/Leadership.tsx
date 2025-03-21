import Avater from "./../../../assets/images/avater.jpeg";
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
                  src={Avater}
                  alt="Directory 1"
                />
                <hgroup>
                  <h4 className="font-soraRegular text-teal-500">
                    Pius Uwhubetiyi
                  </h4>
                  <h6 className="font-axiformaBook text-gray-500 text-xs">
                    Group Chairman
                  </h6>
                </hgroup>
              </span>
              <span className="text-center space-y-2">
                <img
                  className="border border-gray-300 rounded-full"
                  src={Avater}
                  alt="Directory 1"
                />
                <hgroup>
                  <h4 className="font-soraRegular text-teal-500">
                    Samantha Bailey
                  </h4>
                  <h6 className="font-axiformaBook text-gray-500 text-xs">
                    Director
                  </h6>
                </hgroup>
              </span>
              <span className="text-center space-y-2">
                <img
                  className="border border-gray-300 rounded-full"
                  src={Avater}
                  alt="Directory 1"
                />
                <hgroup>
                  <h4 className="font-soraRegular text-teal-500">
                    Victor Momoh
                  </h4>
                  <h6 className="font-axiformaBook text-gray-500 text-xs">
                    General Manager Operations
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
