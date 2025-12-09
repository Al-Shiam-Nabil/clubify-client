import React from "react";
import Heading2 from "../Shared/Headings/Heading2";
import Container from "../Shared/Container";
import { FaArrowRight } from "react-icons/fa";
import ClubCard from "../Shared/ClubCard/ClubCard";


const FeaturedClub = () => {
  return (
    <Container className="">
      <Heading2>Featured Clubs</Heading2>
      <p className="max-w-4xl mx-auto text-center text-base-300 mb-10">
        Discover the most active and inspiring clubs of our community. These
        featured clubs stand out for their achievements, creativity, and
        engagement. Join them to explore new skills and experiences.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
        <ClubCard></ClubCard>
      </div>

      <div className="grid place-items-center my-10">
        <button className="bg-secondary-content btn rounded-full flex items-center gap-2">View All <FaArrowRight></FaArrowRight></button>
      </div>
    </Container>
  );
};

export default FeaturedClub;
