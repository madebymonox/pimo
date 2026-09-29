import Head from "../../../Elements/Nav/Head";
import Header from "../../../Elements/Nav/Header";
import "./../../../../App.css";

function About() {
  return (
    <>
      <Head />

      <Header />

      <section className="bg-white max-[]:w-7xl mx-auto px-4 py-8 md:px-40">
        <img
          src="/src/assets/images/clients/clients-logos.png"
          alt="About Pimo"
          className="about-image"
        />
      </section>
    </>
  );
}

export default About;
