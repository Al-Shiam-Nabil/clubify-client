import React, { useEffect, useState } from "react";
import Container from "../../Components/Shared/Container";
import useAuthHook from "../../Hooks/useAuthHook";
import axios from "axios";
import LoadingComponent from "../../Components/Shared/Loading/LoadingComponent";
import { useForm } from "react-hook-form";
import { uploadImage } from "../../Utils/uploadImage";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiossecure";
import { sweetAlert } from "../../Utils/Alert/SweetAlert";

const CreateClub = () => {
  const { user, loading } = useAuthHook();
  const [categories, setCategories] = useState(null);
  const [categoryLoading, setCategoryLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axios.get("/category.json").then((res) => {
      console.log(res.data);
      setCategories(res?.data);
      setCategoryLoading(false);
    });
  }, []);

  const mutation = useMutation({
    mutationFn: (clubInfo) => {
      return axiosSecure.post("/clubs", clubInfo);
    },
    onSuccess: (data) => {
      console.log(data.data);
      if (data?.data?.insertedId) {
        sweetAlert(
          "success",
          "Your club request has been sent to the admin for review. "
        );
        reset();
      }
    },
  });

  if (loading || categoryLoading) {
    return <LoadingComponent></LoadingComponent>;
  }

  const handleCreateClub = async (data) => {
    const image = await uploadImage(data?.bannerImage);
    const clubInfo = {
      clubName: data?.clubName,
      description: data?.description,
      category: data?.category,
      location: data?.location,
      bannerImage: image,
      membershipFee: data?.membershipFee,
      managerEmail: data?.managerEmail,
      managerName: data?.managerName,
    };

    mutation.mutate(clubInfo);

    console.log(clubInfo);
  };

  return (
    <>
      <title>Clubify | Club Registration</title>
      <Container>
        <form
          onSubmit={handleSubmit(handleCreateClub)}
          className="bg-neutral p-5 sm:p-10 my-16 rounded-xl"
        >
          <h2 className="text-center text-2xl font-bold text-secondary mb-8">
            Club Ragistration Form
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
                  defaultValue=""
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
                  {...register("bannerImage", {
                    required: "Banner Image is required.",
                  })}
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
                  type="num"
                  {...register("membershipFee", {
                    required: "Membership Fee is required.",
                valueAsNumber:true,
                min:{
                  value:0,
                  message:"Please enter valid amount."
                }
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
            Request Registration
          </button>
        </form>
      </Container>
    </>
  );
};

export default CreateClub;
