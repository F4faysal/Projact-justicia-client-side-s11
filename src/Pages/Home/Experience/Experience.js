import React from "react";

import about1 from "../../../assets/images/about-1.jpg";
import about2 from "../../../assets/images/about-2.jpg";

const Experience = () => {
  return (
    <div className="hero mb-20 h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2">
          <p className="text-sm font-bold text-[#d5aa6d]">About Us</p>
          <h1 className="my-5 text-4xl font-bold text-white">
            We are here to fight against any violance with <samp className="italic text-[#d5aa6d]">experience</samp>
          </h1>
          <p className="py-6">
          The argument in favor of using filler text goes something like this: If you use real content in the design process, anytime you reach a review point you’ll end up reviewing and negotiating the content itself and not the design.
          </p>
          <p className="py-6">
          Aenean tincidunt id mauris id auctor. Donec at ligula lacus. Nulla dignissim mi quis neque interdum, quis porta sem finibus.
          </p>
          <button className="btn btn-primary">Get More Info</button>
        </div>

        {/* img */}
        <div className="relative w-1/2">
          <div>
            <img
              src={about1}
              alt=""
              className="w-full h-full rounded-lg shadow-2xl"
            />
          </div>
          <div className=" hidden md:block absolute  left-2 top-1/4 w-1/2  rounded-lg shadow-2xl">
            <img src={about2} alt="" />
            <div className="absolute left-3 right-5 top-3 bottom-3 bg-white bg-opacity-60  ">
              <div class="m-0 p-0">
                <div className="absolute left-6 bottom-16">
                  <h2 className="text-black">
                    <span className="text-9xl font-bold">35</span> <br />
                    <span className="text-4xl font-semibold">
                      years of experience
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
