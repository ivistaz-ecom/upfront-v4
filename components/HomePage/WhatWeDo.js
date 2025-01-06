"use client";
import Image from "next/image";
import React from "react";

const WhatWeDo = () => {
  return (
    <div className="h-full container mx-auto flex flex-col justify-center items-center text-center">
      <div className="">
        <p className="custom-title lg:mt-28 mt-12 lg:text-3xl text-xl">
          What We Do
        </p>
        <p className="secondary-title lg:text-5xl lg:w-[50vw] text-2xl text-center mt-2">
          Empowering Workforce Wellbeing Through Innovation and Collaboration
        </p>
        <p className="para-color lg:w-[52vw] lg:mt-5 mt-2 lg:p-0 p-3">
          Upfront aims to enhance workforce wellbeing by unlocking human
          potential, optimising systems, and orchestrating investments,
          collaborations, and partnerships.
        </p>
      </div>
      <div className="flex items-center justify-center lg:my-10">
        <Image
          src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/Upfront-v4/WhatWeDo/info.png"
          width={650}
          height={500}
          className="lg:p-0 p-5"
          alt="info-img"
          // layout="responsive"
          priority
        />
      </div>
      <div>
        <p className="para-color text-center lg:w-[60vw] mb-16 p-3 lg:p-0 group">
          Our approach represents a critical value proposition to improve social
          and economic outcomes, impacting the wellbeing of people and the
          planet through{" "}
          <span className="group-hover:underline">scalability</span>,{" "}
          <span className="group-hover:underline">impact</span>, and{" "}
          <span className="group-hover:underline">sustainability</span>.
        </p>
      </div>
    </div>
  );
};

export default WhatWeDo;
