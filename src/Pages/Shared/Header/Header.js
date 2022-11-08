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
              <Link to={"courses"}>Courses</Link>
            </li>
           
            <li>
              <Link to={"blog"}>Blogs</Link>
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

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"courses"}>Courses</Link>
          </li>
          <li>
            <Link to={"blog"}>Blog</Link>
          </li>
          <>
            {user?.uid ? (
              <>
                <button
                  className="btn  btn-warning btn-outline"
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
            <span className=" hidden md:flex justify-center  btn btn-outline btn-warning">
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
