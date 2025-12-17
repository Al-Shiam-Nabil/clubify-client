import React from "react";
import { FaUserPlus } from "react-icons/fa6";
import { NavLink } from "react-router";
import { GoHomeFill } from "react-icons/go";
import { CgNotes } from "react-icons/cg";
import { FaClipboardList, FaUsers } from "react-icons/fa";
import { MdEventAvailable, MdOutlineEmojiEvents } from "react-icons/md";
import { HiMiniDocumentCurrencyBangladeshi } from "react-icons/hi2";


const DashboardLink = ({ children, to }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "bg-secondary"
            : "is-drawer-close:tooltip tooltip-secondary is-drawer-close:tooltip-right flex items-center  "
        }
        data-tip={children}
      >
        {/* Home icon */}
        {(to === "/" && <GoHomeFill className="text-[22px]" />) ||
          (to === "/dashboard/admin/club-requests" && (
            <FaUserPlus className="text-[22px]" />
          )) ||
          (to === "/dashboard/manager/my-clubs" && (
            <CgNotes className="text-[22px]" />
          )) ||
          (to === "/dashboard/manager/club-members" && (
            <FaUsers className="text-[22px]" />
          )) ||
          (to === "/dashboard/manager/events-management" && (
            <MdOutlineEmojiEvents className="text-[22px]" />
          )) ||
          (to === "/dashboard/manager/event-registrations" && (
            <MdEventAvailable className="text-[22px]" />
          )) ||
          (to === "/dashboard/admin/manage-users" && (
            <FaUsers className="text-[22px]" />
          )) ||
          (to === "/dashboard/admin/transactions" && (
            <HiMiniDocumentCurrencyBangladeshi className="text-[22px]" />
          ))}

        <span className="is-drawer-close:hidden whitespace-nowrap">
          {children}
        </span>
      </NavLink>
    </li>
  );
};

export default DashboardLink;
