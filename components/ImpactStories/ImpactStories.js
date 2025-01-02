"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import ConfigData from "../../config";
import Image from "next/image";

const ImpactStories = () => {
  const siteUrl = ConfigData.wpApiUrl;
  const serverUrl = ConfigData.SERVER;
  const categoryId = 2;
  const categoryId1 = 9;

  const [data, setData] = useState([]); // Initialize data state with an empty array
  const [isLoading, setIsLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true); // Set loading to true before fetching
        const response = await fetch(
          `${siteUrl}/posts?categories=${categoryId},${categoryId1}&_embed&production_mode[]=${serverUrl}`
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); // Set loading to false after fetching
      }
    };

    fetchData();
  }, [siteUrl, serverUrl, categoryId]);

  return (
    <>
      <div className="bg-[#0A0A0A]">
        <div className="text-white">
          <h1 className="text-center pt-10 text-2xl">IMPACT STORIES</h1>
        </div>
        <div className="flex text-[#B9B9B9] items-end justify-start mt-4 p-4 container mx-auto">
          <p>
            <Link href="/">Home</Link> /{" "}
          </p>
          <h2 className="px-1"> Impact Stories</h2>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 mb-32">
        {isLoading ? ( // Render loading indicator while loading
          <>
            <div className="lg:flex gap-5 justify-center">
              <div className="animate-pulse flex flex-col justify-center items-center">
                <div className="mb-2 h-3 w-96 rounded-none bg-[#B9B9B9]"></div>
                <div className="mb-2 h-3 w-96 rounded-none bg-[#B9B9B9]"></div>
                <div className="bg-[#746C6C] h-52 w-96"></div>
                <div className="mb-2 h-3 w-96 rounded-none bg-[#B9B9B9] mt-4"></div>
                <div className="mb-2 h-3 w-96 rounded-none bg-[#B9B9B9]"></div>
              </div>
              <div className="animate-pulse flex flex-col justify-center items-center">
                <div className="mb-2 h-3 w-96 rounded-none bg-[#B9B9B9]"></div>
                <div className="mb-2 h-3 w-96 rounded-none bg-[#B9B9B9]"></div>
                <div className="bg-[#746C6C] h-52 w-96"></div>
                <div className="mb-2 h-3 w-96 rounded-none bg-[#B9B9B9] mt-4"></div>
                <div className="mb-2 h-3 w-96 rounded-none bg-[#B9B9B9]"></div>
              </div>
            </div>
          </>
        ) : (
          <div className="container mx-auto lg:px-4 py-8">
            <div className="grid md:grid-cols-2  ">
              {data.length > 0 ? (
                data
                  .filter(
                    (post) => post.acf && post.acf.additional_thumbnail_image
                  ) // Filter valid posts
                  .map((post, index, filteredData) => {
                    const isLastRow =
                      index >= Math.floor(filteredData.length / 2) * 2; // Last row if index >= half of filtered data
                    const isLastColumn = index % 2 === 1; // Last column for a 2-column layout
                    return (
                      <div
                        key={post.id}
                        className={`relative flex flex-col bg-white overflow-hidden lg:p-10 p-5 group 
  ${!isLastRow ? " border border-gray-300" : "lg:border-t-0"} 
  ${!isLastColumn ? "border border-gray-300" : "lg:border-l-0"}`}
                      >
                        {/* Background Effect */}
                        <div className="absolute inset-0 bg-[#000] transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0"></div>
                        <div className="relative z-10 flex flex-col h-full">
                          <div className="relative overflow-hidden">
                            <h3
                              className="lg:text-2xl text-xl text-[#262626] group-hover:text-white flex items-center mb-6"
                              style={{ minHeight: "5rem", lineHeight: "1.5" }} // Ensures title height is consistent
                            >
                              {post.title.rendered}
                            </h3>
                            <Image
                              width={400}
                              height={400}
                              src={post.acf.additional_thumbnail_image.url}
                              alt={post.title.rendered}
                              style={{
                                minHeight: "10rem",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                              className="lg:h-72 object-cover w-full transform transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>
                          <div className="text-left transition-colors duration-300 flex items-end group-hover:text-white mt-4 flex-grow">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: post["excerpt"]["rendered"],
                              }}
                              className="lg:mx-3 p-1 post-content text-lg"
                              style={{
                                minHeight: "3rem",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            ></div>
                            {!post.categories.includes(categoryId1) && (
                              <div className="hidden sm:block transform opacity-0 justify-center items-center w-9 h-9 bg-[#E82B52] p-2 lg:-mx-8 lg:-mb-8 group-hover:opacity-100 transition-transform duration-500 group-hover:scale-150">
                                <Link href={`/impact-stories/${post.slug}`}>
                                  <FiArrowRight
                                    className="text-[white]"
                                    size={20}
                                  />
                                </Link>
                              </div>
                            )}
                          </div>
                          {/* for mobile read more */}
                          {!post.categories.includes(categoryId1) && (
                            <div className="mt-7 lg:hidden">
                              <Link
                                href={`/impact-stories/${post.slug}`}
                                className="bg-black text-white group-hover:bg-white group-hover:text-black p-3 rounded-md"
                              >
                                Read more
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })
              ) : (
                <div className="text-center text-gray-500">
                  No results found
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ImpactStories;
