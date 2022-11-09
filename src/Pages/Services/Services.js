import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "./Card/Card";
import "./service.css";

const Services = () => {
  const data = useLoaderData();

  return (
    <div className="h-[100]">
      <div className="bacg-img flex justify-center items-center bg-cover bg-center">
        <h1 className="text-5xl text-white">Services</h1>
      </div>
      <div className=" flex flex-col items-center justify-center">
        <div className="w-11/12 grid p-3 m-5 grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
          {data.map((service) => (
            <Card key={service._id} service={service}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
