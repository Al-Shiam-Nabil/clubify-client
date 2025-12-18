import Container from "../Container";
import { Link, NavLink } from "react-router";
import MyLink from "./MyLink";
import useAuthHook from "../../../Hooks/useAuthHook";
import defaultUserImage from "../../../assets/user.png";
import { CgProfile } from "react-icons/cg";
import { TbLogout } from "react-icons/tb";
import { sweetAlert } from "../../../Utils/Alert/SweetAlert";
import useRoleHook from "../../../Hooks/useRoleHook";

const Navbar = () => {
  const { user, loading, logOutUser } = useAuthHook();
  const {role}=useRoleHook()
  console.log(role)

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        sweetAlert("success", "Logged out successfully.");
      })
      .catch((error) => {
        console.error(error.code);
      });
  };

  const links = (
    <>
      <MyLink to="/">Home</MyLink>
      <MyLink to="/all-clubs">All Clubs</MyLink>
      <MyLink to="/events">Club Events</MyLink>

      {
        user && <MyLink to={`/dashboard/${role}`}>Dashboard</MyLink> 
      }
    </>

    
  );

  return (
    <div className=" bg-primary shadow-sm">
      <Container className="navbar relative">
        {" "}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" lg:hidden mr-3 sm:mr-4">
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
          <a className="text-xl sm:text-2xl font-primary text-secondary font-bold">
            Clubify
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex justify-center items-center gap-10">{links}</ul>
        </div>
        <div className="navbar-end">
          {loading ? (
            <div className="skeleton  h-12 w-42 rounded-lg"></div>
          ) : user ? (
            <div className="dropdown dropdown-bottom dropdown-end">
              <div tabIndex={0} role="button">
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

                    <NavLink className="group relative w-max cursor-pointer">
                      Profile
                      <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 ease-in-out duration-300 rounded-full bg-secondary group-hover:w-full"></span>
                    </NavLink>
                  </div>
                </li>

                <li>
                  <div
                    onClick={handleLogOut}
                    className="inline-flex items-center gap-2"
                  >
                    <TbLogout className="text-base" />

                    <div className="group relative w-max cursor-pointer">
                      Log Out
                      <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 ease-in-out duration-300 rounded-full bg-secondary group-hover:w-full"></span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          ) : (
            <div className=" sm:space-x-5">
              <Link
                to="/login"
                className="btn btn-sm sm:btn-md btn-outline text-base-100 hover:bg-secondary border-secondary shadow-none duration-400"
              >
                Log in
              </Link>
              <Link
                to="/register"
                className="btn btn-sm sm:btn-md hidden sm:inline-flex btn-secondary shadow-none hover:bg-transparent duration-500"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
