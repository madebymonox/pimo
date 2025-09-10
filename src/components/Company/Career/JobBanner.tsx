const JobBanner = () => {
  return (
    <div className="relative w-full h-64 bg-gray-200 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url(https://via.placeholder.com/1200x300)" }}
      ></div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl leading-tight font-soraExtraBold text-green-500">
          Your Future in the Energy Sector Starts here <br />
          Join Pimo-Mafuta and help shape the Energy of Tomorrow
        </h1>
      </div>
    </div>
  );
};

export default JobBanner;
