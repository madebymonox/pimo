import Head from "./../Elements/Nav/Head";
import Header from "./../Elements/Nav/Header";
import HeroSection from "./Hero";
import SubHero from "./SubHero";
import WhoWeAre from "./WhoWeAre";
import WhatWeDo from "./WhatWeDo";
import Report from "./Report";
import Footer from "./../Elements/Nav/Footer";
import "./../../App.css";

function Home() {
  return (
    <>
      <Head />
      <Header />
      <HeroSection />
      <SubHero />
      <WhoWeAre />
      <WhatWeDo />
      <Report />
      <Footer />
    </>
  );
}

export default Home;
