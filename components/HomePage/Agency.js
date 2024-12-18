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
            <h3 className="lg:text-4xl mt-3 text-lg">
              Agency Building for Women and Young Girls
            </h3>
            <p className="mt-3 pb-3">
              Strengthening voices, shaping futures for women and girls
            </p>
          </div>
        </div>

        <div className="overflow-y-auto  mt-10 container mx-auto  flex justify-center items-center">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 justify-center items-center">
            <div className="flex items-start space-x-4 lg:-mt-12">
              {/* Icon */}
              <Image
                width={400}
                height={400}
                src="/HomePage/ThematicAreas/Popup/img-7.svg"
                alt="logo icon"
                className="lg:w-16 lg:h-16 w-12 h-12"
              />
              {/* Content */}
              <div className="">
                <h4 className="lg:text-3xl text-xl lg:w-96">
                  Equipping Women And Young Girls With Knowledge and Life Skills
                </h4>
                <p className="text-gray-600 lg:text-xl lg:w-96 mt-5">
                  Sharing knowledge with women and young girls that includes
                  social and gender norms, empowering participants to challenge
                  stereotypes, improve themselves, and ask for what they
                  deserve. Life skills training is also integrated with tools
                  for their personal and professional development.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 ">
              {/* Icon */}
              <Image
                width={400}
                height={400}
                src="/HomePage/ThematicAreas/Popup/img-8.svg"
                alt="logo icon"
                className="lg:w-16 lg:h-16 w-12 h-12"
              />
              {/* Content */}
              <div className="">
                <h4 className="lg:text-3xl text-xl lg:w-96">
                  Charting Career Progression Pathways
                </h4>
                <p className="text-gray-600 lg:text-xl lg:w-96 mt-5">
                  Supporting the career advancement of women and young girls in
                  the workplace through mentorship programmes, skill development
                  initiatives, and handholding to help women navigate their
                  career paths with confidence. Additionally, Upfront works
                  closely with employers to strengthen workplace policies and
                  practices that promote gender equality and support
                  professional growth irrespective of gender.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Agency;
