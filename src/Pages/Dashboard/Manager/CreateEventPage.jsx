import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiossecure";
import useAuthHook from "../../../Hooks/useAuthHook";
import LoadingComponent from "../../../Components/Shared/Loading/LoadingComponent";
import { uploadImage } from "../../../Utils/uploadImage";
import { sweetAlert } from "../../../Utils/Alert/SweetAlert";

const CreateEventPage = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuthHook();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { data: myClubs = [], isLoading: clubLoading } = useQuery({
    queryKey: ["managerClub"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/clubs?email=${user?.email}`);
      return res?.data || [];
    },
  });

  const mutation = useMutation({
    mutationFn: (event) => {
      return axiosSecure.post(`/events/${event?.clubId}`, event);
    },
    onSuccess: (data) => {
      if (data?.data?.insertedId) {
        sweetAlert("success", "Event Create Successfully.");
        reset();
      }
    },
    onError: () => {
      sweetAlert("error", "Something went Wrong.");
    },
  });

  if (loading || clubLoading) {
    return <LoadingComponent></LoadingComponent>;
  }

  const handleCreateEvent = async (data) => {
    const image = await uploadImage(data?.eventImage);
    data.eventImage = image;
    console.log(data);
    mutation.mutate(data);
  };

  return (
    <div>
      <div className="flex mb-5 flex-wrap">
        <p className="text-base-300">
          <Link className="hover:underline" to="/dashboard/manager">
            Dashboard
          </Link>{" "}
          |
          <Link
            className="hover:underline"
            to="/dashboard/manager/events-management"
          >
            {" "}
            Events Management{" "}
          </Link>
          | <span className="font-semibold">Create Event</span>
        </p>
      </div>
      <form
        onSubmit={handleSubmit(handleCreateEvent)}
        className="bg-neutral p-5 sm:p-10  rounded-xl"
      >
        <h2 className="text-center text-2xl font-bold text-secondary mb-8">
          Create Event Form
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
                  <option className="capitalize" value={club?._id} key={club?._id}>
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
                {...register("eventImage", {
                  required: "Event Image is required.",
                })}
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
         Submit Event
        </button>
      </form>
    </div>
  );
};

export default CreateEventPage;
