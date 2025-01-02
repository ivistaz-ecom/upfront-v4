import React from "react";
import { FinancialData } from "@/utils/data";
import Image from "next/image";

const Financial = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center container mx-auto ">
        <div>
          <Image
            src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/Upfront-v4/ThematicAreas/img-4.png"
            width={800}
            height={300}
            alt="thematic image"
            className="w-"
          />{" "}
          <div className="bg-black text-white text-center p-3 ">
            <h3 className="lg:text-4xl text-xl mt-3">
              Financial and Digital Inclusion
            </h3>
            <p className="mt-3 pb-3">Bridging gaps with financial know-how</p>
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
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/Upfront-v4/ThematicAreas/Popup/img-9.svg"
                alt="icon logo"
                className="lg:w-16 lg:h-16 w-12 h-12"
              />
              {/* Content */}
              <div className="">
                <h4 className="lg:text-3xl text-xl lg:w-96">
                  Financial Planning and Service Linkages
                </h4>
                <p className="text-gray-600 lg:text-xl lg:w-96 mt-5">
                  Financial literacy is the foundation of financial wellbeing.
                  Our workshops and resources on financial planning, budgeting,
                  and saving equip employees with practical skills to manage
                  their finances effectively. Whether it’s setting financial
                  goals, creating a budget, or building a savings plan, we
                  provide the tools and guidance needed to make informed
                  financial decisions. Upfront also bridges the gap between the
                  workforce and a range of financial institutions and service
                  providers, ensuring they have access to the products and
                  resources they need to meet their financial goals, such as
                  opening bank accounts, obtaining loans, and making investments
                  to ensure their financial and overall wellbeing.
                </p>
              </div>
            </div>

            {/* 2nd */}

            <div className="flex items-start space-x-4 lg:-mt-64">
              {/* Icon */}
              <Image
                width={400}
                height={400}
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/Upfront-v4/ThematicAreas/Popup/img-10.svg"
                alt="icon logo"
                className="lg:w-16 lg:h-16 w-12 h-12"
              />
              {/* Content */}
              <div className="">
                <h4 className="lg:text-3xl text-xl lg:w-96">
                  Digital Financial Literacy
                </h4>
                <p className="text-gray-600 lg:text-xl lg:w-96 mt-5">
                  In today’s digital age, understanding how to navigate digital
                  financial services is essential. We provide information and
                  create awareness on digital financial literacy, covering
                  topics such as online banking, mobile payments, and
                  cybersecurity. By improving digital literacy skills, we
                  empower our workforce to access and utilise digital financial
                  services safely and efficiently.
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

export default Financial;
