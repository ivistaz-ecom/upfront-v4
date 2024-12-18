"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State to track search input
  const [searchResults, setSearchResults] = useState([]); // State to store search results
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // State to handle errors
  const router = useRouter();

  // Fetch results as the user types
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]); // Clear results when input is empty
      setError(""); // Clear error message when input is empty
      return;
    }

    const fetchResults = async () => {
      setLoading(true);
      setError(""); // Reset error on new search attempt
      try {
        const response = await fetch(
          `https://beta.upfront.global/wp-json/wp/v2/posts?search=${searchQuery}&categories=3,2,5&_embed`
        );
        
        if (!response.ok) {
          throw new Error("Failed to fetch search results");
        }

        const data = await response.json();

        if (data.length === 0) {
          setError("No results found for your query.");
        } else {
          setSearchResults(data);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
        setError("There was an error fetching the results.");
      }
      setLoading(false);
    };

    fetchResults();
  }, [searchQuery]);

  const handleSearch = () => {
    if (!searchQuery.trim()) return; // Prevent empty searches
    router.push(`/search-results?query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="relative flex items-center gap-4 p-2 sm:p-4 pl-52">
      <div
        className={`absolute right-0 transition-all ${
          isFocused ? "w-full sm:w-72 bg-white z-20" : "w-40 sm:w-32 bg-gray-100"
        } flex items-center rounded-full border ${
          isFocused ? "border-red-500 shadow-lg" : "border-gray-300"
        }`}
      >
        <input
          type="text"
          placeholder={isFocused ? "For example, upfront ↵" : "Search.."}
          className="w-full py-2 pl-4 pr-10 text-gray-700 outline-none rounded-full transition-all duration-500 text-sm sm:text-base"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch(); // Trigger search on Enter key press
          }}
          onMouseOver={() => setIsFocused(true)}
          onMouseLeave={() => setIsFocused(false)}
        />
        <div
          className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
          onClick={handleSearch}
          onMouseOver={() => setIsFocused(true)}
          onMouseLeave={() => setIsFocused(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-5 h-5 transition-all ${
              isFocused ? "text-red-500" : "text-gray-400"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Dropdown for search results */}
      {searchQuery && !loading && (
        <div className="absolute bg-white right-0 lg:w-96 w-72 top-16 border border-gray-300 rounded-md mt-1 shadow-lg max-h-60 overflow-y-auto">
          {error ? (
            <p className="p-2 text-red-500">{error}</p> // Show error message
          ) : searchResults.length > 0 ? (
            <ul>
              {searchResults.map((result, index) => {
                let dynamicUrl = "";

                if (result.categories.includes(5)) {
                  dynamicUrl = result.acf?.news_and_publications_url || "#";
                } else if (result.categories.includes(3)) {
                  dynamicUrl = `/blogs/${result.slug}`;
                } else if (result.categories.includes(2)) {
                  dynamicUrl = `/impact-stories/${result.slug}`;
                }

                return (
                  <li key={index} className="p-2 hover:bg-gray-100 cursor-pointer">
                    <a
                      href={dynamicUrl}
                      target={result.categories.includes(5) ? "_blank" : "_self"}
                      className="text-black hover:text-red-600"
                    >
                      <span className="flex items-center gap-2">
                        <Image
                        width={300}
                        height={300}
                          src={
                            result.acf?.thumbnail_image?.url ||
                            "/homePage/upfrontLogo.svg"
                          }
                          alt={result.title?.rendered || "Thumbnail"}
                          className="w-8 h-8 object-cover rounded-md"
                        />
                        <span
                          dangerouslySetInnerHTML={{
                            __html: result.title?.rendered || "No Title Available",
                          }}
                        ></span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="p-2 text-gray-500">No results found.</p>
          )}
        </div>
      )}
    </div>
  );
}
