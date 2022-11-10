import React from "react";

const ReviewTable = ({r , setDisplayUsers , displayUsers}) => {
    const {review ,_id} = r

    const handelDelete = (id) => {
        const agrre = window.confirm(`Are you sewore to delete`)
        if(agrre){
           console.log('deleting user with id: ', id)
           fetch(`http://localhost:5000/review/${id}`, {
            method : 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                  // console.log(data)
                  if (data.deletedCount > 0) {
                    alert('User deleted successfully.');
                    const remainingUsers = displayUsers
                        .filter(usr => usr._id !== displayUsers._id);
                    setDisplayUsers(remainingUsers);
                }
            })
        
        }
    }

  return (
    <tr>
      <th>
   
        <button onClick={()=>handelDelete(_id)} className="btn btn-xs">X</button>
       
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src="/tailwind-css-component-profile-2@56w.png"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">Hart Hagerty</div>
            <div className="text-sm opacity-50">United States</div>
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
      <td>Purple</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default ReviewTable;
