"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { OurReach } from "@/utils/data";
import Image from "next/image";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import CountUp from "react-countup";

const CarouseReach = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
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
    },
  };

  let carouselRef = null; // To reference the carousel for navigation

  return (
    <div className="relative my-14  mx-auto container ">
      <Carousel
        key={OurReach}
        ref={(el) => (carouselRef = el)} // Assign reference to carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        centerMode={false}
        showDots={false}
        arrows={false}
      >
        {OurReach.map((item, index) => (
          <div key={index}>
            {" "}
            {/* Added the key prop here */}
            <div className="relative group flex flex-col justify-center items-center container mx-auto">
              <div className="relative overflow-hidden rounded-none">
                <Image
                  width={280}
                  height={200}
                  src={item.imageUrl}
                  alt={item.title}
                  className="transition-transform duration-500 lg:w-60"
                />
                <div className="absolute inset-0 bg-black translate-x-full transition-transform duration-500 group-hover:translate-x-0"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <CountUp
                    start={0}
                    end={item.count}
                    duration={30}
                    className="text-3xl"
                  />
                  <p>{item.subtitle}</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-lg md:mx-2 2xl:mx-8 mt-3 text-center lg:text-left">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Custom Arrow Buttons Below Carousel */}
      <div className="flex items-center justify-center gap-4 mt-10">
        <button
          className="p-3 bg-white text-gray-500 border-[#D3D3D3] border rounded-full text-2xl shadow hover:bg-gray-100"
          onClick={() => carouselRef.previous()} // Navigate to the previous slide
          aria-label="Previous Slide"
        >
          <LuArrowLeft />
        </button>
        <button
          className="p-3 text-gray-500 bg-white border border-[#D3D3D3] rounded-full text-2xl shadow hover:bg-gray-100"
          onClick={() => carouselRef.next()} // Navigate to the next slide
          aria-label="Next Slide"
        >
          <LuArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CarouseReach;
