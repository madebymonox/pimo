import "./../../../App.css";

function LeadershipHero() {
  return (
    <>
      <section className="relative bg-green-950 h-96 w-full py-16 leadershipbgImage">
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto justify-center items-center">
          <h1 className="text-white text-5xl font-soraBold">Leadership </h1>
        </div>
      </section>
    </>
  );
}

export default LeadershipHero;
