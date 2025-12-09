import React from "react";
import { FaSearch, FaCalendarAlt, FaUserPlus } from "react-icons/fa";
import Container from "../Shared/Container";
import Heading2 from "../Shared/Headings/Heading2";
import { BsFillSendFill } from "react-icons/bs";

const HowClubWork = () => {
  return (
    <Container>
      <Heading2>How Clubify Works</Heading2>
      {/* Cards Grid */}
      <div className="mt-12 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {/* Card 1 */}
        <div className="flex flex-col gap-4 rounded-xl bg-neutral p-6 shadow-sm transition-all hover:shadow-lg">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 ">
            <FaSearch className="text-blue-500 " />
          </div>
          <h3 className="text-lg font-bold text-[#1F2937] ">
            Explore & Discover
          </h3>
          <p className="text-sm text-base-300 ">
            Explore clubs based on your interests and passions. Find communities
            that inspire and motivate you.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col gap-4 rounded-xl bg-neutral p-6 shadow-sm transition-all hover:shadow-lg">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 ">
            <FaCalendarAlt className="text-green-500 " />
          </div>
          <h3 className="text-lg font-bold text-[#1F2937] ">
            Find an Event
          </h3>
          <p className="text-sm text-base-300 ">
            Browse upcoming events from your favorite clubs. Never miss an
            opportunity to learn and engage.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col gap-4 rounded-xl  bg-neutral  p-6 shadow-sm transition-all hover:shadow-lg">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 ">
            <FaUserPlus className="text-purple-500 " />
          </div>
          <h3 className="text-lg font-bold ">Join the Fun</h3>
          <p className="text-sm text-base-300  leading-normal">
            Join clubs or events with just a few clicks. Connect, participate,
            and grow together.
          </p>
        </div>

        <div className="flex flex-col gap-4 rounded-xl   bg-neutral  p-6 shadow-sm transition-all hover:shadow-lg">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
            <BsFillSendFill className="text-xl text-orange-500 "></BsFillSendFill>
          </div>
          <h3 className="text-lg font-bold">Connect & Grow</h3>
          <p className="text-sm text-base-300  leading-normal">
            Join clubs or events with just a few clicks. Connect, participate,
            and grow together.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default HowClubWork;
