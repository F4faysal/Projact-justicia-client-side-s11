import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

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
          alert("user updated");
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
    <div>
      <form onSubmit={handleUpdateUser}>
        
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

     
        <button className="btn" type="submit">
          Edit Review
        </button>
      </form>


    </div>
  );
};

export default EditReview;
