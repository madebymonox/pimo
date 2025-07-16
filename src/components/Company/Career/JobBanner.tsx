const JobBanner = () => {
  return (
    <div className="relative w-full h-64 bg-gray-200 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url(https://via.placeholder.com/1200x300)" }}
      ></div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl leading-tight font-soraExtraBold text-green-500">
          Your Baker Hughes Journey Begins Here
        </h1>
        <div className="mt-4 flex items-center justify-center">
          <input
            type="text"
            placeholder="Search for Job title or location"
            className="py-2 px-4 rounded-full border-none focus:outline-none w-96 font-axiformaBook"
          />
          <button className="bg-teal-500 text-white py-2 rounded-full ml-2 w-24 text-sm font-axiformaBook">
            Find Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobBanner;
