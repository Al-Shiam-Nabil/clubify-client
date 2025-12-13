import React, { useEffect, useState } from "react";
import Container from "../../Components/Shared/Container";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useForm } from "react-hook-form";

import GoogleLogin from "./GoogleLogin";
import useAuthHook from "../../Hooks/useAuthHook";
import { sweetAlert } from "../../Utils/Alert/SweetAlert";
import useAxiosSecure from "../../Hooks/useAxiossecure";
import { useMutation } from "@tanstack/react-query";

import { uploadImage } from "../../Utils/uploadImage";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { registerUser, setLoading, updateUserInfo } = useAuthHook();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location?.pathname]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const mutation = useMutation({
    mutationFn: (userInfo) => {
      return axiosSecure.post("/users", userInfo);
    },
    onSuccess: (data) => {
      if (data?.data?.insertedId) {
        sweetAlert("success", "Registration successfully completed.");
        reset();
        navigate("/");
        setLoading(false);
      }
    },
  });

  const handleRegister = async (data) => {
    const name = data?.name;
    const email = data?.email;
    const password = data?.password;
    const photoURL = data?.photoURL;

    const image = await uploadImage(photoURL);

    const userInfo = { name, email, photoURL: image };

    registerUser(email, password)
      .then(() => {
        updateUserInfo({ displayName: name, photoURL: image })
          .then(() => {
            mutation.mutate(userInfo);
          })
          .catch((error) => {
            console.error(error);
            let message = "Something went wrong. Please try again.";

            if (error.code === "auth/requires-recent-login") {
              message = "You need to re-login to update your profile.";
            } else if (error.code === "auth/network-request-failed") {
              message = "Network error. Check your connection and try again.";
            } else if (error.code === "auth/invalid-profile-update") {
              message = "Invalid profile information provided.";
            }

            sweetAlert("error", message);
            setLoading(false);
          });

        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        let message = "Something went wrong. Please try again.";

        if (error.code === "auth/email-already-in-use") {
          message =
            "This email is already in use. Please login or use another email.";
        } else if (error.code === "auth/network-request-failed") {
          message =
            "Network error. Please check your connection and try again.";
        }

        sweetAlert("error", message);
        setLoading(false);
      });
  };

  return (
    <>
      <title>Clubify | Register</title>
      <Container className="grid place-items-center">
        <div className="card bg-neutral w-full max-w-lg shrink-0 shadow-lg my-20 px-4 sm:px-10 py-5 rounded-2xl">
          <div className="card-body">
            <h2 className="text-center font-bold text-xl mb-2">Register</h2>
            <form onSubmit={handleSubmit(handleRegister)}>
              <fieldset className="fieldset">
                {/* Name */}
                <label className="label text-base text-accent">Name</label>
                <input
                  type="text"
                  {...register("name", {
                    required: "Name is required.",
                    setValueAs: (value) => value.trim(),
                  })}
                  className="input w-full bg-secondary-content rounded-full px-5 focus:outline-2  focus:outline-secondary "
                  placeholder="Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}

                {/* photo Upload */}
                <label className="label text-base text-accent mt-2">
                  Photo
                </label>
                <input
                  type="file"
                  {...register("photoURL")}
                  className="file-input w-full rounded-full focus:outline-2  focus:outline-secondary "
                />

                {/* email */}
                <label className="label text-base text-accent mt-2">
                  Email
                </label>
                <input
                  type="text"
                  {...register("email", {
                    required: "Email is required.",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter valid email.",
                    },
                  })}
                  className="input w-full bg-secondary-content rounded-full px-5 focus:outline-2  focus:outline-secondary "
                  placeholder="Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}

                {/* password */}
                <label className="label text-base text-accent mt-2">
                  Password
                </label>

                <div className="relative">
                  <input
                    type={`${showPassword ? "text" : "password"}`}
                    {...register("password", {
                      required: "Password is required",
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                        message:
                          "Password must contain at least 1 uppercase, 1 lowercase letter and be at least 6 characters long",
                      },
                    })}
                    className="input w-full bg-secondary-content rounded-full px-5 pr-12 focus:outline-2  focus:outline-secondary "
                    placeholder="Password"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1.5">
                      {errors.password.message}
                    </p>
                  )}

                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2 text-2xl cursor-pointer text-base-300 z-10"
                  >
                    {showPassword ? (
                      <FaRegEyeSlash />
                    ) : (
                      <MdOutlineRemoveRedEye />
                    )}
                  </div>
                </div>

                <button className="btn hover:btn-primary btn-secondary rounded-full shadow-none border-none mt-4">
                  Register
                </button>
              </fieldset>
            </form>

            <p className="text-center ">or</p>

            <GoogleLogin></GoogleLogin>

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
