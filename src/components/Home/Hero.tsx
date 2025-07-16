import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import Slider1 from "./../../assets/images/img1.jpg";
import Slider2 from "./../../assets/images/img2.jpg";
import Slider3 from "./../../assets/images/img3.jpg";

const HeroSection = () => {
  const slides = [
    {
      image: Slider1,
      title: "Powering the Future of Energy",
      cta: "WATCH NOW",
      cta_url: "",
      description:
        "Delivering innovative energy solutions with cutting-edge technology, expert engineering, and a commitment to excellence. At Pimo-Mafuta Energies, we drive efficiency, sustainability, and success in the oil and gas industry.",
    },
    {
      image: Slider2,
      title: "Innovation. Reliability. Performance.",
      cta: "LEARN MORE",
      cta_url: "",
      description:
        "From well construction to asset integrity, we provide world-class energy services that maximize productivity and ensure operational excellence. Join us in shaping the future of energy.",
    },
    {
      image: Slider3,
      title: "Engineering Energy for a Sustainable Tomorrow",
      cta: "EXPLORE",
      cta_url: "",
      description:
        "With expertise in energy services and infrastructure, we empower businesses with smart, safe, and sustainable solutions. Together, we build a more efficient and resilient energy industry.",
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
    progressInterval = setInterval(updateProgress, 50); // 50ms * 100 = 5000ms

    slideTimeout = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
      clearInterval(progressInterval);
    }, 5000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(slideTimeout);
    };
  }, [activeIndex]);

  return (
    <div className="relative w-full h-[50vh]">
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
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30">
            <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-4 lg:px-8 xl:px-16">
              <div className="max-w-4xl space-y-4 m-auto text-center group">
                <h1 className="text-4xl md:text-5xl lg:text-5xl leading-tight font-soraExtraBold">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-base max-w-2xl leading-relaxed font-axiformaBook">
                  {slide.description}
                </p>
                {/* CTA Button Fix */}
                <div className="inline-block">
                  <Link
                    to={{ pathname: slide.cta_url }}
                    className="text-xs font-axiformaBook flex items-center px-4 py-2 text-white hover:text-teal-400 transition-all"
                  >
                    {slide.cta}
                    <motion.div
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }} // Moves right on hover
                      transition={{ type: "tween", duration: 0.2 }} // Smooth transition
                      className="ml-1"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Progress Bar */}
      <div className="absolute bottom-4 left-0 right-0 px-4">
        <div className="max-w-4xl mx-auto flex gap-4 h-1">
          {slides.map((_, index) => (
            <div key={index} className="h-full relative flex-grow">
              <div className="absolute inset-0 bg-gray-400" />
              <div
                className="absolute inset-0 bg-teal-400 rounded-full transition-all"
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
    </div>
  );
};

export default HeroSection;
