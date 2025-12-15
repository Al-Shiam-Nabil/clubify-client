import { useQuery } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiossecure";
import LoadingComponent from "../../../Components/Shared/Loading/LoadingComponent";

import { IoSearch } from "react-icons/io5";
import { IoMdPersonAdd } from "react-icons/io";
import { FaUserMinus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { formattedDate } from "../../../Utils/FormattedDate";

const ClubRequestsPage = () => {
  const axiosSecure = useAxiosSecure();
  const modalRef = useRef(null);
  const [club, setClub] = useState();
  const { data: clubs = [], isLoading } = useQuery({
    queryKey: ["clubRequests", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/clubs");
      return res.data;
    },
  });

  const handleModal = (club) => {
    modalRef.current.showModal();
    setClub(club);
  };

  console.log(club);

  return (
    <div className="overflow-x-auto ">
      {isLoading ? (
        <LoadingComponent> </LoadingComponent>
      ) : (
        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-secondary text-neutral">
            <tr>
              <th>SL</th>
              <th>Club Name</th>
              <th>Category</th>
              <th>Location</th>
              <th>Membership Fee</th>
              <th>Time</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {clubs.map((club, index) => (
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
                <td className="capitalize">
                  {club?.membershipFee === 0 ? "Free" : club?.membershipFee}
                </td>
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
                  <button
                    onClick={() => handleModal(club)}
                    className="btn btn-sm bg-blue-100 border-none shadow-none hover:bg-secondary/50"
                  >
                    <IoSearch className="text-xl text-blue-500" />
                  </button>
                  <button className="btn btn-sm bg-green-100 border-none shadow-none hover:bg-secondary/50">
                    <IoMdPersonAdd className="text-xl text-green-500" />
                  </button>
                  <button className="btn btn-sm bg-orange-100 border-none shadow-none hover:bg-secondary/50">
                    <FaUserMinus className="text-xl text-orange-500" />
                  </button>
                  <button className="btn btn-sm bg-red-100 border-none shadow-none hover:bg-secondary/50">
                    <RiDeleteBin6Line className="text-xl text-red-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {/* modal */}
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box max-h-[500px] ">
          <div className="text-sm space-y-3">
            <img
              src={club?.bannerImage}
              alt={club?.clubName}
              className="w-full max-h-[300px] object-cover rounded-xl"
            />

            <h3 className="text-base font-bold capitalize mt-4">
              {club?.clubName}
            </h3>
            <div className="flex gap-x-5 gap-y-2 flex-wrap">
              <div className="badge badge-soft badge-primary capitalize">
                {club?.category}
              </div>
              <div
                className={`badge badge-soft ${
                  (club?.status === "pending" && "bg-blue-100 text-blue-500") ||
                  (club?.status === "approved" && "badge-success") ||
                  (club?.status === "rejected" && "badge-error")
                } capitalize`}
              >
                {club?.status}
              </div>
            </div>

            <p>
              <span className="font-semibold">Description : </span>
              {club?.description}
            </p>
            <p>
              <span className="font-semibold">Membership Fee : </span>
              {club?.membershipFee === 0 ? "Free" : club?.membershipFee}
            </p>
            <p>
              <span className="font-semibold capitalize">Location : </span>
              {club?.location}
            </p>
            <p>
              <span className="font-semibold">Time : </span>
              {formattedDate(club?.createdAt)}
            </p>
            <p>
              <span className="font-semibold capitalize">Manager Name : </span>
              {club?.managerName}
            </p>
            <p>
              <span className="font-semibold">Manager Email : </span>
              {club?.managerEmail}
            </p>
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ClubRequestsPage;
