import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/Company/About";
import Careers from "./components/Company/Careers";
import Products from "./components/Home/Home";
import Solutions from "./components/Product/Solutions";
import NotFound from "./components/NotFound";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/product" element={<Products />} />
        <Route path="/solution" element={<Solutions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
