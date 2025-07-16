import { useLocation } from "react-router-dom";
import Head from "../Elements/Nav/Head";
import Header from "../Elements/Nav/Header";
import Footer from "./../Elements/Nav/Footer";
import ConstructionTabSelector from "./Construction";
import InfrastructureTabSelector from "./Infrastructure";

import "./../../App.css";

function Products() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type");

  const shouldShowTabSelector =
    type === "infrastructure" || type === "construction";

  return (
    <>
      <Head />
      <Header />
      {shouldShowTabSelector ? (
        type === "construction" ? (
          <ConstructionTabSelector />
        ) : (
          <InfrastructureTabSelector />
        )
      ) : (
        <div>No matching tab found.</div>
      )}
      <Footer />
    </>
  );
}

export default Products;
