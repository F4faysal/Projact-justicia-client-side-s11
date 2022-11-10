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
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={user.photoURL}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-semibold text-sm"> Author Name</div>
            <div className="text-sm opacity-50">{user?.displayName}</div>
          </div>
        </div>
      </td>
      <td>
       {review}
        <br />
        <span className="badge badge-ghost badge-sm">
          Desktop Support Technician
        </span>
      </td>
      
      <th>
        <Link to={`/edit-review/${_id}`} className="btn btn-ghost btn-xs">Edit</Link>
      </th>
    </tr>
  );
};

export default ReviewTable;
