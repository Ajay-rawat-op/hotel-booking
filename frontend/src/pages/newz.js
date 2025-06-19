import { useEffect, useState, useCallback } from "react";
import axios from "axios";

const API_KEY = "190e496594c446d992d585431834ad4d";

const NewsPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("general");
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // ✅ Debounce input
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(searchTerm), 500);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // ✅ Stable fetch function
  const fetchNews = useCallback(async () => {
    setLoading(true);
    try {
      const url = searchTerm
        ? `https://newsapi.org/v2/everything?q=${debouncedSearch}&sortBy=publishedAt&language=en&pageSize=12&apiKey=${API_KEY}`
        : `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=12&apiKey=${API_KEY}`;
      const response = await axios.get(url);
      setArticles(response.data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
    setLoading(false);
  }, [category, debouncedSearch, searchTerm]);

  // ✅ useEffect uses stable fetchNews
  useEffect(() => {
    fetchNews();
    const interval = setInterval(fetchNews, 60000);
    return () => clearInterval(interval);
  }, [fetchNews]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-700 via-red-600 to-red-800 text-white py-3 shadow-lg border-b-4 border-yellow-400">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-wide text-yellow-300">CURRENT NEWS</h1>
            <span className="text-xs text-white bg-red-900 px-2 py-1 rounded-md">Live Updates</span>
          </div>
          <p className="text-lg sm:text-xl xl:text-2xl font-semibold text-yellow-100 text-center sm:text-right">
            Stay Alert: Breaking Stories from Around the Globe!
          </p>
        </div>
      </header>

      {/* Search & Category Filter */}
      <div className="px-4 sm:px-6 py-4 bg-white shadow flex flex-col lg:flex-row gap-4 justify-between items-center">
        <input
          type="text"
          placeholder="Search for news..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full lg:w-1/2 px-4 py-2 border rounded-lg shadow text-gray-700 bg-gray-50"
        />
        <label className="text-gray-700 font-medium flex items-center">
          <span className="mr-2">Choose Category:</span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            disabled={searchTerm.length > 0}
            className="px-4 py-2 rounded-lg border text-gray-700 bg-gray-50 shadow"
          >
            <option value="general">General</option>
            <option value="business">Business</option>
            <option value="entertainment">Entertainment</option>
            <option value="health">Health</option>
            <option value="science">Science</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
          </select>
        </label>
      </div>

      {/* News Cards */}
      <main className="flex-1 px-4 sm:px-6 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 bg-gray-100">
        {loading ? (
          <p className="text-center col-span-3 text-lg font-semibold">Loading news...</p>
        ) : articles.length === 0 ? (
          <p className="text-center col-span-3 text-lg font-semibold text-red-600">No news found.</p>
        ) : (
          articles.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-xl border-t-4 border-red-600 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={item.urlToImage || "https://via.placeholder.com/400x200.png?text=No+Image"}
                  alt={item.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow">
                  🔥 Trending
                </span>
              </div>

              <div className="p-5 flex flex-col h-[250px] justify-between">
                <div>
                  <h2 className="text-xl font-bold text-red-700 mb-2 group-hover:text-black transition-colors duration-200">
                    {item.title}
                  </h2>
                  <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                    {item.description || "No description available."}
                  </p>
                </div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-5 py-2 rounded-full shadow transition duration-300 text-center"
                >
                  Read Full Article
                </a>
              </div>
            </div>
          ))
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
        &copy; {new Date().getFullYear()} News Central. All rights reserved.
      </footer>
    </div>
  );
};

export default NewsPage;
