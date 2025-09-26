import { useEffect, useState } from "react";

interface NewsItem {
  category: string;
  date: string;
  url: string;
  title: string;
}

function SubHero() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/linkedin-posts")
      .then((res) => res.json())
      .then((data: NewsItem[]) => {
        setNewsItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full bg-gray-100 py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
        {loading ? (
          <p className="text-gray-500 text-sm px-4 w-full text-center">Loading articles...</p>
        ) : newsItems.length === 0 ? (
          <p className="text-gray-500 text-sm px-4 w-full text-center">No Article to Show</p>
        ) : (
          newsItems.map((item, index) => (
            <div key={index} className="flex-1 text-left relative px-4">
              <p className="text-teal-500 font-medium text-sm font-axiformaBook">
                {item.category}
              </p>
              <p className="text-gray-500 text-xs font-axiformaBook">
                {item.date}
              </p>
              <h3 className="text-base font-semibold text-gray-900 hover:text-teal-600 mt-1 leading-tight font-soraMedium">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all"
                >
                  {item.title}
                </a>
              </h3>
              {index < newsItems.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-16 bg-gray-300" />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default SubHero;
