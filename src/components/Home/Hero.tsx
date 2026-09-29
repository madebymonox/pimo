import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import Slider1 from "./../../assets/images/img1.jpg";
import Slider2 from "./../../assets/images/img2.jpg";
import Slider3 from "./../../assets/images/img3.jpg";
import Slider4 from "./../../assets/images/img4.jpg";
import Slider5 from "./../../assets/images/img5.jpg";

const HeroSection = () => {
  const slides = [
    {
      image: Slider1,
      control: "object-center",
      title: "Powering the Future of Energy",
      cta: "WATCH NOW",
      cta_url: "",
      description:
        "Delivering innovative energy solutions with cutting-edge technology, expert engineering, and a commitment to excellence. At Pimo-Mafuta Energies, we drive efficiency, sustainability, and success in the oil and gas industry.",
    },
    {
      image: Slider2,
      control: "object-center",
      title: "Innovation. Reliability. Performance.",
      cta: "LEARN MORE",
      cta_url: "",
      description:
        "From well construction to asset integrity, we provide world-class energy services that maximize productivity and ensure operational excellence. Join us in shaping the future of energy.",
    },
    {
      image: Slider3,
      control: "object-center",
      title: "Engineering Energy for a Sustainable Tomorrow",
      cta: "EXPLORE",
      cta_url: "",
      description:
        "With expertise in energy services and infrastructure, we empower businesses with smart, safe, and sustainable solutions. Together, we build a more efficient and resilient energy industry.",
    },
    {
      image: Slider4,
      control: "object-center",
      title: "Driving Progress Through Oil & Gas Innovation",
      cta: "LEARN MORE",
      cta_url: "",
      description:
        "From exploration to production, we deliver reliable oil and gas solutions that power industries, create opportunities, and fuel economic growth across the globe.",
    },
    {
      image: Slider5,
      control: "object-center",
      title: "Trusted Partner in Energy Infrastructure",
      cta: "DISCOVER",
      cta_url: "",
      description:
        "We build and maintain world-class pipelines, refineries, and offshore facilities, ensuring safety, efficiency, and sustainability at every stage of the energy value chain.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let progressInterval;
    let slideTimeout;

    const updateProgress = () => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    };

    setProgress(0);
    progressInterval = setInterval(updateProgress, 50);

    slideTimeout = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
      clearInterval(progressInterval);
    }, 5000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(slideTimeout);
    };
  }, [activeIndex, slides.length]);

  return (
    <div className="relative w-full h-[70vh] lg:h-[75vh]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className={`w-full h-full object-cover ${slide.control}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30">
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 sm:px-8 lg:px-16 xl:px-24">
              <div className="max-w-4xl space-y-3 sm:space-y-4 m-auto text-center">
                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl leading-tight font-soraExtraBold"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-sm sm:text-base md:text-lg text-center max-w-2xl mx-auto leading-relaxed font-axiformaBook text-gray-200"
                >
                  {slide.description}
                </motion.p>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="inline-block"
                >
                  <Link
                    to={{ pathname: slide.cta_url }}
                    className="text-xs sm:text-sm font-axiformaBook flex items-center px-5 sm:px-6 py-2.5 sm:py-3 text-white hover:text-teal-400 transition-all border border-white/30 hover:border-teal-400 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
                  >
                    {slide.cta}
                    <motion.div
                      initial={{ x: 0 }}
                      whileHover={{ x: 8 }}
                      transition={{ type: "tween", duration: 0.2 }}
                      className="ml-2"
                    >
                      <svg
                        width="15"
                        height="15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.683 2.924a.5.5 0 010-.706l.137-.137a.5.5 0 01.707 0l4.992 5a.5.5 0 010 .707l-.187.187-4.676 4.75a.5.5 0 01-.71.004l-.138-.139a.5.5 0 010-.707L9.222 7.47 4.683 2.924z"
                          fill="#02A783"
                        ></path>
                      </svg>
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Progress Bar */}
      <div className="absolute bottom-5 left-0 right-0 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto flex gap-2.5 sm:gap-3 h-1">
          {slides.map((_, index) => (
            <div key={index} className="h-full relative flex-grow">
              <div className="absolute inset-0 bg-white/30" />
              <div
                className="absolute inset-0 bg-teal-400 rounded-full transition-all duration-300"
                style={{
                  width:
                    index === activeIndex
                      ? `${progress}%`
                      : index < activeIndex
                        ? "100%"
                        : "0%",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-5 right-4 sm:right-8 text-white/80 text-xs sm:text-sm font-axiformaBook">
        {String(activeIndex + 1).padStart(2, "0")} /{" "}
        {String(slides.length).padStart(2, "0")}
      </div>
    </div>
  );
};

export default HeroSection;
