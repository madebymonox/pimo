import "./../../../App.css";
import { Link } from "react-router-dom";

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
      <section className="flex w-full h-10 bg-gray-800 items-center p-2 font-soraRegular px-4 md:px-40">
        <ul className="flex flex-auto gap-4 text-white text-xs justify-end">
          {/* Shown on all devices */}
          <li className="hover:text-teal-500 cursor-pointer">Contact Us</li>

          {/* Hidden on mobile, shown on medium (md) and larger screens */}
          <li className="hidden md:flex hover:text-teal-500 cursor-pointer gap-2">
            <Link target="_blank" to={"/careers"} className="flex flex-auto gap-2">
              Careers {UpArrow}
            </Link>
          </li>
          <li className="hidden md:block hover:text-teal-500 cursor-pointer">
            <Link
              target="_blank"
              to={"https://www.linkedin.com/company/pimo-mafuta-energies"}
            >
              LinkedIn
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Head;
