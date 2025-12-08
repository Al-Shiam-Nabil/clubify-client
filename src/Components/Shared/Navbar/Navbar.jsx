import React from "react";
import Container from "../Container";
import { NavLink } from "react-router";
import MyLink from "./MyLink";

const Navbar = () => {
  const links = (
    <>
      <MyLink to='/'>Home</MyLink>
      <MyLink to='/clubs'>All Clubs</MyLink>
      <MyLink to='/events'>Club Events</MyLink>
    </>
  );

  return (
    <div className=" bg-primary shadow-sm ">
      <Container className="navbar">
        {" "}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" lg:hidden mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="text-2xl font-primary text-secondary font-bold">
            Clubify
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex justify-center items-center gap-10">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
