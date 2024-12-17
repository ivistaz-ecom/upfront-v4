"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { WhyWorkForceData } from "@/utils/data";
import Image from "next/image";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import CountUp from "react-countup";

const Carouselwww = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      //   arrows={false},
    },
  };

  let carouselRef = null; // To reference the carousel for navigation

  return (
    <div className="relative lg:my-14 lg:w-[70vw] lg:p-0 p-4 mx-auto container">
      <Carousel
        ref={(el) => (carouselRef = el)} // Assign reference to carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        centerMode={false}
        showDots={false}
        arrows={false}
      >
        {WhyWorkForceData.map((item, index) => (
          <div key={index}>
            <div className="relative group flex flex-col justify-center items-center container mx-auto">
              <div className="relative overflow-hidden rounded-none ">
                <Image
                  width={1200}
                  height={700}
                  src={item.image}
                  alt={item.title}
                  className="transition-transform duration-500 lg:w-[60vw]"
                />
              </div>
            </div>

            <div className="flex lg:gap-5 gap-3 lg:mx-20 py-2">
              <p className="text-left">
                * Source: <span className="text-[#1B6CCB]">CEBR</span>
              </p>
              <p>
                ** Source: <span className="text-[#1B6CCB]">npr.org</span>
              </p>
              <p>
                *** Source: <span className="text-[#1B6CCB]">Forbes</span>
              </p>
            </div>
          </div>
        ))}
      </Carousel>{" "}
      {/* Custom Arrow Buttons Below Carousel for desktop */}
      <div className="hidden lg:block">
        <div className="absolute lg:top-[35%] top-[25%]  w-full flex justify-between px-4 transform">
          {/* Left Arrow */}
          <button
            className="bg-[#D3D3D3] text-gray-600  hover:text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-gray-800 transition duration-300"
            onClick={() => carouselRef.previous()} // Navigate to the previous slide
            aria-label="Previous Slide"
          >
            <LuArrowLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            className="bg-[#D3D3D3] text-gray-600  hover:text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-gray-800 transition duration-300"
            onClick={() => carouselRef.next()} // Navigate to the next slide
            aria-label="Next Slide"
          >
            <LuArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
      {/* Custom Arrow Buttons Below Carousel for mobile*/}
      <div className="lg:hidden sm:block">
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            className="p-3 bg-[#D3D3D3] text-gray-500 border-[#D3D3D3] border rounded-full text-2xl shadow hover:bg-[#0B0B0B]"
            onClick={() => carouselRef.previous()} // Navigate to the previous slide
            aria-label="Previous Slide"
          >
            <LuArrowLeft />
          </button>
          <button
            className="p-3 bg-[#D3D3D3] text-gray-500 border-[#D3D3D3] border rounded-full text-2xl shadow hover:bg-[#0B0B0B]"
            onClick={() => carouselRef.next()} // Navigate to the next slide
            aria-label="Next Slide"
          >
            <LuArrowRight />
          </button>
        </div>
      </div>
      <div className="flex justify-center">
      <a href="/WhyWorkForce/pdf/WWW-Section 1.pdf" download><button className="flex justify-between items-center gap-4 bg-[#2F2F2F] text-white py-2 px-2 w-48 mt-20 mb-10 rounded-full hover:bg-gray-900">
          <span className="px-3">Download Now</span>
          <span className="bg-[#5C5C5C] p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16l8 8m0 0l8-8m-8 8V4"
              />
            </svg>
          </span>
        </button>
        </a>
      </div>
    </div>
  );
};

export default Carouselwww;
