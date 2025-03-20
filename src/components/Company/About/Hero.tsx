import "./../../../App.css";

function Hero() {
  return (
    <>
      <section className="bg-green-950 h-96 w-full py-16">
        <div className="max-w-6xl mx-auto items-center">
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
