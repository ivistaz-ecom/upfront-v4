"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import ConfigData from "../../config";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

const RecentBlogs = () => {
  const siteUrl = ConfigData.wpApiUrl;
  const serverUrl = ConfigData.SERVER;
  const categoryId = 3;

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${siteUrl}/posts?categories=${categoryId}&_embed&per_page=6&production_mode[]=${serverUrl}`
        );
        const posts = await response.json();
        setData(posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [siteUrl, serverUrl, categoryId]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  let carouselRef = null;
  return (
    <>
      <div className="container mx-auto text-center lg:text-3xl text-2xl mt-10">
        Recent Blogs
      </div>
      <div className="w-full max-w-screen-lg mx-auto px-4">
        {isLoading ? (
          <div className="flex gap-5 justify-center">
            <div className="animate-pulse flex justify-center items-center border-2 p-4 mt-10">
              <div className="lg:flex justify-between items-center gap-4">
                <div className="bg-[#746C6C] h-40 w-96"></div>
                <div className="flex flex-col">
                  <div className="mb-2 h-3 w-96 rounded-none bg-[#B9B9B9]"></div>
                  <div className="mb-2 h-3 w-80 rounded-none bg-[#B9B9B9]"></div>
                  <div className="mb-2 h-3 w-72 rounded-none bg-[#B9B9B9]"></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Carousel
            ref={(el) => (carouselRef = el)}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            showDots={false}
            arrows={false}
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
          >
            {data.map((post) => (
              <div key={post.id} className="flex border lg:mt-10 mt-5">
                <div className="lg:flex justify-center items-center group hover:bg-black">
                  <div className="w-full md:w-1/2">
                    {post.acf && post.acf.thumbnail_image && (
                      <Image
                        width={700}
                        height={500}
                        src={post.acf.thumbnail_image.url}
                        alt={post.title.rendered}
                        className="h-auto object-cover transform transition-transform duration-500 group-hover:scale-100 w-full"
                      />
                    )}
                  </div>
                  <div className="w-full md:w-1/2 px-4 py-4 ">
                    <Link href={`/blogs/${post.slug}`}>
                      <h2
                        className="text-2xl post-content lg:text-3xl group-hover:text-white group-hover:underline"
                        dangerouslySetInnerHTML={{
                          __html: post.title.rendered,
                        }}
                      ></h2>
                    </Link>

                    <div
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.rendered,
                      }}
                      className="text-gray-600 mt-2 post-content-title group-hover:text-white"
                    ></div>
                    <Link href={`/blogs/${post.slug}`}>
                      <button className="mt-4 px-6 py-2 bg-black text-white text-lg rounded-lg hover:bg-gray-700 lg:hidden sm:block">
                        Read More
                        <FiArrowRight className="inline-block ml-2" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        )}
      </div>
      {/* Custom Arrow Buttons Below Carousel  */}
      <div className="flex items-center justify-center gap-0 lg:mt-10 mt-7">
        <button
          className="p-2 bg-white text-gray-500 border-[#D3D3D3] rounded-l border text-2xl shadow hover:bg-gray-100"
          onClick={() => carouselRef.previous()}
          aria-label="Previous Slide"
        >
          <LuArrowLeft size={30} className="w-16" />
        </button>
        <button
          className="p-2 text-gray-500 bg-white border border-[#D3D3D3] rounded-r text-2xl shadow hover:bg-gray-100"
          onClick={() => carouselRef.next()}
          aria-label="Next Slide"
        >
          <LuArrowRight size={30} className="w-16" />
        </button>
      </div>
    </>
  );
};

export default RecentBlogs;