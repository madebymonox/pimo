import DiversityCard from "./../Elements/DiversityCard";
import Slider1 from "./../../assets/images/diversity.jpeg";
import Slider2 from "./../../assets/images/sustainability.jpg";
import Slider3 from "./../../assets/images/innovation.jpg";

function ReportPolicies() {
  const cardsContent = [
    {
      backgroundImage: Slider1,
      defaultContent: {
        title: "Explore our Diversity",
        subtitle: "Equity & Inclusion",
        report: "annual report",
      },
      hoverContent: {
        header: "Bake",
        title: "Explore our Diversity",
        subtitle: "Equity & Inclusion",
        report: "annual report",
        description:
          "Learn more about our commitment to\nDEI in our 2023 annual report.",
        buttonText: "READ MORE",
      },
    },
    {
      backgroundImage: Slider2,
      defaultContent: {
        title: "Sustainability",
        subtitle: "Green Initiatives",
        report: "2025 report",
      },
      hoverContent: {
        header: "Eco",
        title: "Our Green Future",
        subtitle: "Sustainability Goals",
        report: "2025 environmental report",
        description: "Discover our roadmap for carbon neutrality by 2030.",
        buttonText: "VIEW REPORT",
      },
    },
    {
      backgroundImage: Slider3,
      defaultContent: {
        title: "Innovation",
        subtitle: "Tech Advancements",
        report: "2025 overview",
      },
      hoverContent: {
        header: "Build",
        title: "Next-Gen Solutions",
        subtitle: "Innovation Hub",
        report: "Technology roadmap",
        description: "Explore our cutting-edge technology developments.",
        buttonText: "LEARN MORE",
      },
    },
  ];

  return (
    <div className="p-8 flex gap-8">
      {cardsContent.map((card, index) => (
        <DiversityCard
          key={index}
          content={card}
          onButtonClick={() => window.open(`/report-${index + 1}.pdf`)}
        />
      ))}
    </div>
  );
}

export default ReportPolicies;
