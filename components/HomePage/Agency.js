import React from "react";
import { AgencyData } from "@/utils/data";
import Image from "next/image";

const Agency = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center container mx-auto ">
        <div>
          <Image
            src="/HomePage/ThematicAreas/img-3.png"
            width={800}
            height={300}
            alt="thematic image"
            className="w-"
          />{" "}
          <div className="bg-black text-white text-center p-3 ">
            <h3 className="text-4xl mt-3">
            Agency Building for Women & Young Girls
            </h3>
            <p className="mt-3 pb-3">
            Strengthening voices, shaping futures for women and girls
            </p>
          </div>
        </div>

        <div className="overflow-y-auto  mt-10 container mx-auto  flex justify-center items-center">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 justify-center items-center">
            {AgencyData.sections.map((section, index) => (
              <div key={index} className="flex items-start space-x-4 ">
                {/* Icon */}
                <Image
                  width={400}
                  height={400}
                  src={section.icon}
                  alt={section.title}
                  className="w-16 h-16"
                />
                {/* Content */}
                <div className="">
                  <h4 className="text-3xl w-96">
                    {section.title}
                  </h4>
                  <p className="text-gray-600 text-xl w-96 mt-5">
                    {section.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Agency;
