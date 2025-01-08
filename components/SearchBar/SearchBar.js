"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setError("");
      return;
    }

    const fetchResults = async () => {
      setLoading(true);
      setError("");
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
    if (!searchQuery.trim()) return;
    setSearchResults([]);
    setSearchQuery("");
    setIsFocused(false);
    router.push(`/search-results?query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="relative flex flex-col sm:flex-row items-center gap-4 p-2 sm:p-4 w-full">
      <div
        className={`relative transition-all ${
          isFocused ? "w-full sm:w-72 bg-white z-20" : "w-full sm:w-32 bg-gray-100"
        } flex items-center rounded-full border ${
          isFocused ? "border-red-500 shadow-lg" : "border-gray-300"
        }`}
        onClick={() => setIsFocused(true)}
      >
        <input
          type="text"
          placeholder="Search..."
          className="w-full py-2 px-4 text-gray-700 outline-none rounded-full transition-all duration-500 text-sm sm:text-base"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />
        <div
          className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
          onClick={handleSearch}
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
      {searchQuery && !loading && isFocused && (
        <div className="absolute bg-white lg:left-0 w-80 -right-12 sm:right-0 lg:w-96 top-16 sm:top-20 border border-gray-300 rounded-md mt-1 shadow-lg max-h-60 overflow-y-auto">
          {error ? (
            <p className="p-2 text-red-500">{error}</p>
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
                  <li
                    key={index}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <a
                      href={dynamicUrl}
                      target={result.categories.includes(5) ? "_blank" : "_self"}
                      className="text-black hover:text-red-600 flex items-center gap-2"
                    >
                      <Image
                        width={300}
                        height={300}
                        src={
                          result.acf?.additional_thumbnail_image?.url ||
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
