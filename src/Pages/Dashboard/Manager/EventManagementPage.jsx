import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router";

const EventManagementPage = () => {
  return (
    <>
      <div className="flex justify-between items-center gap-5 mb-5 flex-wrap">
        <p className="text-base-300">
          <Link className="hover:underline" to="/dashboard/manager">
            Dashboard
          </Link>{" "}
          | <span className="font-semibold">Events Management</span>
        </p>
        <Link
          to="/dashboard/manager/create-event"
          className="btn btn-outline btn-secondary shadow-none"
        >
          <FiPlus className="text-xl" /> Create New Event
        </Link>
      </div>
    </>
  );
};

export default EventManagementPage;
