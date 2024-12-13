"use client";
import Image from "next/image";
import React from "react";

const WhoWeAre = () => {
  return (
    <div className="py-10">
      <div className="text-center px-5">
        <p className="mt-5 custom-title lg:text-2xl text-xl md:text-3xl">
          Who We Are
        </p>
        <p className="secondary-title lg:text-5xl text-2xl md:text-5xl mt-2">
          Catalysts of Change for Workforce Wellbeing
        </p>
      </div>
      <div className="container mx-auto px-5">
        <div className="flex justify-center mt-10">
          <Image
            src="/HomePage/WhoWeAre/WhoWeAre.png"
            width={900}
            height={300}
            alt="Who We Are"
            className="w-full md:w-10/12 lg:w-10/12 relative z-10"
          />
        </div>
        <div className="flex justify-center items-center container mx-auto ">
          <div className="bg-white container shadow-lg rounded-none text-center lg:p-10 p-5 mt-[-50px] mx-auto absolute z-10 lg:max-w-[60vw] w-[80vw]">
            <p className="text-gray-700 text-sm md:text-xl">
              Upfront strives to make wellbeing a reality for both the formal
              and informal workforce. We are a proud Indian and global entity
              committed to enriching the lives of millions within the workforce
              by working for their rights, entitlements, health, agency, safety,
              financial security, and building resilience.
            </p>
          </div>
        </div>

        <div className="bg-black container mx-auto p-10 mt-28 flex items-center justify-center">
          <p className="text-center text-white lg:text-xl lg:w-[47vw]">
            We are part of the Catalyst Group, a social enterprise platform that
            enhances the health and wealth of vulnerable people and the planet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
