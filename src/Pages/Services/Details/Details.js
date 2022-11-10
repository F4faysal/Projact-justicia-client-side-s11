import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Review from "./Review";

const Details = () => {
  const service = useLoaderData();
  const { title, img, price, details, img_details, lowCod, _id } = service;
  const [review, setReview] = useState({}); //POST
  const { user } = useContext(AuthContext);

  const handelReview = (event) => {
    event.preventDefault();
    if (user) {
      // console.log(review, user);

      fetch("https://justicia-server.vercel.app/review", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(review),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast("Thanks for your opinion");
            event.target.reset();
          }
        });
    } else {
      toast("Please login ..");
    }
    
  };

  const handelInputBlur = (event) => {
    const filde = event.target.name;
    const value = event.target.value;
    const newReview = { ...review,  email: user?.email , user  };
    newReview[filde] = value;
    setReview(newReview );
  };

  return (
    <div className="h-[100]  ">
      <ToastContainer />
      <div className="bacg-img flex justify-center items-center bg-cover bg-center">
        <h1 className="text-5xl text-white">
          {title} <span className="text-[#9e7247]">{lowCod}</span>
        </h1>
      </div>
      <div className=" container mx-auto flex flex-col items-start justify-center">
        <div className="my-5 grid grid-cols-2 gap-9">
          <div className="">
            <img className="w-full" src={img} alt="Album" />
            <div>
              <div className="card-body">
                <h2 className="text-5xl my-2 text-white">{title}</h2>
                <h2 className="text-5xl my-1 text-[#9e7247]">{lowCod}</h2>
                <div className="">
                  <img
                    className="float-right w-[60%] h-[30%]"
                    src={img_details}
                    alt=""
                  />
                  <p className="text-[20px]">{details}</p>
                </div>
                <p className=" text-5xl font-bold text-[#9e7247]">${price}</p>
              </div>
            </div>
          </div>

          <div>
            {/* review  send */}
            <form onSubmit={handelReview}>
              <label for="chat" className="sr-only">
                Your review
              </label>
              <div className="flex items-center py-2 px-3 bg-gray-50 rounded-lg dark:bg-gray-700">
                <button
                  type="button"
                  className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Upload image</span>
                </button>
                <button
                  type="button"
                  className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Add emoji</span>
                </button>
                <textarea
                  onBlur={handelInputBlur}
                  name="review"
                  id="chat"
                  rows="1"
                  className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Review..."
                ></textarea>
                <button
                  type="Submit"
                  className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 rotate-90"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                  </svg>
                  <span className="sr-only">Send message</span>
                </button>
              </div>
            </form>

            {/* review display */}
            <Review></Review>
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
