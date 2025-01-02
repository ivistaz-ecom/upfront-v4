import React from "react";
import { WorkplaceData } from "@/utils/data";
import Image from "next/image";

const Workplace = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center container mx-auto ">
        <div>
          <Image
            src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/Upfront-v4/ThematicAreas/img-5.png"
            width={800}
            height={300}
            alt="thematic image"
            className="w-"
          />{" "}
          <div className="bg-black text-white text-center p-3 ">
            <h3 className="lg:text-4xl text-lg mt-3">
              Workplace/Social Dialogues
            </h3>
            <p className="mt-3 pb-3">
              Fostering open dialogue for empowered workplaces
            </p>
          </div>
        </div>

        <div className="overflow-y-auto  mt-10 container mx-auto  flex justify-center items-center">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 justify-center items-center">
            {/* 1st */}
            <div className="flex items-start space-x-4 justify-between">
              {/* Icon */}
              <Image
                width={400}
                height={400}
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/Upfront-v4/ThematicAreas/Popup/img-11.svg"
                alt="icon logo"
                className="lg:w-16 lg:h-16 w-12 h-12"
              />
              {/* Content */}
              <div className="">
                <h4 className="lg:text-3xl text-xl lg:w-96">
                  Effective Communication and Problem Solving
                </h4>
                <p className="text-gray-600 lg:text-xl lg:w-96 mt-5">
                  Effective communication is essential for resolving conflicts
                  and addressing issues in the workplace. We emphasise the
                  importance of clear, respectful communication and provide
                  tools and strategies for effective problem-solving. A
                  significant part of our efforts focus on empathy-building and
                  leadership development, encouraging the workforce to
                  understand and support each other’s perspectives and take on
                  leadership roles in promoting positive change.
                </p>
              </div>
            </div>

            {/* 2nd */}
            <div className="flex items-start space-x-4 lg:-mt-20">
              {/* Icon */}
              <Image
                width={400}
                height={400}
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/Upfront-v4/ThematicAreas/Popup/img-12.svg"
                alt="icon logo"
                className="lg:w-16 lg:h-16 w-12 h-12"
              />
              {/* Content */}
              <div className="">
                <h4 className="lg:text-3xl text-xl lg:w-96">
                  Rights and Responsibilities
                </h4>
                <p className="text-gray-600 lg:text-xl lg:w-96 mt-5">
                  The workforce should be aware of its rights and
                  responsibilities in the workplace. Through workshops, training
                  sessions, and informational resources, we educate the
                  workforce about their legal rights under labour laws and human
                  rights principles, empowering the employees to advocate for
                  themselves and others in the workplace.
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

export default Workplace;
