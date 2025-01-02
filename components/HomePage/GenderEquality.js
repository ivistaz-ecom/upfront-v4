import React from "react";
import Image from "next/image";
import { GenderEqualityData } from "@/utils/data";

const GenderEquality = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center container mx-auto ">
        <div>
          <Image
            src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/Upfront-v4/ThematicAreas/img-2.png"
            width={800}
            height={300}
            alt="thematic image"
            className="w-"
          />{" "}
          <div className="bg-black text-white text-center p-3 ">
            <h3 className="lg:text-4xl text-lg mt-3">
              Gender Equality, Inclusion and Diversity
            </h3>
            <p className="mt-3 pb-3">
              Creating spaces where everyone feels safe, valued, and included
            </p>
          </div>
        </div>

        <div className="overflow-y-auto  mt-10 container mx-auto  flex justify-center items-center">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 justify-center items-center">
            {/* 1st */}
            <div className="flex items-start space-x-4 ">
              {/* Icon */}
              <Image
                width={400}
                height={400}
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/Upfront-v4/ThematicAreas/Popup/img-5.svg"
                alt="icon logo"
                className="lg:w-16 lg:h-16 w-12 h-12"
              />
              {/* Content */}
              <div className="">
                <h4 className="lg:text-3xl text-xl lg:w-96">
                  Addressing Sexual Harassment and Gender-Based Violence
                </h4>
                <p className="text-gray-600 lg:text-xl lg:w-96 mt-5">
                  We are committed to creating a safe and respectful work
                  environment for all. Through comprehensive prevention,
                  mitigation, and redressal mechanisms, Upfront actively works
                  to address sexual harassment and gender-based violence in the
                  workplace. This includes raising awareness, providing
                  information and resources, conducting policy reviews, and
                  implementing reformative practices to ensure accountability
                  and support for the victims.
                </p>
              </div>
            </div>

            {/* 2nd */}
            <div className="flex items-start space-x-4 lg:-mt-9">
              {/* Icon */}
              <Image
                width={400}
                height={400}
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/Upfront-v4/ThematicAreas/Popup/img-6.svg"
                alt="icon logo"
                className="lg:w-16 lg:h-16 w-12 h-12"
              />
              {/* Content */}
              <div className="">
                <h4 className="lg:text-3xl text-xl lg:w-96">
                  Creating Inclusive Workplaces
                </h4>
                <p className="text-gray-600 lg:text-xl lg:w-96 mt-5">
                  We recognise the importance of making workplaces accessible
                  and inclusive for everyone, regardless of caste, creed, gender
                  identity, or physical ability. Our initiatives focus on
                  removing barriers to participation and creating a culture of
                  acceptance and belonging. We strive to foster an environment
                  where all employees feel valued, respected, and empowered to
                  contribute their unique perspectives and talents.
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

export default GenderEquality;
