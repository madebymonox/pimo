import "./../../../App.css";

function Quote() {
  return (
    <>
      <section className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto items-center">
          <div className="md:w-full px-6 text-left space-y-4">
            <span className="flex flex-auto items-center gap-4">
              <span className="border-t-2 border-teal-500 w-16"></span>{" "}
              <span className="text-xs font-soraBold">ABOUT US</span>
            </span>
            <h2 className="text-4xl md:w-2/3 leading-snug text-gray-900 mb-4 font-soraSemiBold">
              For more than a century, our inventions have revolutionized
              energy. We harness the power of engineering, data, and science to
              redefine what's possible.
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default Quote;
