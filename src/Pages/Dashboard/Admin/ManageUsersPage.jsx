import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiossecure";
import LoadingComponent from "../../../Components/Shared/Loading/LoadingComponent";
import { formattedDate } from "../../../Utils/FormattedDate";
import defaultUserImage from "../../../assets/user.png";
import { sweetAlert } from "../../../Utils/Alert/SweetAlert";
import Swal from "sweetalert2";

const ManageUsersPage = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: users = [],
    isLoading: userLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  //   change role
  const mutation = useMutation({
    mutationFn: (userInfo) => {
      return axiosSecure.patch(`/users/${userInfo?._id}`, userInfo);
    },
    onSuccess: (data) => {
      console.log(data.data);
      if (data?.data?.modifiedCount) {
        sweetAlert("success", "Successfully changed.");
        refetch();
      }
    },
    onError: (error) => {
      console.error(error);
      sweetAlert("error", "Something went wrong.");
    },
  });

  if (userLoading) {
    return <LoadingComponent></LoadingComponent>;
  }

  const handleMemberRole = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to change role as a Member!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, change it!",
    }).then((result) => {
      if (result.isConfirmed) {
        user.role = "member";
        mutation.mutate(user);
      }
    });
  };

  const handleManagerRole = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to change role as a Manager!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, change it!",
    }).then((result) => {
      if (result.isConfirmed) {
        user.role = "manager";
        mutation.mutate(user);
      }
    });
  };

  const handleAdminRole = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to change role as a Admin!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, change it!",
    }).then((result) => {
      if (result.isConfirmed) {
        user.role = "admin";
        mutation.mutate(user);
      }
    });
  };

  return (
    <>
      <div className="flex justify-between items-center gap-5 mb-5 flex-wrap">
        <p className="text-base-300">
          <Link className="hover:underline" to="/dashboard/admin">
            Dashboard
          </Link>{" "}
          | <span className="font-semibold">Manage Users</span>
        </p>
      </div>

      <div className="overflow-x-auto bg-neutral rounded-lg ">
        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-secondary text-neutral">
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Role</th>
              <th>Created At</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {users.map((user, index) => (
              <tr key={user?._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask rounded-lg h-12 w-12">
                        <img
                          src={
                            user?.photoURL ? user?.photoURL : defaultUserImage
                          }
                          alt={user?.name}
                          className="bg-gray-200"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold capitalize whitespace-nowrap">
                        {user?.name}
                      </div>
                      <div className="text-sm opacity-50 whitespace-nowrap">
                        {user?.email}
                      </div>
                    </div>
                  </div>
                </td>

                <td
                  className={`capitalize ${
                    (user?.role === "admin" && "text-green-600") ||
                    (user?.role === "member" && "text-blue-500") ||
                    (user?.role === "manager" && "text-orange-600")
                  }`}
                >
                  {user?.role}
                </td>

                <td className="">{formattedDate(user?.createdAt)}</td>

                <td className="space-x-3 whitespace-nowrap">
                  {user?.role !== "member" && (
                    <button
                      onClick={() => handleMemberRole(user)}
                      disabled={user?.role === "admin"}
                      className={`btn btn-sm shadow-none border-none hover:bg-blue-200 ${
                        user?.role === "admin"
                          ? "bg-gray-200 text-gray-500"
                          : "bg-blue-100 text-blue-600"
                      } `}
                    >
                      Member
                    </button>
                  )}
                  {user?.role !== "manager" && (
                    <button
                      onClick={() => handleManagerRole(user)}
                      disabled={user?.role === "admin"}
                      className={`btn btn-sm shadow-none border-none hover:bg-blue-200 ${
                        user?.role === "admin"
                          ? "bg-gray-200 text-gray-500"
                          : "bg-orange-100 text-orange-600"
                      } `}
                    >
                      Manager
                    </button>
                  )}
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handleAdminRole(user)}
                      disabled={user?.role === "admin"}
                      className={`btn btn-sm shadow-none border-none hover:bg-blue-200 ${
                        user?.role === "admin"
                          ? "bg-gray-200 text-gray-500"
                          : "bg-green-100 text-green-600"
                      } `}
                    >
                      Admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageUsersPage;
