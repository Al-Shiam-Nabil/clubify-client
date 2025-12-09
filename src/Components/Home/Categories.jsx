import React from "react";
import Container from "../Shared/Container";
import Heading2 from "../Shared/Headings/Heading2";
import Heading3 from "../Shared/Headings/Heading3";
import Marquee from "react-fast-marquee";

const Categories = () => {
  return (
    <Container className="my-20">
             <Heading2>Categories</Heading2>
      <p className="max-w-4xl mx-auto text-center text-base-300 mb-10">
        Explore a wide range of club categories designed for every interest and
        passion. From sports and travel to tech, books, and more, there’s a
        community waiting for you. Find what you love and join a club .
      </p>

      <div className="">
        <div className="">
          {/* <img
            src="https://i.ibb.co.com/n805gv2N/sports-Club.jpg"
            alt="sports club"
            className="h-[300px] w-full"
          />
          <Heading3 className="">Sports Club</Heading3> */}

   
    <Marquee pauseOnHover={true}>
<div
  className=" relative bg-no-repeat bg-cover w-[300px] mx-5 h-[150px] z-0 rounded-xl overflow-hidden"
  style={{
    backgroundImage:
      "url('https://i.ibb.co.com/n805gv2N/sports-Club.jpg')",
  }}
>
  <div className="relative top-0 left-0 w-full h-full z-10 bg-black/10 flex items-center justify-center flex-col gap-5">
    
    <button
      type="button"
      className="py-2.5 px-6 text-sm rounded-lg bg-transparent border border-white text-white cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-white/25 hover:text-white"
    >
    Sports club
    </button>
  </div>
</div>

<div
  className=" relative bg-no-repeat bg-cover  w-[300px] mx-5 h-[150px] z-0 rounded-xl overflow-hidden"
  style={{
    backgroundImage:
      "url('https://i.ibb.co.com/n805gv2N/sports-Club.jpg')",
  }}
>
  <div className="relative top-0 left-0 w-full h-full z-10 bg-black/10 flex items-center justify-center flex-col gap-5">
    
    <button
      type="button"
      className="py-2.5 px-6 text-sm rounded-lg bg-transparent border border-white text-white cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-white/25 hover:text-white"
    >
    Sports club
    </button>
  </div>
</div>

<div
  className=" w-[300px] mx-5 relative bg-no-repeat bg-cover h-[150px] z-0 rounded-xl overflow-hidden"
  style={{
    backgroundImage:
      "url('https://i.ibb.co.com/n805gv2N/sports-Club.jpg')",
  }}
>
  <div className="relative top-0 left-0 w-full h-full z-10 bg-black/10 flex items-center justify-center flex-col gap-5">
    
    <button
      type="button"
      className="py-2.5 px-6 text-sm rounded-lg bg-transparent border border-white text-white cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-white/25 hover:text-white"
    >
    Sports club
    </button>
  </div>
</div>



<div
  className=" w-[300px] mx-5 relative bg-no-repeat bg-cover h-[150px] z-0 rounded-xl overflow-hidden"
  style={{
    backgroundImage:
      "url('https://i.ibb.co.com/n805gv2N/sports-Club.jpg')",
  }}
>
  <div className="relative top-0 left-0 w-full h-full z-10 bg-black/20 backdrop-blur-sm flex items-center justify-center flex-col gap-5">
    
    <button
      type="button"
      className="py-2.5 px-6 text-sm rounded-lg bg-transparent border border-white text-white cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-white/25 hover:text-white"
    >
    Sports club
    </button>
  </div>
</div>


</Marquee>
</div>


        </div>
      
       
     
    </Container>
  );
};

export default Categories;
