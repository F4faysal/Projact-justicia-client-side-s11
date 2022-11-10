import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import ReviewTable from "./ReviewTable";

const Review = () => {
  const [getReview, setTheGetReview] = useState([]); //get
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => {
        setTheGetReview(data);
        console.log(getReview);
      });
  },[]);

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>
              <label>
                {/* <input type="checkbox" className="checkbox" /> */}
              </label>
            </th>
            <th>Services Review </th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {getReview?.map((r) => (
            <ReviewTable key={r._id} r={r}></ReviewTable>
          ))}
          {/* <!-- row 1 end --> */}
        </tbody>
      </table>
    </div>
  );
};

export default Review;
