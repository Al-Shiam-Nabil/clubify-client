import React from "react";
import Container from "../Shared/Container";
import Heading2 from "../Shared/Headings/Heading2";
import Heading3 from "../Shared/Headings/Heading3";

const WhyJoinClub = () => {
  return (
    <Container className="mb-20">
      <Heading2>Why Join a Club</Heading2>

      <div className=" max-w-[700px] mx-auto flex flex-col gap-16 mt-12">
        <div className="flex flex-col sm:flex-row gap-y-5 gap-x-10 ">
          <div className="text-7xl font-bold font-primary text-secondary/50">
            01
          </div>
          <div className="space-y-2">
            <p className="text-lg font-bold">
              Connection & Community
            </p>
            <p className="text-base-300">
              Build real connections with like-minded people and grow together
              in a supportive, inclusive community. Where ideas meet friendships
              and every member belongs.
            </p>
          </div>
        </div>

        <div className="flex flex-col  gap-y-5 sm:flex-row-reverse gap-10 ">
          <div className="text-7xl font-bold font-primary text-secondary/50">
            02
          </div>
          <div className="space-y-2 sm:text-right">
            <p className="text-lg font-bold ">
              Skill Development
            </p>
            <p className="text-base-300">
              In our local club, members learn together through friendly
              activities and shared experiences. It’s a place to build
              confidence, teamwork, and everyday life skills in a fun way
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-y-5 gap-10 ">
          <div className="text-7xl font-bold font-primary text-secondary/50">
            03
          </div>
          <div className="space-y-2">
            <p className="text-lg font-bold ">Exclusive Access</p>
            <p className="text-base-300">
              Get special access to club activities, events, and member-only
              opportunities. Enjoy benefits and experiences designed just for
              our community
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WhyJoinClub;
