import React from "react";
import { HealthWellbeingData, modalContent } from "@/utils/data";
import Image from "next/image";

const HealthWellbeing = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center container mx-auto ">
        <div>
          <Image
            src="/HomePage/ThematicAreas/img-1.png"
            width={800}
            height={300}
            alt="thematic image"
            className="w-"
          />{" "}
          <div className="bg-black text-white text-center p-3 ">
            <h3 className="lg:text-4xl text-lg mt-3">Health and Wellbeing</h3>
            <p className="mt-3 pb-3">
              Empowering the workforce through informed choices and inclusive
              care
            </p>
          </div>
        </div>

        <div className="overflow-y-auto  mt-10 container mx-auto  flex justify-center items-center">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 justify-center items-center">
            <div className="flex items-start space-x-4 justify-center">
              {/* Icon */}
              <Image
                width={400}
                height={400}
                src="/HomePage/ThematicAreas/Popup/img-1.svg"
                alt="icon logo"
                className="lg:w-16 lg:h-16 w-12 h-12"
              />
              {/* Content */}
              <div className="">
                <h4 className="lg:text-3xl text-xl lg:w-96">
                  Nutrition, Sanitation and Personal Hygiene:
                </h4>
                <p className="text-gray-600 lg:text-xl lg:w-96 mt-5">
                  We believe that everyday habits play a crucial role in
                  maintaining good health. Through education and resources, we
                  empower the workforce to make informed choices about
                  nutrition, sanitation, and personal hygiene, promoting overall
                  wellness in the workplace.
                </p>
              </div>
            </div>

            {/* 2nd */}
            <div className="flex items-start space-x-4 justify-center lg:-mt-7">
              {/* Icon */}
              <Image
                width={400}
                height={400}
                src="/HomePage/ThematicAreas/Popup/img-2.svg"
                alt="icon logo"
                className="lg:w-16 lg:h-16 w-12 h-12"
              />
              {/* Content */}
              <div className="">
                <h4 className="lg:text-3xl text-xl lg:w-96">
                  Stress Management and Mental Health:
                </h4>
                <p className="text-gray-600 lg:text-xl lg:w-96 mt-5">
                  We recognise the importance of mental health for productivity
                  and quality of life and create avenues for open dialogue and
                  life skills sessions aimed at stress management and mental
                  health awareness.
                </p>
              </div>
            </div>

            {/* 3rd */}

            <div className="flex items-start space-x-4 justify-center lg:-mt-14">
              {/* Icon */}
              <Image
                width={400}
                height={400}
                src="/HomePage/ThematicAreas/Popup/img-3.svg"
                alt="icon logo"
                className="lg:w-16 lg:h-16 w-12 h-12"
              />
              {/* Content */}
              <div className="">
                <h4 className="lg:text-3xl text-xl lg:w-96">
                  Primary Health and Non-Communicable Diseases (NCDs)
                </h4>
                <p className="text-gray-600 lg:text-xl lg:w-96 mt-5">
                  We facilitate regular awareness and screening programmes to
                  detect and manage conditions that may affect workforce
                  wellbeing.
                </p>
              </div>
            </div>
            

            {/* 4th */}
            <div className="flex items-start space-x-4 justify-center mt-5">
              {/* Icon */}
              <Image
                width={400}
                height={400}
                src="/HomePage/ThematicAreas/Popup/img-4.svg"
                alt="icon logo"
                className="lg:w-16 lg:h-16 w-12 h-12"
              />
              {/* Content */}
              <div className="">
                <h4 className="lg:text-3xl text-xl lg:w-96">
                  Women’s Health and Wellbeing
                </h4>
                <p className="text-gray-600 lg:text-xl lg:w-96 mt-5">
                  Women’s health requires special attention. Through targeted
                  initiatives, we raise awareness about menstrual health and
                  hygiene, maternal health, and family planning and offer
                  screenings for cancers related to women, ensuring
                  comprehensive care for all women in the workforce.
                </p>
              </div>
            </div>

            {/* end */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthWellbeing;
