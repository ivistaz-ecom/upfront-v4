"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaArrowCircleRight } from "react-icons/fa";

const SearchResultsPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query"); // Get the search query from the URL
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const fetchResults = async () => {
      if (!query) return;

      setLoading(true);
      try {
        const response = await fetch(
          `https://beta.upfront.global/wp-json/wp/v2/posts?search=${query}&categories=3,2,5&_embed`
        );
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
      setLoading(false);
    };

    fetchResults();
  }, [query]);
  const handleSearch = () => {
    if (!searchQuery.trim()) return; // Prevent empty searches
    router.push(`/search-results?query=${encodeURIComponent(searchQuery)}`);
  };
  useEffect(() => {
    if (query) {
      setSearchQuery(query);
    }
  }, [query]);

  return (
    <>
      <div className="container mx-auto p-6 text-center border bg-[#f4f4f4e7] my-36 shadow-lg mb-32">
        <h1 className="mb-6 text-2xl font-bold">
          Search Results For:{" "}
          {searchQuery ? encodeURIComponent(searchQuery) : "No query provided"}
        </h1>

        {loading ? (
          <div className="animate-pulse">
            <div className="mb-2 h-6 rounded bg-gray-300"></div>
            <div className="mb-2 h-6 rounded bg-gray-300"></div>
            <div className="mb-2 h-6 rounded bg-gray-300"></div>
            <div className="mb-2 h-6 rounded bg-gray-300"></div>
            <div className="mb-2 h-6 rounded bg-gray-300"></div>
          </div>
        ) : results.length > 0 ? (
          <ul>
            {results.map((result, index) => {
              let dynamicUrl = "";

              if (result.categories.includes(5)) {
                dynamicUrl = result.acf?.news_and_publications_url || "#";
              } else if (result.categories.includes(3)) {
                dynamicUrl = `/blogs/${result.slug}`;
              } else if (result.categories.includes(2)) {
                dynamicUrl = `/impact-stories/${result.slug}`;
              }

              return (
                <li key={index} className="mb-4">
                  <Link
                    href={dynamicUrl}
                    target={result.categories.includes(5) ? "_blank" : "_self"}
                    className="text-black hover:underline hover:text-red-600 text-start"
                  >
                    <span className="flex lg:space-x-10 items-center">
                      <Image
                        width={200}
                        height={200}
                        src={
                          result.acf?.additional_thumbnail_image?.url ||
                          "/homePage/upfrontLogo.svg"
                        }
                        alt={`${result.title?.rendered}` || "Thumbnail"}
                        className="rounded-md justify-center items-center flex w-32 border shadow-lg"
                      />
                      <span
                        className="px-2"
                        dangerouslySetInnerHTML={{
                          __html:
                            result.title?.rendered || "No Title Available",
                        }}
                      ></span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>
            No results found.
            <p className="flex justify-center gap-1 py-3">
              Go Back To{" "}
              <Link
                href="/"
                className="text-red-600 flex justify-center items-center gap-2 text-xl"
              >
                HomePage
                <span>
                  <FaArrowCircleRight />
                </span>
              </Link>
            </p>
          </p>
        )}
      </div>
    </>
  );
};

// Wrap SearchResultsPage in Suspense
const SearchResultsPageWrapper = () => (
  <Suspense fallback={<div>Loading search results...</div>}>
    <SearchResultsPage />
  </Suspense>
);

export default SearchResultsPageWrapper;
