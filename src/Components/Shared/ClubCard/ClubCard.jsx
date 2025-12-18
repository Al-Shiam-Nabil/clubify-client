import React from 'react';

const ClubCard = ({club}) => {
  console.log(club)
    return (
        <>
        <div
          className="group bg-white  rounded-xl relative transition-all duration-500  sm:h-80 h-60 flex items-center justify-center hover:scale-102 ease-in-out "
          style={{
            backgroundImage:
              `url(${club?.bannerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className=" absolute bottom-0 p-3 rounded-b-xl backdrop-blur-sm bg-black/50 w-full">
            <h3 className="text-secondary-content font-medium truncate hover:underline inline-block cursor-pointer capitalize">
              {club?.clubName}
            </h3>
            <h6 className=" text-secondary-content capitalize text-sm">{club?.location}</h6>
          </div>
        </div>

      

     

        
     


       
       

        
        </>
    );
};

export default ClubCard;