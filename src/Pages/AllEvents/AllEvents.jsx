import React, { useState } from "react";
import Container from "../../Components/Shared/Container";
import { LuRefreshCw } from "react-icons/lu";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MoonLoader } from "react-spinners";
import EventCard from "../../Components/Shared/EventCard/EventCard";

const AllEvents = () => {
    const [sort,setSort]=useState('eventDate')
    const [order,setOrder]=useState('desc')
  const { data: allEvents, isLoading: eventsLoading } = useQuery({
    queryKey: ["allEvents",sort,order],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:4000/all-events?sort=${sort}&order=${order}`);
      return res.data;
    },
  });

  const handleSort=(e)=>{
const sortText=e.target.value.split('-')
setSort(sortText[0])
setOrder(sortText[1])

  }

  console.log(allEvents);

  return (
    <Container>
      <div className="flex flex-col-reverse sm:flex-row sm:justify-between justify-center items-center my-10 gap-y-5 ">
        <div className="flex items-center+ gap-5">
            <h3>All Clubs ({eventsLoading ? <span>...</span> : allEvents.length})</h3>
          <button className="cursor-pointer text-secondary hover:text-primary text-xl">
            <LuRefreshCw></LuRefreshCw>{" "}
          </button>
        </div>
        {/* search */}

        <form className="flex justify-center items-center">
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
            onChange={(value) => handleSort(value)}
            className="select w-[180px] "
          >
          
            <option value={"eventDate-desc"}>Newest First</option>
            <option value={"eventDate-asc"}>Lowest First</option>
            <option value={"eventFee-desc"}>Highest Fee</option>
            <option value={"eventFee-asc"}>Lowest Fee</option>
          </select>
        </div>

        <div className="flex">
          <label className="label mr-3">Filter By</label>
          <select
            // onChange={(value) => handleFilter(value)}
            className="select w-[180px]"
          >
            <option disabled={true}>Filter by Category</option>
            <option value="">All Categories</option>

            {/* {!allCategoriesLoading &&
              categories.map((category, index) => (
                <option
                  className="capitalize"
                  value={category.toLowerCase()}
                  key={index}
                >
                  {category}
                </option>
              ))} */}
          </select>
        </div>
      </div>
<div className="mb-20">
    
            {eventsLoading ? (
        <div className="grid justify-center h-[350px] mt-10">
          <MoonLoader size={30} speedMultiplier={0.75} color="#22C55E" />
        </div>
      ) : allEvents.length === 0 ? (
        <h2 className="font-semibold text-center text-xl text-error my-20">
          No event available now.
        </h2>
      ) : (
        <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allEvents.map((event) => (
            <EventCard key={event?._id} event={event}></EventCard>
          ))}
        </div>
      )}
</div>
    </Container>
  );
};

export default AllEvents;
