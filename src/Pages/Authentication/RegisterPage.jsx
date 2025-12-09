import React, { useState } from "react";
import Container from "../../Components/Shared/Container";
import { Link, useLocation } from "react-router";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
 

  useState(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location?.pathname]);

  return (
    <>
    <title>Clubify | Register</title>
    <Container className="grid place-items-center">
      <div className="card bg-neutral w-full max-w-lg shrink-0 shadow-lg my-20 px-4 sm:px-10 py-5 rounded-2xl">
        <div className="card-body">
          <h2 className="text-center font-bold text-xl mb-2">Register</h2>
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label text-base text-accent">Name</label>
            <input
              type="text"
              className="input w-full bg-secondary-content rounded-full px-5 focus:outline-2  focus:outline-secondary mb-2"
              placeholder="Name"
            />

            {/* photo Upload */}
            <label className="label text-base text-accent">Photo</label>
            <input
              type="file"
              className="file-input w-full rounded-full focus:outline-2  focus:outline-secondary mb-2"
            />

            {/* email */}
            <label className="label text-base text-accent">Email</label>
            <input
              type="email"
              className="input w-full bg-secondary-content rounded-full px-5 focus:outline-2  focus:outline-secondary mb-2"
              placeholder="Email"
            />

            {/* password */}
            <label className="label text-base text-accent">Password</label>

            <div className="relative">
              <input
                type={`${showPassword ? "text" : "password"}`}
                className="input w-full bg-secondary-content rounded-full px-5 pr-12 focus:outline-2  focus:outline-secondary mb-2 "
                placeholder="Password"
              />

              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 text-2xl cursor-pointer text-base-300 z-10"
              >
                {showPassword ? <FaRegEyeSlash /> : <MdOutlineRemoveRedEye />}
              </div>
            </div>

            <button className="btn hover:btn-primary btn-secondary rounded-full shadow-none border-none mt-4">
              Register
            </button>
          </fieldset>

          <p className="text-center ">or</p>

          {/* Google */}
          <button className="btn bg-neutral text-accent border-[#e5e5e5] rounded-full hover:bg-[#e5e5e5]">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>

          <p className="text-center mt-1 text-base-300">
            Already have an account? Please{" "}
            <Link to="/login" className="text-blue-600 hover:underline ">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </Container>
    </>
  );
};

export default RegisterPage;
