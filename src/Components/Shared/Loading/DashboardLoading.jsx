import React from "react";
import { MoonLoader } from "react-spinners";

const DashboardLoading = () => {
  return (
    <div className="grid justify-center h-screen  py-40">
      <MoonLoader size={30} speedMultiplier={0.75} color="#22C55E" />
    </div>
  );
};

export default DashboardLoading;
