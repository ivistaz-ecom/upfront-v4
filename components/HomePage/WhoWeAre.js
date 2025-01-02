"use client";
import Image from "next/image";
import React from "react";

const WhoWeAre = () => {
  return (
    <div className="lg:mt-28 mt-12">
      <div className="text-center px-5">
        <p className="mt-5 custom-title lg:text-2xl text-xl md:text-3xl">
          Who We Are
        </p>
        <p className="secondary-title lg:text-5xl text-2xl md:text-5xl lg:mt-3 mt-2">
          Catalysts of Change for Workforce Wellbeing
        </p>
      </div>
      <div className="container mx-auto px-5">
        <div className="flex justify-center lg:mt-10 mt-7">
          <Image
            src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/Upfront-v4/WhoWeAre/WhoWeAre.png"
            width={1200}
            height={300}
            alt="Who We Are"
            className="w-full lg:relative z-10"
          />
        </div>
        <div className="flex justify-center items-center container mx-auto ">
          <div className="bg-white container shadow-none rounded-none text-center lg:p-10 p-4 lg:mt-[-50px] mx-auto lg:absolute z-10  lg:w-[75vw]">
            <p className="para-color  md:text-xl">
              Upfront strives to make wellbeing a reality for both the formal
              and informal workforce. We are a proud Indian and global entity
              committed to enriching the lives of millions within the workforce
              by working for their rights, entitlements, health, agency, safety,
              financial security, and building resilience.
            </p>
          </div>
        </div>

        <div className="bg-black container mx-auto lg:p-10 p-7 lg:mt-28 mt-7 flex items-center justify-center">
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
