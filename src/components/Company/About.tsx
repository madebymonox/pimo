import Head from "../Elements/Nav/Head";
import Header from "../Elements/Nav/Header";
import Leadership from "./About/Leadership";
import Hero from "./About/Hero";
import Quote from "./About/Quote";
import WeAreGlobal from "./About/WeAreGlobal";
import "./../../App.css";

function About() {
  return (
    <>
      <Head />
      <Header />
      <Hero />
      <Quote />
      <WeAreGlobal />
      <Leadership />
    </>
  );
}

export default About;
