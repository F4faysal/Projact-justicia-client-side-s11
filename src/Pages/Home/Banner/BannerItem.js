import React from "react";
import "./BannerItem.css";

const BannerItem = ({ slide }) => {
  const { image, id, prev, next , titel} = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} alt="" className="w-full rounded-xl" />
      </div>
      <div className="absolute flex flex-col justify-center md:justify-end  transform -translate-y-1/2 left-24 top-1/4">
        <p className=" text-sm md:text-xl md:font-bold text-white ">{titel}</p>

        <h1 className=" text-xl md:text-6xl  md:font-bold text-white ">
          We are here to protect <br /> any kind of{" "}
          <span className="text-[#9e7247] font-semibold italic ">Violance</span>
        </h1>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-2/3">
        <button className=" btn  btn-outline md:bg-[#9e7247]  text-white  mr-5 rounded-3xl">Contact us today</button>
      </div>
     
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
