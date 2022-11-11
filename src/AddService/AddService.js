import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

const AddService = () => {
  //   const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const lawCod = form.lastName.value;
    const imgurl = form.email.value ;
    const imgDetailsUrl = form.email.value ;
    const price = form.phone.value;
    const servicedetails = form.message.value;

    const service = {
        title: title,
        lowCod: lawCod,
        img: imgurl,
        img_details: imgDetailsUrl,
        price: price,
        details:servicedetails
    };

    console.log(service  )

    if(user){
        fetch("https://justicia-server.vercel.app/service", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(service),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.acknowledged) {
                alert("Add Service successfully");
                form.reset();
              }
            })
            .catch((er) => console.error(er));
    }
    else{
        alert('Added Service plg Login')
    }
  };

  return (
    <div className="h-[100vh]">
      <div className="bacg-img flex justify-center items-center bg-cover bg-center">
        <h1 className="text-5xl text-white">
          <span className="">Add a New Service</span>
        </h1>
      </div>
      <div className="container mx-auto flex justify-center items-center mt-5 ">
        <div className="card card-side bg-base-100 shadow-x">
          <form onSubmit={handlePlaceOrder}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <input
                name="title"
                type="text"
                placeholder="Set service title"
                className="input input-ghost w-full  input-bordered"
                required
              />

              <input
                name="lastName"
                type="text"
                placeholder="Set service LawCod"
                className="input input-ghost w-full  input-bordered"
                required
              />
              <input
                name="phone"
                type="number"
                placeholder="Set service price"
                className="input input-ghost w-full  input-bordered"
                required
              />
              <input
                name="email"
                type="url"
                placeholder="Set service img url"
                required
                className="input input-ghost w-full  input-bordered"
              />
              <input
                name="firstName"
                type="url"
                placeholder="Set service img_details url"
                required
                className="input input-ghost w-full  input-bordered"
              />
            </div>
            <textarea
              name="message"
              className="textarea textarea-bordered h-24 w-full mt-5"
              placeholder="Set service details"
              required
            ></textarea>
            <div className="flex justify-center">
              <input className="btn" type="submit" value="Place Your Order" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
