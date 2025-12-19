import React from 'react';
import { Link } from 'react-router';

const ClubCard = ({club}) => {

    return (
        <>
        <div
          className="group bg-white  rounded-xl relative transition-all duration-500  sm:h-70 h-50 flex items-center justify-center hover:scale-102 ease-in-out "
          style={{
            backgroundImage:
              `url(${club?.bannerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className=" absolute bottom-0 p-3 rounded-b-xl backdrop-blur-sm bg-black/50 w-full ">
          <div className='truncate'>
              <Link to={`/clubs/${club?._id}`} className="text-secondary-content font-medium  text-sm sm:text-base hover:underline inline-block cursor-pointer capitalize ">
              {club?.clubName}
            </Link>
          </div>
            <h6 className=" text-secondary-content capitalize text-sm">{club?.location}</h6>
          </div>
        </div>

      

     

        
     


       
       

        
        </>
    );
};

export default ClubCard;