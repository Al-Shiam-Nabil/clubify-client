import { format } from 'date-fns';
import React from 'react';

const EventCard = ({event}) => {
    console.log(event)
    return (
       <div className="bg-neutral shadow rounded-lg group">
                <div className="h-[250px] sm:h-[220px] md:h-[250px] lg:h-[280px] w-full overflow-hidden rounded-t-lg">
                  <img
                    src={event?.eventImage}
                    alt={event?.title}
                    className="h-full w-full object-cover rounded-t-lg group-hover:scale-105 duration-600 ease-in-out"
                  />
                </div>

                <div className="p-5 space-y-2">
                  <h3 className=" font-semibold text-lg capitalize truncate">
                   {event?.title}
                  </h3>
                  <div className="flex justify-between gap-x-8 gap-y-3 flex-wrap">
                    <p className='capitalize'>{event?.clubName}</p>
                    <div className="badge badge-md badge-soft badge-secondary capitalize">
             {format(new Date (event?.eventDate),"dd/MMM/yyyy")}
                    </div>
                  </div>
                  <p className="text-[15px] text-base-300">
                  {event?.description.split('').slice(0,80)}...
                  </p>

                  <button className="btn btn-md btn-primary shadow-none border-none mt-1 hover:btn-secondary">
                    View Details
                  </button>
                </div>
              </div>
    );
};

export default EventCard;