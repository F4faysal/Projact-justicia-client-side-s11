

import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { FaArrowAltCircleRight, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginPhoto from "../../../assets/images/lAW.png";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const providergit = new GithubAuthProvider();
  const [error, setError] = useState("");
  const location = useLocation();
  const { signIn, setLoading, providerLogin } = useContext(AuthContext);
  const from = location.state?.from?.pathname || '/';


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
       
        navigate( from , { replace : true });
        if (user.uid) {
         
        } else {
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGoogle = () => {
    providerLogin(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        navigate( from , { replace : true });
        if (user.uid) {
          
        } else {
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleGitHub = () => {
    providerLogin(providergit)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        navigate( from , { replace : true });
        if (user.uid) {
          
        } else {
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">
            SignIn <span className="text-yellow-400">now!</span>
          </h1>
          <img src={loginPhoto} alt="" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link
                  to={"/register"}
                  className="label-text-alt link link-hover"
                >
                  I don't have an account
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-warning ">
                Login{" "}
                <span className="text-2xl ml-5">
                  <FaArrowAltCircleRight />
                </span>
              </button>
            </div>
            <p className="label-text text-red-500">{error}</p>

            <div className="mt-2 flex justify-center gap-3">
              <button
                onClick={handleGoogle}
                type="submit"
                className="btn btn-active btn-ghost"
              >
                Google{" "}
                <span className="text-2xl ml-2 ">
                  <FaGoogle />
                </span>
              </button>
              <button
                onClick={handleGitHub}
                type="submit"
                className="btn btn-active btn-ghost"
              >
                Github{" "}
                <span className="text-2xl ml-2 ">
                  <FaGithub />
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
