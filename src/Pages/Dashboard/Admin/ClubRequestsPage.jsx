import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiossecure";
import LoadingComponent from "../../../Components/Shared/Loading/LoadingComponent";
import { format } from "date-fns";
import { IoSearch } from "react-icons/io5";
import { IoMdPersonAdd } from "react-icons/io";
import { FaUserMinus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";



const ClubRequestsPage = () => {
  const axiosSecure = useAxiosSecure();
  const { data: clubs = [], isLoading } = useQuery({
    queryKey: ["clubRequests", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/clubs");
      return res.data;
    },
  });

  console.log(clubs);

  const formattedDate = (date) => {
    const isoDate = date;
    const newDate = format(new Date(isoDate), "dd/MMM/yyyy, h:m aaa");
    console.log(newDate);
    return newDate;
  };

  formattedDate("2025-12-14T20:25:53.280Z");

  return (
    <div className="overflow-x-auto ">
      <table className="table table-zebra">
        {/* head */}
        <thead className="bg-secondary text-neutral">
          <tr>
            <th>SL</th>
            <th>Club Name</th>
            <th>Category</th>
            <th>Location</th>
            <th>Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          {isLoading ? (
            <LoadingComponent> </LoadingComponent>
          ) : (
            clubs.map((club, index) => (
              <tr key={club?._id}>
                <td>{index + 1}</td>
                <td className="capitalize">
                  {club?.clubName}
                  <p className="text-base-300 text-sm lowercase mt-1 whitespace-nowrap">
                    {" "}
                    {club?.managerEmail}
                  </p>
                </td>
                <td className="capitalize">{club?.category}</td>
                <td className="capitalize">{club?.location}</td>
                <td className="">{formattedDate(club?.createdAt)}</td>
                <td
                  className={`${
                    (club?.status === "pending" && "text-blue-500") ||
                    (club?.status === "approved" && "text-green-500") ||
                    (club?.status === "rejected" && "text-red-500")
                  } capitalize`}
                >
                  {club?.status}
                </td>

                <td className="space-x-2 whitespace-nowrap">
                    <button className="btn btn-sm bg-blue-100 border-none shadow-none hover:bg-secondary/50"><IoSearch className="text-xl text-blue-500"/></button>
                    <button className="btn btn-sm bg-green-100 border-none shadow-none hover:bg-secondary/50"><IoMdPersonAdd className="text-xl text-green-500"/></button>
                    <button className="btn btn-sm bg-orange-100 border-none shadow-none hover:bg-secondary/50"><FaUserMinus className="text-xl text-orange-500" /></button>
                    <button className="btn btn-sm bg-red-100 border-none shadow-none hover:bg-secondary/50"><RiDeleteBin6Line className="text-xl text-red-500" /></button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ClubRequestsPage;
