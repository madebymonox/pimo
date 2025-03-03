import { useState } from "react";

interface ContentType {
  backgroundImage: string;
  defaultContent: {
    title: string;
    subtitle: string;
    report: string;
  };
  hoverContent: {
    title: string;
    subtitle: string;
    report: string;
    description: string;
    buttonText: string;
  };
  className?: string;
  onButtonClick?: () => void;
}

function DiversityCard({
  content,
  className = "",
  onButtonClick,
}: {
  content: ContentType;
  className?: string;
  onButtonClick?: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative max-w-md p-8 overflow-hidden cursor-pointer h-[500px] w-80 group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={content.backgroundImage}
          alt=""
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/20 transition-opacity duration-300 group-hover:opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-4 text-white">
        <div className="border-t-2 border-teal-500 w-10 mb-4"></div>
        {!isHovered ? (
          <>
            <h3 className="text-xl font-soraBold leading-tight drop-shadow-md">
              {content.defaultContent.title}
            </h3>
          </>
        ) : (
          <>
            <div className="space-y-6">
              <h3 className="text-xl font-soraBold leading-tight drop-shadow-md">
                {content.hoverContent.title}
              </h3>
              <p className="text-3xl font-soraBold text-green-400 drop-shadow-md">
                {content.hoverContent.subtitle}
              </p>
              <p className="text-xl font-axiformaBook drop-shadow-md">
                {content.hoverContent.report}
              </p>
              <p className="text-base font-axiformaBook pt-4 drop-shadow-md">
                {content.hoverContent.description}
              </p>
              <button
                onClick={onButtonClick}
                className="mt-6 px-6 py-2 bg-green-500 text-xs font-soraMedium text-white rounded-sm hover:bg-green-600 transition-colors duration-200 transform hover:scale-105 shadow-lg"
              >
                {content.hoverContent.buttonText}
              </button>
            </div>
          </>
        )}
      </div>

      {/* Border Overlay */}
      <div
        className={`absolute inset-0 border-2 border-white/20 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

export default DiversityCard;
