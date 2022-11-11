import React from "react";
import { Link } from "react-router-dom";


const ReviewTable = ({ r , handelDelete }) => {

  const { review, user , _id , email } = r;

  return (
    <tr className="flex md:block flex-col md:flex-row ">
      <th>
        <button onClick={() =>handelDelete(_id)} className="btn btn-xs">
          X
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-8 h-8">
              <img
                src={user.photoURL}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className=" opacity-50 text-[9px]"> Author Name</div>
            <div className="text-sm font-semibold">{user?.displayName}</div>
          </div>
        </div>
      </td>
      <p className="text-white w-10/12 ml-8 overflow-auto">
     
      {review}
     
      </p>
      
      <th>
        <Link to={`/edit-review/${_id}`} className="btn btn-ghost btn-xs">Edit</Link>
      </th>
    </tr>
  );
};

export default ReviewTable;
