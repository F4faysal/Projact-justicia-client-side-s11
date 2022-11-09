import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/h1-logo-light.png";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="navbar bg-base-100  container mx-auto ">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"services"}>Services</Link>
            </li>
            <li>
              <Link to={"add-service"}>Add Service</Link>
            </li>
            <li>
              <Link to={"my-reviews"}>My Reviews</Link>
            </li>
            <li>
              <Link to={"blog"}>Blogs</Link>
            </li>
            <>
              {user?.uid ? (
                <li>
                  <button
                    className="btn  btn-warning btn-outline"
                    onClick={handleLogOut}
                  >
                    Log out
                  </button>
                </li>
              ) : (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>

                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </>
              )}
            </>
          </ul>
          {/* mobile */}
        </div>
        <Link to={"/"} className="btn btn-ghost bg-base-100 ">
          <img className="h-full" src={logo} alt="" />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex gap-1">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"services"}>services</Link>
          </li>
          <li>
            <Link to={"add-service"}>Add Service</Link>
          </li>
          <li>
            <Link to={"my-reviews"}>My Reviews</Link>
          </li>
          <li>
            <Link to={"blog"}>Blog</Link>
          </li>
          <>
            {user?.uid ? (
              <>
                <button
                  className="py-1 px-3 text-xs font-medium text-center text-white hover:bg-[#d5aa6d] rounded-lg hover:bg-opacity-20"
                  onClick={handleLogOut}
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>

                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </>
        </ul>
      </div>

      <div className="navbar-end  ">
        <div className="flex items-center gap-2">
          {user?.uid ? (
            <span className=" hidden md:flex justify-center px-2  text-white py-1 bg-[#d5aa6d] bg-opacity-50 rounded-md">
              {user?.displayName || user?.email}
            </span>
          ) : (
            <></>
          )}

          <Link>
            {user?.photoURL ? (
              <div className="avatar online ">
                <div className="w-12 mask mask-squircle">
                  <img
                    data-tip={user?.displayName || user?.email}
                    alt=""
                    src={user?.photoURL}
                  />
                </div>
              </div>
            ) : (
              <FaUser></FaUser>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
