import { Link } from "react-router";

const newsItems = [
  {
    category: "Press Release",
    date: "February 24, 2025",
    url: "",
    title: "Pimo Mafuta Appoints Ahmed Moghal Chief Financial Officer",
  },
  {
    category: "Energy Forward",
    date: "February 18, 2025",
    url: "",
    title:
      "Key Takeaways from Annual Meeting 2025: how to make progress at scale",
  },
  {
    category: "News",
    date: "February 4, 2025",
    url: "",
    title:
      "Pimo Mafuta Unveils Enhancements to Cordant™ Asset Performance Management",
  },
];

function SubHero() {
  return (
    <div className="w-full bg-gray-100 py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
        {newsItems.map((item, index) => (
          <div key={index} className="flex-1 text-left relative px-4">
            <p className="text-teal-500 font-medium text-sm font-axiformaBook">
              {item.category}
            </p>
            <p className="text-gray-500 text-xs font-axiformaBook">
              {item.date}
            </p>
            <h3 className="text-base font-semibold text-gray-900 hover:text-teal-600 mt-1 leading-tight font-soraMedium">
              <Link to={{ pathname: item.url }} className="transition-all">
                {item.title}
              </Link>
            </h3>
            {index < newsItems.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-16 bg-gray-300" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubHero;
