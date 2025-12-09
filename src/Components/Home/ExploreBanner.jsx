import React from "react";
import Container from "../Shared/Container";

const ExploreBanner = () => {
  return (
    <div className="bg-linear-45 from-primary to-primary/70  w-full mt-20  py-12">
      <Container className="flex items-center flex-col md:flex-row-reverse gap-10 relative">
        <div className="w-full md:w-1/2 h-[250px] sm:h-[400px] ">
          <img
            src="https://i.ibb.co.com/7xX9TbLX/explore-Banner.jpg"
            alt="image"
            className="h-full w-full object-cover rounded-xl"
          />
        </div>

        <div className="w-full md:w-1/2 p-6 sm:p-10 lg:p-14  rounded-xl bg-primary/50 space-y-3  md:absolute md:left-8 backdrop-blur-sm">
          <h2 className="text-4xl font-bold text-secondary-content">
            Explore your own better exparience.
          </h2>
          <p className="text-neutral">
            Clubify is a social platform that connects people through shared
            interests and communities. It helps users discover clubs, explore
            events, and engage with like-minded individuals. Whether you want to
            learn, network, or have fun, Clubify makes joining easy.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default ExploreBanner;
