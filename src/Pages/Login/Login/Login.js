import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
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
  const from = location.state?.from?.pathname || "/";

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

        navigate(from, { replace: true });
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
        navigate(from, { replace: true });
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
        navigate(from, { replace: true });
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
      <h1 className=" absolute top-[15%] text-3xl font-bold">
            SignIn <span className="text-[#d5aa6d]">now!</span>
          </h1>
        <div className="text-center lg:text-left">
          
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
                type="button"

                onClick={handleGoogle}

                className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
              >
                <svg
                  class="mr-2 -ml-1 w-4 h-4"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="google"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                >
                  <path
                    fill="currentColor"
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  ></path>
                </svg>
                Sign in with Google
              </button>

              {/* <button
                
                type="submit"
                className="btn btn-active btn-ghost"
              >
                Google{" "}
                <span className="text-2xl ml-2 ">
                  <FaGoogle />
                </span>
              </button> */}

              <button
                onClick={handleGitHub}
                type="submit"
                className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
              >
                Github{" "}
                <span className="text-2xl ml-2 ">
                 
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
