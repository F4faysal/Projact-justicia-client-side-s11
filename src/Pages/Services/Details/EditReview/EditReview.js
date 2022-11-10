import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditReview = () => {
  const data = useLoaderData();

  const [user, setUser] = useState(data);

  const handleUpdateUser = (event) => {
    event.preventDefault();
    // console.log(user);
    fetch(`http://localhost:5000/review/${data._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
            toast("Review Updated")
          console.log(data);
        }
      });
  };

  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };

  return (
    <div className="container mx-auto mt-10 h-[100vh] flex justify-center ">
        <ToastContainer />
      <form className=" w-10/12  md:w-1/2 " onSubmit={handleUpdateUser}>
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleInputChange}
          defaultValue={data.review}
          type="text"
          name="review"
          placeholder="Review Edit"
          required
        ></textarea>

      <div className="w-full flex justify-center mt-4">
      <button
          type="submit"
          className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Edit Review
          </span>
        </button>
      </div>

   
      </form>
    </div>
  );
};

export default EditReview;
