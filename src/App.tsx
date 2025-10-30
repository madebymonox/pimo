import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/Company/About";
import Leadership from "./components/Company/About/Leadership/Leadership";
import Careers from "./components/Company/Careers";
import Products from "./components/Product/Products";
import Solutions from "./components/Product/Solutions";
import Contact from "./components/Company/Contact";
import NotFound from "./components/NotFound";
import Footer from "./components/Elements/Nav/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/leadership" element={<Leadership />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/product" element={<Products />} />
        <Route path="/solution" element={<Solutions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
