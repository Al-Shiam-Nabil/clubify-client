import React from "react";
import Heading2 from "../Shared/Headings/Heading2";
import Container from "../Shared/Container";
import { FaArrowRight } from "react-icons/fa";
import ClubCard from "../Shared/ClubCard/ClubCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiossecure";
import { MoonLoader } from "react-spinners";
import { Link } from "react-router";


const FeaturedClub = () => {
const axiosSecure=useAxiosSecure()
  const {data:clubs=[],isLoading:clubLoading}=useQuery({
    queryKey:['featuredClubs'],
    queryFn:async()=>{
      const res=await axiosSecure.get('/latest-clubs')
      return res.data
    }
  })

  if(clubLoading){
    return <div className="grid justify-center h-[350px] mt-10">
        <MoonLoader size={30} speedMultiplier={.75} color="#22C55E" />
      </div>
  }

  console.log(clubs)

  return (
    <Container className="">
      <Heading2>Featured Clubs</Heading2>
      <p className="max-w-4xl mx-auto text-center text-base-300 mb-10">
        Discover the most active and inspiring clubs of our community. These
        featured clubs stand out for their achievements, creativity, and
        engagement. Join them to explore new skills and experiences.
      </p>

      {
        clubs.length === 0 ? <h2 className="font-semibold text-center text-xl text-error">No feature club available now.</h2> : <>
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">

            {clubs.map(club=>  <ClubCard key={club?._id} club={club}></ClubCard>)}
      
      </div>

      <div className="grid place-items-center my-10">
        <Link to="/all-clubs" className="bg-secondary-content btn rounded-full flex items-center gap-2">View All <FaArrowRight></FaArrowRight></Link>
      </div>
        </>
      }

   
    </Container>
  );
};

export default FeaturedClub;
