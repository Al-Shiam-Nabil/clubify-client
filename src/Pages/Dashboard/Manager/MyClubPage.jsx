import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiossecure';
import { useQuery } from '@tanstack/react-query';
import LoadingComponent from '../../../Components/Shared/Loading/LoadingComponent';
import { FiPlus } from "react-icons/fi";
import { Link } from 'react-router';
import { formattedDate } from '../../../Utils/FormattedDate';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
const MyClubPage = () => {
      const axiosSecure = useAxiosSecure();
 
  const { data: clubs = [], isLoading } = useQuery({
    queryKey: ["clubRequests", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/clubs");
      return res.data;
    },
  });

  console.log(clubs)
    return (
    <>
<div className='flex justify-between items-center gap-5 mb-5'>
<h2 className='text-lg font-bold'>My Clubs</h2>
<Link to="/create-club" className='btn btn-outline btn-secondary shadow-none'><FiPlus className='text-xl'/> Create New Club</Link>
</div>

       <div className="overflow-x-auto bg-neutral rounded-xl">
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
              <th>Created Time</th>
              <th>Verify Time</th>
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
                 
                </td>
                <td className="capitalize">{club?.category}</td>
                <td className="capitalize">{club?.location}</td>
                <td className="">{formattedDate(club?.createdAt)}</td>
                <td></td>
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
                  
                  <button className="btn btn-sm bg-blue-100 border-none shadow-none hover:bg-secondary/50">
                  <FaRegEdit className="text-xl text-blue-500"/>
                   
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
   
    </div>
    </>
    );
};

export default MyClubPage;