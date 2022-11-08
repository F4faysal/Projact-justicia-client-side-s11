import React from "react";

import about1 from "../../../assets/images/about-1.jpg";
import about2 from "../../../assets/images/about-2.jpg";

const Experience = () => {
  return (
    <div className="hero my-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2">
          <p className="text-2xl font-bold text-orange-600">About Us</p>
          <h1 className="my-5 text-5xl font-bold">
            We are qualified <br />
            & of experience <br />
            in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <p className="py-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
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
          <div className="absolute  left-2 top-1/3 w-1/2  rounded-lg shadow-2xl">
            <img src={about2} alt="" />
            <div className="absolute left-3 right-5 top-3 bottom-3 bg-white bg-opacity-60  ">
              <div class="m-0 p-0">
               <div className="absolute left-6 bottom-16">
               <h2 className="text-black">
                  <span className="text-9xl font-bold">35</span> <br /><span className="text-4xl font-semibold">years of experience</span>
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
