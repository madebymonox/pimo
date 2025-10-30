import Head from "./../Elements/Nav/Head";
import Header from "./../Elements/Nav/Header";
import HeroSection from "./Hero";
import WhoWeAre from "./WhoWeAre";
import WhatWeDo from "./WhatWeDo";
// import Report from "./Report";
import "./../../App.css";

function Home() {
  return (
    <>
      <Head />
      <Header />
      <HeroSection />
      <WhoWeAre />
      <WhatWeDo />
      {/* <Report /> */}
    </>
  );
}

export default Home;
