'use client'
import Image from "next/image";
import React from "react";

const OurApproach = () => {
  return (
    <div className="pb-32">
      <div className="text-center my-5 border-t-4 border-gray-500 border-dashed container mx-auto pt-16">
        <p className="text-3xl">Our Approach</p>
      </div>
      <div className="flex flex-col justify-center items-center text-center">
        <Image src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/Upfront-v4/ourStory/OurApproach/info.png" width={1200} height={400} alt="info" className="hidden lg:block"/>
        <Image src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/Upfront-v4/ourStory/OurApproach/info-mobile.png" width={1200} height={400} alt="info" className="lg:hidden sm:block p-3"/>
        <p className="p-4 lg:w-[50vw] mt-7 lg:mt-10 text-xl">
          Upfront prioritises the wellbeing of both the formal and informal
          workforce, placing their health and happiness at the core of its work
          and upholding its commitment to the community
        </p>
      </div>
    </div>
  );
};

export default OurApproach;
