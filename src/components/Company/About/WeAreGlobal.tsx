import "./../../../App.css";

function WeAreGlobal() {
  return (
    <>
      <section className="relative w-full py-16 h-auto min-h-[400px] bgImage">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 items-center justify-center text-center text-white space-y-6 py-5 px-32">
          <aside className="text-left">
            <h2 className="text-4xl font-soraBold">Mission</h2>
            <p className="mt-4 max-w-2xl text-base font-axiformaRegular">
              Our global mission is to deploy technology that solves complex
              industry problems with simple and cost-effective solutions.
            </p>
          </aside>
          <aside className="text-left">
            <h2 className="text-4xl  font-soraBold">Vision</h2>
            <p className="mt-4 max-w-2xl text-base font-axiformaRegular">
              To be the foremost service provider of choice in the oil, gas and
              energy sector. Delivering on our promises, providing exceptional
              solutions, pioneering new opportunities and adding value to our
              sector and communities.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}

export default WeAreGlobal;
