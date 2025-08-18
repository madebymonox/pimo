import "./../../../App.css";

function WeAreGlobal() {
  return (
    <>
      <section className="relative w-full py-16 min-h-[400px]">
        {/* Content */}
        <div className="relative z-10 grid md:grid-cols-2 gap-8 text-center text-black py-5 px-6 md:px-32">
          <aside className="flex flex-col items-center text-center">
            <h2 className="text-4xl font-soraBold">Mission</h2>
            <p className="mt-4 max-w-2xl text-base font-axiformaRegular">
              Our global mission is to deploy technology that solves complex
              industry problems with simple and cost-effective solutions.
            </p>
          </aside>
          <aside className="flex flex-col items-center text-center">
            <h2 className="text-4xl font-soraBold">Vision</h2>
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
