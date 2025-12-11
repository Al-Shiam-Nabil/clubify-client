import Container from "../Container";
import { NavLink } from "react-router";
import MyLink from "./MyLink";
import useAuthHook from "../../../Hooks/useAuthHook";
import defaultUserImage from "../../../assets/user.png";
import { CgProfile } from "react-icons/cg";
import { TbLogout } from "react-icons/tb";

const Navbar = () => {
  const { user, loading } = useAuthHook();

  const links = (
    <>
      <MyLink to="/">Home</MyLink>
      <MyLink to="/clubs">All Clubs</MyLink>
      <MyLink to="/events">Club Events</MyLink>
    </>
  );

  return (
    <div className=" bg-primary shadow-sm">
      <Container className="navbar relative">
        {" "}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" lg:hidden mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#22C55E"
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
              className="menu menu-md dropdown-content bg-primary/70 backdrop-blur-sm rounded-box z-1 mt-3 w-52 p-4 shadow"
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
          {loading ? (
            <div className="skeleton h-32 w-32"></div>
          ) : user ? (
            <div className="dropdown dropdown-bottom dropdown-end">
              <div tabIndex={0} role="button" className="">
                <img
                  src={user?.photoURL || defaultUserImage}
                  alt=""
                  className="h-12 w-12 border-3 border-secondary rounded-full object-cover cursor-pointer"
                />
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content bg-primary/70 backdrop-blur-sm text-neutral rounded-box z-1 w-52 p-4 shadow-sm"
              >
                <li>
                  <p className="truncate capitalize text-sm mb-1">
                    {user?.displayName}
                  </p>
                  <p className="truncate text-sm border-b border-base-100 pb-2">
                    {user?.email}
                  </p>
                </li>
                <li className="my-2 ">
                  <div className="inline-flex items-center gap-2">
                    <CgProfile className="text-base" />
                  <MyLink to="/profile"> Profile</MyLink>
                  </div>
                </li>
               
                <li >
                <div className="inline-flex items-center gap-2">
                    <TbLogout className="text-base" />{" "}
                  <MyLink to="/logout"> Log Out</MyLink>
                </div>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
