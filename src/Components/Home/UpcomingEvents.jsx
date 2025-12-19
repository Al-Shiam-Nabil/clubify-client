import React from "react";
import Heading2 from "../Shared/Headings/Heading2";
import Container from "../Shared/Container";

import { FaArrowRight } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";

import { MoonLoader } from "react-spinners";
import EventCard from "../Shared/EventCard/EventCard";
import { Link } from "react-router";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const UpcomingEvents = () => {
  const axiosPublic=useAxiosPublic()
  const { data: upcomingEvents = [], isLoading: eventsLoading } = useQuery({
    queryKey: ["upcomingEvents", "eventDate"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/upcoming-events`);
      return res.data;
    },
  });

  console.log(upcomingEvents);

  return (
    <Container className="mb-20">
      <Heading2>Upcoming Events</Heading2>
      <p className="max-w-4xl mx-auto text-center text-base-300 mb-10">
        Join our upcoming event to explore new ideas, gain valuable insights,
        and connect with inspiring people. This is a perfect opportunity to
        learn, grow, and move forward together.
      </p>

      {eventsLoading ? (
        <div className="grid justify-center h-[350px] mt-10">
          <MoonLoader size={30} speedMultiplier={0.75} color="#22C55E" />
        </div>
      ) : upcomingEvents.length === 0 ? (
        <h2 className="font-semibold text-center text-xl text-error">
          No upcoming events available now.
        </h2>
      ) : (
        <>
          <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event?._id} event={event}></EventCard>
            ))}
          </div>

          <div className="grid place-items-center my-10">
            <Link to="/all-events" className="bg-secondary-content btn rounded-full flex items-center gap-2">
              View All <FaArrowRight></FaArrowRight>
            </Link>
          </div>
        </>
      )}
    </Container>
  );
};

export default UpcomingEvents;
