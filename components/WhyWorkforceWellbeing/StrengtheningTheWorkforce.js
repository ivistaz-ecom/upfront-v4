"use client";

import { StrengtheningData } from "@/utils/data";
import Image from "next/image";
import React from "react";

const StrengtheningTheWorkforce = () => {
  return (
    <div className="mb-16">
      <h3 className="text-center secondary-title text-3xl lg:my-10 my-5 font-semibold lg:p-0 p-5">
        Strengthening the Workforce for Sustainable Growth
      </h3>
      {StrengtheningData.map((content, index) => (
        <div
          key={content.id}
          className={`flex flex-col ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          } items-center lg:justify-between lg:gap-24 gap-10 container mx-auto p-6 mt-5 bg-[#F0F0F0]`}
        >
          <div
            className={`flex-1 ${
              index % 2 === 0 ? "" : "lg:justify-end"
            } flex max-w-[350px]`}
          >
            <Image
              width={400}
              height={300}
              src={content.image}
              alt={`Content image ${content.id}`}
              className="lg:max-w-[350px]" // Adjusted max width for better fit
            />
          </div>
          <div className="flex-1 text-container lg:mx-10">
            {content.title && (
              <h2 className="text-3xl mb-3">{content.title}</h2>
            )}
            <p
              className="para-color text-lg leading-relaxed mb-2 text-"
              dangerouslySetInnerHTML={{ __html: content.description }}
            ></p>
            {content.description2 && (
              <p
                className="para-color text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: content.description2 }}
              ></p>
            )}
          </div>
        </div>
      ))}

      <div className="container mx-auto lg:mt-10 mt-5 flex  justify-center">
        <p className="text-[#0A0A0A] text-center lg:w-[75vw] lg:p-0 p-3">
          *Some of our programmes which were third-party evaluated by the likes
          of Tufts University and ICRW indicated that workforce empowerment is
          necessary to address productivity and sustainability, however,
          enabling systems and services is very critical to ensure the intended
          results and outcomes.
        </p>
      </div>
    </div>
  );
};

export default StrengtheningTheWorkforce;
