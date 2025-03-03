import "./../../../App.css";

function Head() {
  const UpArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  );

  return (
    <>
      <section className="flex w-full h-10 bg-gray-800 items-center p-2 font-soraRegular px-40">
        <ul className="flex flex-auto gap-4 text-white text-xs justify-end">
          <li className="hover:text-teal-500 cursor-pointer">Contact Us</li>
          <li className="hover:text-teal-500 cursor-pointer flex gap-2">
            Careers {UpArrow}
          </li>
          <li className="hover:text-teal-500 cursor-pointer">Sustainability</li>
          <li className="hover:text-teal-500 cursor-pointer flex gap-2">
            Investors {UpArrow}
          </li>
          <li className="hover:text-teal-500 cursor-pointer">PIMO $10.00</li>
        </ul>
      </section>
    </>
  );
}

export default Head;
