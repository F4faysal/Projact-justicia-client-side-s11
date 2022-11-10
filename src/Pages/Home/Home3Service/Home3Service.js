import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../Services/Card/Card";

const Home3Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://justicia-server.vercel.app/service/3")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  console.log("faysa;", services);

  return (
    <div className="h-full md:h-[100vh] flex justify-evenly items-center flex-col bg-white bg-opacity-10 rounded">
      <div className="text-center">
        <h2 className="text-[#d5aa6d] text-sm">Services</h2>
        <h1 className="text-2xl md:text-4xl font-bold text-white">
          We are here to fight against any <br />
          violance with{" "}
          <span className="italic font-semibold text-[#d5aa6d] ">
            experience
          </span>
        </h1>

        <hr className="my-2 mx-auto w-5 h-1 bg-[#d5aa6d] rounded border-0 md:my-4" />
      </div>
      <div className="grid p-2 m-2 grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 justify-items: center">
        {" "}
        {services.map((service) => (
          <Card key={service._id} service={service}></Card>
        ))}
      </div>

      <div>
        <Link
          to={"/services"}
          type="button"
          class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Icon description</span>
        </Link>
      </div>
    </div>
  );
};

export default Home3Service;
