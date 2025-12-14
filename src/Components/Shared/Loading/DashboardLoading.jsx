import React from "react";
import { MoonLoader } from "react-spinners";

const DashboardLoading = () => {
  return (
    <div className="grid justify-center h-screen bg-base-200 py-20">
      <MoonLoader size={30} speedMultiplier={0.75} color="#22C55E" />
    </div>
  );
};

export default DashboardLoading;
