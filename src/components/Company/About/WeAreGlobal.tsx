import "./../../../App.css";

function WeAreGlobal() {
  return (
    <>
      <section className="relative w-full py-16 h-auto min-h-[500px] bgImage">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 items-center justify-center text-center text-white grid grid-cols-2 py-5 px-32">
          <aside className="text-left">
            <h2 className="text-4xl font-soraBold">Mission</h2>
            <p className="mt-4 max-w-2xl text-lg font-axiformaRegular">
              Delivering cutting-edge energy solutions worldwide with
              innovation, expertise, and sustainability at our core.
            </p>
          </aside>
          <aside className="text-left">
            <h2 className="text-4xl  font-soraBold">Vision</h2>
            <p className="mt-4 max-w-2xl text-lg font-axiformaRegular">
              Delivering cutting-edge energy solutions worldwide with
              innovation, expertise, and sustainability at our core.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}

export default WeAreGlobal;
