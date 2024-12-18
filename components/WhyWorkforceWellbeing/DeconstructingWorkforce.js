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
                className="w-screen mt-24"
                alt="framework"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeconstructingWorkforce;
