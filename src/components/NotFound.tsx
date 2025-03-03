import { Link } from "react-router-dom";
import Head from "./Elements/Nav/Head";
import Header from "./Elements/Nav/Header";
import ErrorImage from "./../assets/images/404.svg";
import "./../App.css";

function NotFound() {
  return (
    <>
      <Head />
      <Header />
      <section className="relative top-40 flex justify-center">
        <div className="justify-center items-center m-auto mt-8 space-y-6">
          <img src={ErrorImage} alt="Error 404 Image" className="mb-4" />
          <h2 className="text-4xl font-bold text-red-500 font-axiformaSemiBold">
            404 - Page Not Found
          </h2>
          <p className="my-2 text-gray-600 font-soraMedium">
            Oops! The page you are looking for does not exist.
          </p>
          <div>
            <Link
              to="/"
              className="w-40 px-4 py-2 bg-red-600 text-white rounded-sm font-soraRegular text-xs"
            >
              Go back to website
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFound;
