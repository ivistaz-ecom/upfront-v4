'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <>
      {/* Top Banner Section */}
      <div className="bg-[#0A0A0A]  lg:pt-24 pt-20">
        <div className="text-white">
          <p className="text-center pt-10 text-2xl">OUR STORY</p>
        </div>
        <div className="flex text-[#B9B9B9] items-end justify-start mt-4 p-4 container mx-auto">
          <p>
            <Link href="/">Home</Link> /{" "}
          </p>
          <p className="px-1"> Our Story</p>
        </div>
      </div>

      {/* Image Banner Section */}
      <div className="relative">
        <Image
          src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/Upfront-v4/ourStory/banner.png"
          width={600}
          height={500}
          className="w-full"
          alt="Our Story Banner"
        />

        {/* "We Believe" Section as Overlay */}
        <div className="lg:absolute bottom-0 rounded-t-xl lg:left-1/2 lg:top-2/3 transform lg:-translate-x-1/2 container mx-auto bg-white py-8 flex flex-col justify-center items-center">
          <div className="container mx-auto px-4 text-center">
            <h2 className="lg:text-3xl text-2xl lg:pt-40 mb-10">We Believe</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="flex flex-col items-center text-center lg:border-r-2 border-b-2 py-4 lg:border-b-0">
                <div className="rounded-full mb-4">
                  <Image
                  width={50}
                  height={50}
                    src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/Upfront-v4/ourStory/img-1.svg"
                    alt="Potential Icon"
                    className="w-16 h-16"
                  />
                </div>
                <h3 className="para-color p-2">Every human being has potential</h3>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center text-center border-b-2 py-4 lg:border-b-0">
                <div className="rounded-full mb-4">
                  <Image
                  width={50}
                  height={50}
                    src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/Upfront-v4/ourStory/img-2.svg"
                    alt="Wellbeing Icon"
                    className="w-16 h-16"
                  />
                </div>
                <h3 className="para-color p-2">
                  Wellbeing outcomes for the workforce and businesses can both
                  be achieved; but not at the cost of each other
                </h3>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-center text-center lg:border-l-2">
                <div className="rounded-full mb-4">
                <Image
                  width={50}
                  height={50}
                    src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/Upfront-v4/ourStory/img-3.svg"
                    alt="Human Rights Icon"
                    className="w-16 h-16 mt-3"
                    priority
                  />
                </div>
                <h3 className="para-color mt-3 p-2">
                  Human rights are central to human and economic development
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
