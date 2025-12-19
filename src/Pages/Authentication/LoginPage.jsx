import React, { useState } from "react";
import { Link, Navigate, useLocation } from "react-router";
import Container from "../../Components/Shared/Container";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useForm } from "react-hook-form";
import GoogleLogin from "./GoogleLogin";
import useAuthHook from "../../Hooks/useAuthHook";
import { sweetAlert } from "../../Utils/Alert/SweetAlert";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {loginUser,setLoading,user}=useAuthHook()
  const location = useLocation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useState(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location?.pathname]);

  if(user){
    return <Navigate to="/"></Navigate>
  }

  

  const handleLogin = (data) => {
    const email=data?.email
    const password=data?.password

    loginUser(email,password).then(()=>{
      sweetAlert('success','Logged in successfully.')
      reset()
      setLoading(false)
    }).catch(error=>{
      console.error(error.code)
      sweetAlert('error','Invalid email or password.')
      setLoading(false)
    })
  };

  return (
    <>
      <title>Clubify | Login</title>
      <Container className="grid place-items-center">
        <div className="card bg-neutral w-full max-w-lg shrink-0 shadow-lg my-20 px-4 sm:px-10 py-5 rounded-2xl">
          <div className="card-body">
            <h2 className="text-center font-bold text-xl mb-2">Log in</h2>
            <form onSubmit={handleSubmit(handleLogin)}>
              <fieldset className="fieldset">
                {/* email */}
                <label className="label text-base text-accent">Email</label>
                <input
                  type="text"
                  {...register("email", {
                    required: "Email is required.",
                    setValueAs: (value) => value.trim(),
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter valid email.",
                    },
                  })}
                  className="input w-full bg-secondary-content rounded-full px-5 focus:outline-2  focus:outline-secondary "
                  placeholder="Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm ">
                    {errors.email.message}
                  </p>
                )}

                {/* password */}
                <label className="label text-base text-accent mt-2">Password</label>

                <div className="relative">
                  <input
                    type={`${showPassword ? "text" : "password"}`}
                    {...register("password", {
                      required: "Password is required.",
                    })}
                    className="input w-full bg-secondary-content rounded-full px-5 pr-12 focus:outline-2  focus:outline-secondary mb-2 "
                    placeholder="Password"
                  />
                  {errors.password && !errors.email && (
                    <p className="text-red-500 text-sm ">
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
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn hover:btn-primary btn-secondary rounded-full shadow-none border-none mt-4">
                  Log in
                </button>
              </fieldset>
            </form>

            <p className="text-center ">or</p>

            {/* Google */}
            <GoogleLogin></GoogleLogin>

            <p className="text-center mt-1 text-base-300">
              Don't have an account? Please{" "}
              <Link to="/register" className="text-blue-600 hover:underline ">
                Register
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default LoginPage;
