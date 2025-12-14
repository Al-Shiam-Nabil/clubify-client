import React, { useEffect, useState } from "react";
import Container from "../../Components/Shared/Container";
import useAuthHook from "../../Hooks/useAuthHook";
import axios from "axios";
import LoadingComponent from "../../Components/Shared/Loading/LoadingComponent";

const CreateClub = () => {
  const { user, loading } = useAuthHook();
  const [categories, setCategories] = useState(null);
  const [categoryLoading, setCategoryLoading] = useState(true);

  useEffect(() => {
    axios.get("/category.json").then((res) => {
      console.log(res.data);
      setCategories(res?.data);
      setCategoryLoading(false);
    });
  }, []);

  if (loading || categoryLoading) {
    return <LoadingComponent></LoadingComponent>;
  }

  return (
    <Container>
      <form className="bg-neutral p-10 my-16 rounded-xl">
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
                className="input w-full bg-secondary-content focus:outline-2  focus:outline-secondary "
                placeholder="Club Name"
              />
            </div>
            {/* description */}
            <div>
              <label className="label text-base text-accent mb-1.5">
                Description
              </label>
              <textarea
                className="textarea w-full bg-secondary-content focus:outline-2  focus:outline-secondary"
                placeholder="Description"
              ></textarea>
            </div>

            {/* category */}
            <div>
              <label className="label text-base text-accent block mb-1.5">
                Category
              </label>
              <select className="select select-secondary border border-gray-300">
                <option selected disabled={true}>
                  Select club category
                </option>
                {categories.map((category) => (
                  <option value={category?.name} key={category?.id}>
                    {category?.name}
                  </option>
                ))}
              </select>
            </div>

            {/* location */}
            <div>
              <label className="label text-base text-accent mb-1.5">
                Location
              </label>
              <input
                type="text"
                className="input w-full bg-secondary-content focus:outline-2  focus:outline-secondary "
                placeholder="Location"
              />
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
                className="file-input w-full  focus:outline-2  focus:outline-secondary "
              />
            </div>

            {/* membeship fee */}
            <div>
              <label className="label text-base text-accent mb-1.5">
                Membership Fee
              </label>
              <input
                type="text"
                className="input w-full bg-secondary-content focus:outline-2  focus:outline-secondary "
                placeholder="Membership Fee"
              />
            </div>

            {/* email read only */}
            <div>
              <label className="label text-base text-accent mb-1.5">
                User Email
              </label>
              <input
                type="email"
                className="input w-full bg-secondary-content focus:outline-2  focus:outline-secondary "
                value={user?.email}
                readOnly
              />
            </div>

            {/* Name read only */}
            <div>
              <label className="label text-base text-accent mb-1.5">
                User Name
              </label>
              <input
                type="text"
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
  );
};

export default CreateClub;
