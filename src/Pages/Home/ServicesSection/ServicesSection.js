import React from "react";
import "./ServicesSection.css";

const ServicesSection = () => {
  return (
    <div className="relative mt-0  mb-5 bg-white h-[450px]">
      <div className="icon-tw flex justify-center">
        <div className="">
          <div>
            <p className="text-[#d5aa6d]">Fun Fact</p>
            <h1 className="text-4xl font-medium text-black">
              We feel very proud for our <br /> great{" "}
              <span className="italic text-[#d5aa6d]">achievement</span>
            </h1>
          </div>
          <div className=" text-white  flex  flex-col md:flex-row gap-5 my-5 ">
            <div className="bg-[#d5aa6d]  h-40 w-full md:w-52  rounded flex flex-col justify-center items-center">
              <h1 className="text-3xl font-bold">1825+</h1>
              <h3 className="font-semibold text-xl">Completed works</h3>
            </div>
            <div className="bg-black h-40 w-full md:w-52 rounded flex flex-col justify-center items-center">
              <h1 className="text-3xl font-bold">532+</h1>
              <h3 className="font-semibold text-xl">Satisfied clients</h3>
            </div>
            <div className="bg-[#d5aa6d]  h-40 w-full md:w-52 rounded  flex flex-col justify-center items-center">
              <h1 className="text-3xl font-bold">69+</h1>
              <h3 className="font-semibold text-xl">Winning awards</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
