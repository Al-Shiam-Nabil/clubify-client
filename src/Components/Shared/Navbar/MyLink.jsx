import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ children, to }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `${
            isActive ? "text-secondary" : "text-secondary-content"
          } text-base font-medium  group relative w-max`
        }
      >
        {children}
        <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 ease-in-out duration-300 rounded-full bg-secondary group-hover:w-full"></span>
      </NavLink>
    </li>
  );
};

export default MyLink;
