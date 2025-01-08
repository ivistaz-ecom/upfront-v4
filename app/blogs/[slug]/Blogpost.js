"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ConfigData from "../../../config";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosLink } from "react-icons/io";

const BlogPosts = ({ slug }) => {
  const siteUrl = ConfigData.wpApiUrl;
  const [post, setPost] = useState(null);
  const [allPosts, setAllPosts] = useState([]);
  const [nextPost, setNextPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading to true when fetching data
      try {
        const response = await fetch(`${siteUrl}/posts?_embed&slug=${slug}`);
        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            setPost(data[0]); // Assuming slug fetches a single post
          } else {
            setPost(null); // No post found
          }
        } else {
          console.error("Failed to fetch post:", response.statusText);
          setPost(null); // No post found
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setPost(null); // No post found
      } finally {
        setIsLoading(false); // Set loading to false after fetching
      }
    };

    fetchData();
  }, [siteUrl, slug]);

  useEffect(() => {
    const fetchCategoryPosts = async () => {
      try {
        const response = await fetch(`${siteUrl}/posts?_embed&categories=3`);
        if (response.ok) {
          const data = await response.json();
          setAllPosts(data);

          // Find the current post's index
          const currentIndex = data.findIndex((p) => p.slug === slug);

          if (currentIndex !== -1) {
            // Select the next two posts for related stories
            const nextTwoPosts = data.slice(currentIndex + 1, currentIndex + 3);

            // Handle case where fewer than 2 posts are available
            const additionalPostsNeeded = Math.max(0, 2 - nextTwoPosts.length);
            const fallbackPosts = data
              .filter((p) => p.slug !== slug) // Avoid showing the same post
              .slice(0, additionalPostsNeeded);
            setRelatedPosts([...nextTwoPosts, ...fallbackPosts]);

            // Set the next post for "Next Blog" navigation
            setNextPost(data[currentIndex + 1] || null);
          }
        } else {
          console.error("Failed to fetch posts:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching all posts:", error);
      }
    };

    fetchCategoryPosts();
  }, [siteUrl, slug]);

  

  return (
   
    <>
     
    <div className="custom-container">
      {isLoading ? (
        // Loading spinner or skeleton screen
        <div className="text-center py-20 my-16 p-5">
          <div className="animate-pulse container mx-auto border-2">
            <div className="flex justify-between items-center border-b-2">
              <div className=" h-6 w-40 bg-gray-300"></div>
              <div className=" h-6 w-40 bg-gray-300"></div>
            </div>
            <div className="mb-2 h-6 w-[60%] container mx-auto mt-5 bg-gray-300"></div>
            <div className="mb-2 h-6 w-[60%] container mx-auto mt- bg-gray-300"></div>
            <div className="mb-2 h-36 lg:w-96 mx-auto mt-5 rounded bg-gray-400"></div>
            <div className="mb-2 h-6 lg:w-[60%] container mx-auto mt-5 bg-gray-300"></div>
            <div className="mb-2 h-6 w-[60%] container mx-auto mt-5 bg-gray-300"></div>
            <div className="mb-2 h-6 w-[60%] container mx-auto mt-5 bg-gray-300"></div>
            <div className="flex justify-between items-center border-t-2 mt-5">
              <div className=" h-6 w-40 bg-gray-300"></div>
              <div className=" h-6 w-40 bg-gray-300"></div>
            </div>
          </div>
        </div>
      ) : post ? (
        <div className="bg-[#EFEFEF] lg:p-10 p-3 lg:my-24 my-20 pt-8">
          <div>
            <p className="text-[#0A0A0A] container mx-auto lg:text-xl">
              <Link href="/">Home /</Link>
              <span className="fs-6 mb-0 px-1">
                <Link href="/blogs">Blogs </Link>/
              </span>
              <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            </p>
          </div>

          {/* Next Blog and Back to All Blogs Buttons */}
          <div className="bg-white container mx-auto border-2 my-10 mb-32">
            <div className="flex justify-between p-3 items-center container mx-auto border-b-2">
              {allPosts && (
                <Link href="/blogs">
                  <button className="focus:outline-none">
                    <p className="flex justify-center items-center gap-3 lg:text-xl text-[#404040]">
                      <RiArrowLeftLine className="lg:text-3xl" /> Back to All
                      Blogs
                    </p>
                  </button>
                </Link>
              )}
              {nextPost && (
                <Link href={`/blogs/${nextPost.slug}`}>
                  <button className="focus:outline-none">
                    <p className="flex lg:text-xl items-center gap-3 text-[#404040]">
                      Next Blog
                      <RiArrowRightLine className="lg:text-3xl" />
                    </p>
                  </button>
                </Link>
              )}
            </div>
            
            <div className="flex flex-wrap lg:flex-nowrap gap-10 lg:pt-16 justify-center lg:p-10">
              <div className="lg:w-3/4 w-full lg:px-10 container 2xl:mx-auto">
                <div
                  className="lg:text-3xl text-xl p-5 text-center text-[#0A0A0A]"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
                {post.acf?.additional_banner_image?.url && (
                  <div className="lg:flex space-x-4">
                    <Image
                      width={600}
                      height={400}
                      src={post.acf.additional_banner_image.url}
                      alt={post.title.rendered}
                      className="w-full mb-5 p-5 lg:p-0"
                    />

                    <div className="flex lg:flex-col flex-row gap-4 mb-10 items-center relative">
                      <p className="flex gap-1">
                        Share<span>on:</span>
                      </p>

                      {/* Facebook Share */}
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                          window.location.href
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebook
                          size={30}
                          className="text-blue-600 cursor-pointer"
                        />
                      </a>

                      {/* Twitter Share */}
                      <a
                        href={`https://twitter.com/share?url=${encodeURIComponent(
                          window.location.href
                        )}&text=${encodeURIComponent(post.title.rendered)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaSquareXTwitter
                          size={30}
                          className="cursor-pointer"
                        />
                      </a>

                      {/* LinkedIn Share */}
                      <a
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                          window.location.href
                        )}&title=${encodeURIComponent(post.title.rendered)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="/OurTeam/linkedin.png"
                          width={30}
                          height={30}
                          className="cursor-pointer"
                          alt="linkedin logo"
                        />
                      </a>

                      {/* Copy Link */}
                      <div className="relative">
                        <IoIosLink
                          size={30}
                          className="cursor-pointer"
                          onClick={() => {
                            navigator.clipboard.writeText(window.location.href);
                            setTooltipVisible(true);
                            setTimeout(() => setTooltipVisible(false), 2000); // Hide tooltip after 2 seconds
                          }}
                        />
                        {tooltipVisible && (
                          <div className="absolute bg-green-600 text-white text-xs rounded px-2 py-1 -top-8 left-1/2 transform -translate-x-1/2 mt-16">
                            <p className="flex gap-1">
                              {" "}
                              Link <span>Copied!</span>
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                <div
                  className="text-[#0A0A0A] lg:p-0 p-5"
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />
              </div>
            </div>
            {/* Related Stories */}
            <div className="mt-10 lg:p-20 p-5">
              {isLoading ? (
                <>
                  <div className="flex gap-5 justify-center">
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
                <div className="border">
                  <h2 className="text-2xl text-left p-4 border-b">
                    Related Stories
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 border-gray-300">
                    {relatedPosts.length > 0 ? (
                      relatedPosts.map((post, index) => (
                        <div
                          key={post.id}
                          className={`relative flex flex-col bg-white overflow-hidden lg:p-20 p-3 group 
              ${
                index < relatedPosts.length - 1
                  ? "lg:border-b-0 border-b border-gray-300"
                  : ""
              }
              ${index % 1 === 0 ? "md:border-r-0 border-gray-300" : ""}`}
                        >
                          <div className=""></div>
                          <div className="relative z-10">
                            <div className="relative overflow-hidden">
                              {post.acf?.additional_banner_image?.url && (
                                <Image
                                  width={400}
                                  height={400}
                                  src={post.acf.additional_banner_image.url}
                                  alt={post.title.rendered}
                                  className="object-cover w-full transform transition-transform duration-500 group-hover:scale-110"
                                />
                              )}
                            </div>
                            <div className="pt-4 text-left">
                              <h3 className="lg:text-2xl text-xl text-[#262626] flex items-center mt-6 post-content-title-recent">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: post.title.rendered,
                                  }}
                                />
                              </h3>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: post.excerpt?.rendered || "",
                                }}
                                className="mt-5 p-1 text-gray-600 post-content"
                              ></div>
                            </div>
                          </div>
                          <div className="flex justify-center mt-10">
                            <Link href={`/blogs/${post.slug}`}>
                              <button className="relative group px-6 py-2 bg-transparent text-black w-96 text-lg font-semibold transition-all duration-500 hover:bg-black group-hover:text-white">
                                <span className="absolute inset-0 bg-black scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
                                <span className="relative z-10 flex items-center ">
                                  Read more
                                  <FiArrowRight className="text-[20px] transform transition-transform duration-500 translate-x-0 lg:group-hover:translate-x-60 opacity-0 group-hover:opacity-100" />
                                </span>
                              </button>
                            </Link>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center text-gray-500">
                        No results found
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-between items-center p-3 items-center container mx-auto border-t-2">
              {allPosts && (
                <Link href="/blogs">
                  <button className="focus:outline-none">
                    <p className="flex items-center gap-3 lg:text-xl text-[#404040]">
                      <RiArrowLeftLine className="lg:text-3xl" /> Back to All
                      Blogs
                    </p>
                  </button>
                </Link>
              )}
              {nextPost && (
                <Link href={`/blogs/${nextPost.slug}`}>
                  <button className="focus:outline-none">
                    <p className="flex lg:text-xl items-center gap-3 text-[#404040]">
                      Next Blog
                      <RiArrowRightLine className="lg:text-3xl" />
                    </p>
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-xl">No Blogs found</p>
          <p className="text-xl flex gap-3 justify-center items-center">
            Go Back to{" "}
            <Link href="/blogs" className="text-red-600">
              <span className="flex gap-3 justify-center items-center">
                Blogs <RiArrowRightLine />
              </span>
            </Link>
          </p>
        </div>
      )}
    </div>
    </>
  );
};

export default BlogPosts;
