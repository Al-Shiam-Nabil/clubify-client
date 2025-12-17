import React, { useEffect, useRef, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiossecure";
import { useMutation, useQuery } from "@tanstack/react-query";
import LoadingComponent from "../../../Components/Shared/Loading/LoadingComponent";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router";
import { formattedDate } from "../../../Utils/FormattedDate";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useForm } from "react-hook-form";
import useAuthHook from "../../../Hooks/useAuthHook";
import axios from "axios";
import { uploadImage } from "../../../Utils/uploadImage";
import { sweetAlert } from "../../../Utils/Alert/SweetAlert";
import Swal from "sweetalert2";
const MyClubPage = () => {
  const { user, loading } = useAuthHook();
  const [categories, setCategories] = useState(null);
  const [categoryLoading, setCategoryLoading] = useState(true);
  const [club, setClub] = useState(null);
  const axiosSecure = useAxiosSecure();

  const modalRef = useRef(null);

  const {
    data: clubs = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["clubRequests"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/clubs?email=${user?.email}`);
      return res.data;
    },
  });

  //   edit club
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (club) {
      reset({
        clubName: club?.clubName,
        description: club?.description,
        category: club?.category,
        location: club?.location,
        membershipFee: club?.membershipFee,
        managerName: club?.managerName,
        managerEmail: club?.managerEmail,
      });
    }
  }, [club, reset]);

  const handleModal = (updateClub) => {
    modalRef.current.showModal();
    setClub(updateClub);
  };

  useEffect(() => {
    axios.get("/category.json").then((res) => {
      setCategories(res?.data);
      setCategoryLoading(false);
    });
  }, []);

  // update muttation
  const updateMutation = useMutation({
    mutationFn: (updatedInfo) => {
      return axiosSecure.patch(`/clubs/${club?._id}`, updatedInfo);
    },
    onSuccess: (data) => {
      console.log(data.data);
      if (data?.data?.modifiedCount === 0) {
        modalRef.current.close();
        sweetAlert("success", "No changes.");
      } else {
        modalRef.current.close();
        refetch();
        sweetAlert("success", "Club updated successfully.");
      }
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (deletedClub) => {
      return axiosSecure.delete(`/clubs/${deletedClub?._id}`);
    },
    onSuccess: (data) => {
      console.log(data.data);
      if (data?.data?.deletedCount) {
        refetch()
        sweetAlert("success", `Successfully deleted club.`);
      }
    },
  });

  const handleUpdateClub = async (data) => {
    if (data?.bannerImage.length === 0) {
      data.bannerImage = club?.bannerImage;
    } else {
      const image = await uploadImage(data?.bannerImage);

      data.bannerImage = image;
    }

    console.log(data);
    updateMutation.mutate(data);
  };

  if (loading || categoryLoading) {
    return <LoadingComponent></LoadingComponent>;
  }

  // delete club

  const handleDeleteClub = (deletedClub) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to delete ${deletedClub?.clubName}!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMutation.mutate(deletedClub);
      }
    });
  };

  return (
    <>
      <div className="flex justify-between items-center gap-5 mb-5 flex-wrap">
        <p className="text-base-300">
          <Link className="hover:underline" to="/dashboard/manager">
            Dashboard
          </Link>{" "}
          | <span className="font-semibold">My Clubs</span>
        </p>
        <Link
          to="/create-club"
          className="btn btn-outline btn-secondary shadow-none"
        >
          <FiPlus className="text-xl" /> Create New Club
        </Link>
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
                  <td className="capitalize">{club?.clubName}</td>
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
                    <button
                      onClick={() => {
                        handleModal(club);
                      }}
                      className="btn btn-sm bg-blue-100 border-none shadow-none hover:bg-secondary/50"
                    >
                      <FaRegEdit className="text-xl text-blue-500" />
                    </button>
                    <button
                      onClick={() => handleDeleteClub(club)}
                      className="btn btn-sm bg-red-100 border-none shadow-none hover:bg-secondary/50"
                    >
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
          <div className="modal-box  w-11/12 max-w-5xl">
            <form
              onSubmit={handleSubmit(handleUpdateClub)}
              className="bg-neutral p-5  rounded-xl"
            >
              <h2 className="text-center text-2xl font-bold text-secondary mb-8">
                Club Update Form
              </h2>
              <div className="flex flex-col md:flex-row gap-2 md:gap-10 lg:gap-20">
                <fieldset className="fieldset w-full space-y-2">
                  {/*club name */}
                  <div>
                    <label className="label text-base text-accent mb-1.5">
                      Club Name
                    </label>
                    <input
                      type="text"
                      {...register("clubName", {
                        required: "Club name is required",
                        setValueAs: (value) => value.trim().toLowerCase(),
                      })}
                      className="input w-full bg-secondary-content focus:outline-2  focus:outline-secondary "
                      placeholder="Club Name"
                    />

                    {errors.clubName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.clubName.message}
                      </p>
                    )}
                  </div>
                  {/* description */}
                  <div>
                    <label className="label text-base text-accent mb-1.5">
                      Description
                    </label>
                    <textarea
                      {...register("description", {
                        required: "Description is required.",
                        setValueAs: (value) => value.trim(),
                      })}
                      className="textarea w-full bg-secondary-content focus:outline-2  focus:outline-secondary"
                      placeholder="Description"
                    ></textarea>
                    {errors.description && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.description.message}
                      </p>
                    )}
                  </div>

                  {/* category */}
                  <div>
                    <label className="label text-base text-accent block mb-1.5">
                      Category
                    </label>
                    <select
                      {...register("category", {
                        required: "Category is required.",
                      })}
                      className="select select-secondary border border-gray-300"
                    >
                      <option value="" disabled={true}>
                        Select club category
                      </option>
                      {categories.map((category) => (
                        <option
                          value={category?.name.toLowerCase()}
                          key={category?.id}
                        >
                          {category?.name}
                        </option>
                      ))}
                    </select>

                    {errors.category && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.category.message}
                      </p>
                    )}
                  </div>

                  {/* location */}
                  <div>
                    <label className="label text-base text-accent mb-1.5">
                      Location
                    </label>
                    <input
                      {...register("location", {
                        required: "Location is required.",
                        setValueAs: (value) => value.trim().toLowerCase(),
                      })}
                      type="text"
                      className="input w-full bg-secondary-content focus:outline-2  focus:outline-secondary "
                      placeholder="Location"
                    />

                    {errors.location && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.location.message}
                      </p>
                    )}
                  </div>
                </fieldset>

                <fieldset className="fieldset w-full space-y-2">
                  {/* iamge */}
                  <div>
                    <label className="label text-base text-accent mb-1.5">
                      Banner Image
                    </label>
                    <input
                      type="file"
                      {...register("bannerImage")}
                      className="file-input w-full   focus:outline-2  focus:outline-secondary "
                    />
                    {errors.bannerImage && (
                      <p className="text-red-500 text-sm">
                        {errors.bannerImage.message}
                      </p>
                    )}
                  </div>

                  {/* membeship fee */}
                  <div>
                    <label className="label text-base text-accent mb-1.5">
                      Membership Fee
                    </label>
                    <input
                      type="text"
                      {...register("membershipFee", {
                        required: "Membership Fee is required.",
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "Only valid numbers are allowed.",
                        },
                        setValueAs: (value) => parseInt(value),
                      })}
                      className="input w-full bg-secondary-content focus:outline-2  focus:outline-secondary "
                      placeholder="Membership Fee"
                    />

                    {errors.membershipFee && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.membershipFee.message}
                      </p>
                    )}
                  </div>

                  {/* email read only */}
                  <div>
                    <label className="label text-base text-accent mb-1.5">
                      Manager Email
                    </label>
                    <input
                      type="email"
                      {...register("managerEmail")}
                      className="input w-full bg-secondary-content focus:outline-2  focus:outline-secondary "
                      value={user?.email}
                      readOnly
                    />
                  </div>

                  {/* Name read only */}
                  <div>
                    <label className="label text-base text-accent mb-1.5">
                      manager Name
                    </label>
                    <input
                      type="text"
                      {...register("managerName")}
                      className="input w-full bg-secondary-content focus:outline-2  focus:outline-secondary "
                      value={user?.displayName}
                      readOnly
                    />
                  </div>
                </fieldset>
              </div>
              <button className="btn hover:btn-primary btn-secondary shadow-none  mt-5">
               Update Club
              </button>
            </form>

            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default MyClubPage;
