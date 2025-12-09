import React from "react";
import Heading2 from "../Shared/Headings/Heading2";
import Container from "../Shared/Container";
import Heading3 from "../Shared/Headings/Heading3";
import { FaArrowRight } from "react-icons/fa";

const UpcomingEvents = () => {
  return (
    <Container className='mb-20'>
      <Heading2>Upcoming Events</Heading2>
      <p className="max-w-4xl mx-auto text-center text-base-300 mb-10">
        Join our upcoming event to explore new ideas, gain valuable insights,
        and connect with inspiring people. This is a perfect opportunity to
        learn, grow, and move forward together.
      </p>


      <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-neutral shadow rounded-lg group">
  <div className="h-[250px] sm:h-[220px] md:h-[250px] lg:h-[280px] w-full overflow-hidden rounded-t-lg">
      <img src="https://i.ibb.co.com/PsXQ55Px/events.jpg" alt="event image" className="h-full w-full object-cover rounded-t-lg group-hover:scale-105 duration-600 ease-in-out" />
  </div>

    <div className="p-5 space-y-2">
<h3 className=" font-semibold text-lg">New Year Celebration 2026</h3>
<div className="flex justify-between gap-x-8 gap-y-3 flex-wrap">
    <p>Friends Forever Club</p>
    <div className="badge badge-md badge-soft badge-secondary">28 December, 2025</div>


</div>
<p className="text-[15px] text-base-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, nihil. Nisi voluptas facilis, perferendis quisquam debitis exercitationem </p>

<button className="btn btn-primary shadow-none border-none mt-1 hover:btn-secondary">View Details</button>

    </div>
</div>

<div className="bg-neutral shadow rounded-lg group">
  <div className="h-[250px] sm:h-[220px] md:h-[250px] lg:h-[280px] w-full overflow-hidden rounded-t-lg">
      <img src="https://i.ibb.co.com/PsXQ55Px/events.jpg" alt="event image" className="h-full w-full object-cover rounded-t-lg group-hover:scale-105 duration-600 ease-in-out" />
  </div>

    <div className="p-5 space-y-2">
<h3 className=" font-semibold text-lg">New Year Celebration 2026</h3>
<div className="flex justify-between gap-x-8 gap-y-3 flex-wrap">
    <p>Friends Forever Club</p>
    <div className="badge badge-md badge-soft badge-secondary">28 December, 2025</div>


</div>
<p className="text-[15px] text-base-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, nihil. Nisi voluptas facilis, perferendis quisquam debitis exercitationem </p>

<button className="btn btn-primary shadow-none border-none mt-1 hover:btn-secondary">View Details</button>

    </div>
</div>

<div className="bg-neutral shadow rounded-lg group">
  <div className="h-[250px] sm:h-[220px] md:h-[250px] lg:h-[280px] w-full overflow-hidden rounded-t-lg">
      <img src="https://i.ibb.co.com/PsXQ55Px/events.jpg" alt="event image" className="h-full w-full object-cover rounded-t-lg group-hover:scale-105 duration-600 ease-in-out" />
  </div>

    <div className="p-5 space-y-2">
<h3 className=" font-semibold text-lg">New Year Celebration 2026</h3>
<div className="flex justify-between gap-x-8 gap-y-3 flex-wrap">
    <p>Friends Forever Club</p>
    <div className="badge badge-md badge-soft badge-secondary">28 December, 2025</div>


</div>
<p className="text-[15px] text-base-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, nihil. Nisi voluptas facilis, perferendis quisquam debitis exercitationem </p>

<button className="btn btn-primary shadow-none border-none mt-1 hover:btn-secondary">View Details</button>

    </div>
</div>
      </div>

       <div className="grid place-items-center my-10">
              <button className="bg-secondary-content btn rounded-full flex items-center gap-2">View All <FaArrowRight></FaArrowRight></button>
            </div>
    </Container>
  );
};

export default UpcomingEvents;
