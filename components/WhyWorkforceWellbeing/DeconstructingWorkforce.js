"use client";
import Image from "next/image";
import React from "react";

const DeconstructingWorkforce = () => {
  return (
    <>
      <div className="mb-32 container mx-auto">
        <div className="mb-10">
          <div className="bg-[#DEDEDE] container mx-auto lg:p-20 p-10 text-center flex flex-col items-center justify-center">
            <p className="lg:text-3xl text-2xl secondary-title">
              Deconstructing Workforce Wellbeing for Businesses
            </p>
            <div clas=" container mx-auto flex justify-center items-center">
              <Image
                src="/WhyWorkForce/Diagram-Framework.png"
                width={900}
                height={300}
                className="w-screen lg:mt-24 mt-8"
                alt="framework"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center border-b-4 border-gray-500 border-dashed container mx-auto mt-10">
      <a href="/WhyWorkForce/pdf/WWW-Section-003.pdf" download><button className="flex justify-between items-center gap-4 bg-[#2F2F2F] text-white py-2 px-2 w-48 my-10 rounded-full hover:bg-gray-900">
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
    </>
  );
};

export default DeconstructingWorkforce;
