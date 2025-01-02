import React from "react";
import { SocialProtectionData } from "@/utils/data";
import Image from "next/image";

const SocialProtection = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center container mx-auto ">
        <div>
          <Image
            src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/Upfront-v4/ThematicAreas/img-6.png"
            width={800}
            height={300}
            alt="thematic image"
            className="w-"
          />{" "}
          <div className="bg-black text-white text-center p-3 ">
            <h3 className="lg:text-4xl text-lg mt-3">Social Protection</h3>
            <p className="mt-3 pb-3">
              Strengthening safety nets for every workforce
            </p>
          </div>
        </div>

        <div className="overflow-y-auto  mt-10 container mx-auto  flex justify-center items-center">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 justify-center items-center">
            {/* 1st */}
            <div className="flex items-start space-x-4 justify-between lg:-mt-7">
              {/* Icon */}
              <Image
                width={400}
                height={400}
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/Upfront-v4/ThematicAreas/Popup/img-13.svg"
                alt="icon logo"
                className="w-12 h-12 lg:w-16 lg:h-16"
              />
              {/* Content */}
              <div className="">
                <h4 className="lg:text-3xl  text-xl lg:w-96">
                  Awareness and Access
                </h4>
                <p className="text-gray-600 lg:text-xl lg:w-96 mt-5">
                  Social protection schemes ensure a safety net for the
                  vulnerable workforce. By improving awareness and access, we
                  ensure that the workforce do not fall through the cracks and
                  receive the assistance they need when facing challenges.
                  Through awareness campaigns, workshops, and information
                  sessions, we empower the workforce with knowledge about
                  available support services and how to access them.
                </p>
              </div>
            </div>

            {/* 2nd */}
            <div className="flex items-start space-x-4">
              {/* Icon */}
              <Image
                width={400}
                height={400}
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/Upfront-v4/ThematicAreas/Popup/img-14.svg"
                alt="icon logo"
                className="w-12 h-12 lg:w-16 lg:h-16"
              />
              {/* Content */}
              <div className="">
                <h4 className="lg:text-3xl  text-xl lg:w-96">
                  Mapping and Research
                </h4>
                <p className="text-gray-600 lg:text-xl lg:w-96 mt-5">
                  Understanding the needs and vulnerabilities of the workforce
                  is essential for designing effective social protection
                  interventions. Upfront conducts mapping exercises and research
                  studies to identify gaps in coverage, assess the effectiveness
                  of existing programmes, and gather insights into emerging
                  needs and trends with different workforces/groups. By
                  leveraging data and research findings, we can tailor our
                  interventions to better meet the needs of the workforce and
                  address systemic challenges.
                </p>
              </div>
            </div>

            {/* 3rd */}
            <div className="flex items-start space-x-4 justify-between">
              {/* Icon */}
              <Image
                width={400}
                height={400}
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/Upfront-v4/ThematicAreas/Popup/img-15.svg"
                alt="icon logo"
                className="w-12 h-12 lg:w-16 lg:h-16"
              />
              {/* Content */}
              <div className="">
                <h4 className="lg:text-3xl  text-xl lg:w-96">
                  Universal Help Desk
                </h4>
                <p className="text-gray-600 lg:text-xl lg:w-96 mt-5">
                  We believe in providing easy access to information and
                  assistance for the workforce. However, in some cases, this may
                  not be enough. Setting up a Universal Help Desk in partnership
                  with workplaces/systems serves as a central point of contact
                  for inquiries, support requests, and guidance on social
                  protection services, ensuring quality and sustainable impact.
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

export default SocialProtection;
