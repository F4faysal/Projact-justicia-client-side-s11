import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import ReviewTable from "../Pages/Services/Details/ReviewTable";


const MyReviews = () => {
  const [getReview, setTheGetReview] = useState([]); //get
  const { user } = useContext(AuthContext);
  
  // console.log('children',children)

  useEffect(() => {
    fetch(`https://justicia-server.vercel.app/review?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setTheGetReview(data);
        // console.log(getReview);
      });
  }, [getReview]);

  const [setDisplayUsers, displayUsers] = useState();

  const handelDelete = (id) => {
    const agrre = window.confirm(`Are you sewore to delete`);
    if (agrre) {
      console.log("deleting user with id: ", id);
      fetch(`https://justicia-server.vercel.app/review/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("User deleted successfully.");
            const remainingUsers = displayUsers.filter(
              (usr) => usr._id !== displayUsers._id
            );
            setDisplayUsers(remainingUsers);
          }
        });
    }
  };

  return (
    <div className="h-[100]">
      <div className="bacg-img flex justify-center items-center bg-cover bg-center">
        <h1 className="text-5xl text-white">Services Review</h1>
      </div>
      <div className="container mx-auto">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead className="flex flex-col md:flex-row md:block ">
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
              {getReview?.map((r) =>  <ReviewTable
                  key={r._id}
                  r={r}
                  handelDelete={handelDelete}
                ></ReviewTable>)}
              {/* <!-- row 1 end --> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
