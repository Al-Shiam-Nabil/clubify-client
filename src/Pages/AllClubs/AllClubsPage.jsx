import React, { useState } from "react";
import Container from "../../Components/Shared/Container";

import { useQuery } from "@tanstack/react-query";
import ClubCard from "../../Components/Shared/ClubCard/ClubCard";
import { MoonLoader } from "react-spinners";
import { LuRefreshCw } from "react-icons/lu";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const AllClubsPage = () => {
  const [sort, setSort] = useState("createdAt");
  const [order, setOrder] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [searchText, setSearchText] = useState("");
  const axiosPublic=useAxiosPublic()
  //   all clubs
  const { data: clubs = [], isLoading: clubLoading } = useQuery({
    queryKey: ["allClubs", sort, order, filterCategory, searchText],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/all-clubs?search=${searchText}&sort=${sort}&order=${order}&filter=${filterCategory}`
      );
      return res.data;
    },
  });

  //   all categories
  const { data: allCategoriesData = [], isLoading: allCategoriesLoading } =
    useQuery({
      queryKey: ["allCategories"],
      queryFn: async () => {
        const res = await axiosPublic.get(`/all-categories`);
        return res.data;
      },
    });

  const handleSort = (e) => {
    const sortedText = e.target.value.split("-");
    setSort(sortedText[0]);
    setOrder(sortedText[1]);
  };

  const allCategories = allCategoriesData?.map((cat) => cat?.category);
  const categories = [...new Set(allCategories)];

  const handleFilter = (e) => {
    setFilterCategory(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchText(e.target.search.value);
    // e.target.reset();
  };

  const handleRefresh = () => {
    setFilterCategory("");
    setSearchText("");
    setSort("createdAt");
    setOrder("");

    document.querySelector("input[name='search']").value=""
  };

  return (
    <Container>
      <div className="flex flex-col-reverse sm:flex-row sm:justify-between justify-center items-center my-10 gap-y-8 ">
        <div className="flex items-center gap-5">
          <h3>All Clubs ({clubLoading ? <span>...</span> : clubs.length})</h3>
          <button
            onClick={handleRefresh}
            className="cursor-pointer text-secondary hover:text-primary text-xl"
          >
            <LuRefreshCw></LuRefreshCw>{" "}
          </button>
        </div>
        {/* search */}

        <form
          onSubmit={handleSearch}
          className="flex justify-center items-center"
        >
          <div className="relative h-[45px]">
            <input
              type="text"
              name="search"
            
              placeholder="Search By Name..."
              spellCheck={false}
              className="bg-gray-200 w-full sm:w-[400px] px-5 pr-24 py-2 rounded-4xl h-full  focus:outline-2 focus:outline-secondary"
              required
            />
            <button
              type="submit"
              className="btn bg-gray-200 hover:bg-gray-300  text-primary shadow-none rounded-br-4xl rounded-tr-4xl absolute top-0 right-0 h-full"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="flex flex-col md:flex-row gap-x-10 gap-y-5 items-center justify-center mb-16">
        <div className="flex">
          <label className="label mr-3">Sort By</label>
          <select
          value={`${sort}-${order}`}
            onChange={(value) => handleSort(value)}
            className="select w-[180px] "
          >
            {/* <option disabled={true}>Pick a color</option> */}
            <option value={"createdAt-desc"}>Newest First</option>
            <option value={"createdAt-asc"}>Lowest First</option>
            <option value={"membershipFee-desc"}>Highest Fee</option>
            <option value={"membershipFee-asc"}>Lowest Fee</option>
          </select>
        </div>

        <div className="flex">
          <label className="label mr-3">Filter By</label>
          <select
          value={filterCategory}
            onChange={(value) => handleFilter(value)}
            className="select w-[180px]"
          >
            <option disabled={true}>Filter by Category</option>
            <option value="">All Categories</option>

            {!allCategoriesLoading &&
              categories.map((category, index) => (
                <option
                  className="capitalize"
                  value={category.toLowerCase()}
                  key={index}
                >
                  {category}
                </option>
              ))}
          </select>
        </div>
      </div>

      {clubLoading ? (
        <div className="grid justify-center h-[350px] mt-10">
          <MoonLoader size={30} speedMultiplier={0.75} color="#22C55E" />
        </div>
      ) : clubs.length === 0 ? (
        <h2 className="font-semibold text-center text-xl text-error my-20">
          No club available now.
        </h2>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 mb-20">
          {clubs.map((club) => (
            <ClubCard key={club?._id} club={club}></ClubCard>
          ))}
        </div>
      )}
    </Container>
  );
};

export default AllClubsPage;
