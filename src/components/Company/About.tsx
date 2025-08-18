import Head from "../Elements/Nav/Head";
import Header from "../Elements/Nav/Header";
import Hero from "./About/Hero";
// import Quote from "./About/Quote";
import WeAreGlobal from "./About/WeAreGlobal";
// import WhyWorkWithUs from "./About/WhyWorkWithUs";
import "./../../App.css";

function About() {
  return (
    <>
      <Head />
      <Header />
      <Hero />
      {/* <Quote /> */}
      <WeAreGlobal />
      {/* <WhyWorkWithUs /> */}
    </>
  );
}

export default About;
