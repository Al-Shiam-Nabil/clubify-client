import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiossecure";
import useAuthHook from "../../../Hooks/useAuthHook";
import LoadingComponent from "../../../Components/Shared/Loading/LoadingComponent";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { formattedDate } from "../../../Utils/FormattedDate";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { uploadImage } from "../../../Utils/uploadImage";
import { sweetAlert } from "../../../Utils/Alert/SweetAlert";
import Swal from "sweetalert2";

const EventManagementPage = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuthHook();
  const [updateEvent, setUpdateEvent] = useState(null);
  const modalRef = useRef(null);



  //   events
  const {
    data: events = [],
    isLoading: eventLoading,
    refetch,
  } = useQuery({
    queryKey: ["managerEvents"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/events?email=${user?.email}`);
      return res.data;
    },
  });

  //   update event form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //   update
  const mutation = useMutation({
    mutationFn: (info) => {
      return axiosSecure.patch(`/events/${updateEvent?._id}`, info);
    },
    onSuccess: (data) => {
      console.log(data?.data);
      if (data?.data?.modifiedCount === 0) {
        modalRef.current.close();
        sweetAlert("success", "No changes.");
      } else {
        modalRef.current.close();
        refetch();
        sweetAlert("success", "Event updated successfully.");
      }
    },
  });

  //   delete

  const deleteMutation = useMutation({
    mutationFn: (del) => {
      return axiosSecure.delete(`/events/${del?._id}`);
    },
    onSuccess: (data) => {
      console.log(data.data);
      console.log(data.data);
      if (data?.data?.deletedCount) {
        refetch();
        sweetAlert("success", `Successfully deleted Event.`);
      }
    },
    onError: (error) => {
      console.error(error);
      sweetAlert("error", "Something went Wrong.");
    },
  });

  useEffect(() => {
    if (updateEvent) {
      reset({
        clubId: updateEvent?.clubId,
        title: updateEvent?.title,
        description: updateEvent?.description,
        eventDate: updateEvent?.eventDate,
        location: updateEvent?.location,
        eventFee: updateEvent?.eventFee,
        maxAttendees: updateEvent?.maxAttendees,
      });
    }
  }, [reset, updateEvent]);

  const { data: myClubs = [], isLoading: clubLoading } = useQuery({
    queryKey: ["managerClub"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/clubs?email=${user?.email}`);
      return res?.data || [];
    },
  });

  if (loading || eventLoading || clubLoading) {
    return <LoadingComponent></LoadingComponent>;
  }

  const handleUpdateModal = (event) => {
    modalRef.current.showModal();
    setUpdateEvent(event);
  };

  const handleUpdateEvent = async (data) => {
    if (data?.eventImage.length === 0) {
      data.eventImage = updateEvent?.eventImage;
    } else {
      data.eventImage = await uploadImage(data?.eventImage);
    }

    mutation.mutate(data);
  };

  const handleDeleteEvent = (delEvent) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to delete ${delEvent?.title}!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMutation.mutate(delEvent);
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
          | <span className="font-semibold">Events Management</span>
        </p>
        <Link 
          to="/dashboard/manager/create-event"
          className="btn btn-outline btn-secondary shadow-none"
        >
          <FiPlus className="text-xl" /> Create New Event
        </Link>
      </div>

      {events.length === 0 ? (
        <div>
          <h2 className="font-bold text-base-300">
            No events found. Start by creating your club event!
          </h2>
        </div>
      ) : (
        <div className="overflow-x-auto bg-neutral rounded-xl">
          <table className="table table-zebra rounded-xl">
            {/* head */}
            <thead className="bg-secondary text-neutral">
              <tr>
                <th>SL</th>
                <th>Title</th>
                <th>Club Name</th>
                <th>Category</th>
                <th>Location</th>
                <th>Created Time</th>
                <th>Event Date</th>
                <th>Event Fee</th>

                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {events.map((event, index) => (
                <tr key={event?._id}>
                  <td>{index + 1}</td>

                  <td className="capitalize">{event?.title}</td>
                  <td className="capitalize">{event?.clubName}</td>
                  <td className="capitalize truncate">{event?.category}</td>
                  <td className="capitalize truncate">{event?.location}</td>
                  <td className="truncate">{formattedDate(event?.createdAt)}</td>
                  <td className="truncate">{format(new Date(event?.eventDate), "dd/MMM/yyyy")}</td>

                  <td>{event?.eventFee === 0 ? "Free" : event?.eventFee}</td>

                  <td className="space-x-2 whitespace-nowrap">
                    <button
                      onClick={() => handleUpdateModal(event)}
                      className="btn btn-sm bg-blue-100 border-none shadow-none hover:bg-secondary/50"
                    >
                      <FaRegEdit className="text-xl text-blue-500" />
                    </button>
                    <button
                      onClick={() => handleDeleteEvent(event)}
                      className="btn btn-sm bg-red-100 border-none shadow-none hover:bg-secondary/50"
                    >
                      <RiDeleteBin6Line className="text-xl text-red-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box  w-11/12 max-w-5xl">
          <form
            onSubmit={handleSubmit(handleUpdateEvent)}
            className="bg-neutral p-5 sm:p-10  rounded-xl"
          >
            <h2 className="text-center text-2xl font-bold text-secondary mb-8">
              Update Event Form
            </h2>
            <div className="flex flex-col md:flex-row gap-2 md:gap-10 lg:gap-20">
              <fieldset className="fieldset w-full space-y-2">
                {/* club*/}
                <div>
                  <label className="label text-base text-accent block mb-1.5">
                    Club Name
                  </label>
                  <select
                    defaultValue=""
                    {...register("clubId", {
                      required: "Club is required.",
                    })}
                    className="select select-secondary border border-gray-300"
                  >
                    <option value="" disabled={true}>
                      Select Club
                    </option>
                    {myClubs.map((club) => (
                      <option value={club?._id} key={club?._id}>
                        {club?.clubName}
                      </option>
                    ))}
                  </select>

                  {errors.clubId && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.clubId.message}
                    </p>
                  )}
                </div>

                {/*event title */}
                <div>
                  <label className="label text-base text-accent mb-1.5">
                    Title
                  </label>
                  <input
                    type="text"
                    {...register("title", {
                      required: "Title is required",
                      setValueAs: (value) => value.trim().toLowerCase(),
                    })}
                    className="input w-full bg-secondary-content focus:outline-2  focus:outline-secondary "
                    placeholder="Title"
                  />

                  {errors.title && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.title.message}
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

                {/* event Date*/}
                <div>
                  <label className="label text-base text-accent mb-1.5">
                    Event Date
                  </label>
                  <input
                    type="date"
                    {...register("eventDate", {
                      required: "Event Date is required",
                      setValueAs: (value) => value.trim().toLowerCase(),
                    })}
                    className="input w-full bg-secondary-content focus:outline-2  focus:outline-secondary "
                  />

                  {errors.eventDate && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.eventDate.message}
                    </p>
                  )}
                </div>
              </fieldset>

              <fieldset className="fieldset w-full space-y-2">
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

                {/* iamge */}
                <div>
                  <label className="label text-base text-accent mb-1.5">
                    Event Image
                  </label>
                  <input
                    type="file"
                    {...register("eventImage")}
                    className="file-input w-full   focus:outline-2  focus:outline-secondary "
                  />
                  {errors.eventImage && (
                    <p className="text-red-500 text-sm">
                      {errors.eventImage.message}
                    </p>
                  )}
                </div>

                {/* Event fee */}
                <div>
                  <label className="label text-base text-accent mb-1.5">
                    Event Fee
                  </label>
                  <input
                    type="number"
                    {...register("eventFee", {
                      required: "Event Fee is required.",
                      valueAsNumber: true,
                      min: {
                        value: 0,
                        message: "Please input valid amount.",
                      },
                    })}
                    className="input w-full bg-secondary-content focus:outline-2  focus:outline-secondary "
                    placeholder="Event Fee"
                  />

                  {errors.eventFee && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.eventFee.message}
                    </p>
                  )}
                </div>

                {/* max attendence*/}
                <div>
                  <label className="label text-base text-accent mb-1.5">
                    Max Atendees
                  </label>
                  <input
                    type="number"
                    {...register("maxAttendees", {
                      valueAsNumber: true,
                      min: {
                        value: 0,
                        message: "Please input valid amount.",
                      },
                    })}
                    className="input w-full bg-secondary-content focus:outline-2  focus:outline-secondary "
                    placeholder="Max attendess"
                  />

                  {errors.maxAttendees && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.maxAttendees.message}
                    </p>
                  )}
                </div>
              </fieldset>
            </div>
            <button className="btn hover:btn-primary btn-secondary shadow-none  mt-5">
              Update Event
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
    </>
  );
};

export default EventManagementPage;
