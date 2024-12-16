import React from "react";
import { SocialProtectionData } from "@/utils/data";
import Image from "next/image";

const SocialProtection = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center container mx-auto ">
        <div>
          <Image
            src="/HomePage/ThematicAreas/img-5.png"
            width={800}
            height={300}
            alt="thematic image"
            className="w-"
          />{" "}
          <div className="bg-black text-white text-center p-3 ">
            <h3 className="text-4xl mt-3">Social Protection</h3>
            <p className="mt-3 pb-3">Strengthening safety nets for every workforce</p>
          </div>
        </div>

        <div className="overflow-y-auto  mt-10 container mx-auto  flex justify-center items-center">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 justify-center items-center">
            {SocialProtectionData.sections.map((section, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 justify-between"
              >
                {/* Icon */}
                <Image
                  width={400}
                  height={400}
                  src={section.icon}
                  alt={section.title}
                  className="w-12 h-12"
                />
                {/* Content */}
                <div className="">
                  <h4
                    className="font-semibold text-lg w-96"
                    dangerouslySetInnerHTML={{ __html: section.title }}
                  />
                  <p
                    className="text-gray-600 text-sm w-96"
                    dangerouslySetInnerHTML={{ __html: section.description }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialProtection;
