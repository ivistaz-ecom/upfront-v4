'use client'
import React from "react";
import Carouselwww from "./WwwCarousel";

const BannerCarousel = () => {
  return (
    <div className="mx-auto container  lg:pt-24 pt-20">
      <div className="container lg:px-48  flex items-center gap-5 mt-12">
        <p className="bg-red-600 h-1 w-20 -mt-36 hidden lg:block"></p>
        <div className="text-left text-[60px] font-bold lg:w-[46vw] lg:p-0 p-3">
         <div>
          <h1 className="text-[60px]">Why</h1>
         </div>
         <p className="text-[60px] -mt-5">Workforce</p>
         <div className="flex items-center gap-3">
         <p className="text-[60px] -mt-5">Wellbeing?</p>
         <p className="bg-[#E0E0E0] h-1 w-20 hidden lg:block"></p>
         </div>
        </div>
      </div>
      <Carouselwww/>
    </div>
  );
};

export default BannerCarousel;
