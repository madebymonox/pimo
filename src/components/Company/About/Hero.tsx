import "./../../../App.css";

function Hero() {
  return (
    <>
      <section className="relative bg-green-950 h-80 w-full py-16 bgImage">
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto justify-center items-center">
          <h1 className="text-white text-5xl mb-4 font-soraBold">About us</h1>
          <p className="text-white font-axiformaBook md:w-2/3">
            We are an energy technology company. We understand the demands on
            energy. What it takes to produce it. How we make use of it. Why it’s
            essential to reduce its impact. Where we can change to achieve a
            sustainable balance.
          </p>
        </div>
      </section>
    </>
  );
}

export default Hero;
