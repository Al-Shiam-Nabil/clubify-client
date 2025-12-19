import React from "react";
import Container from "../../Components/Shared/Container";
import { data, Link, useParams } from "react-router";
import { MdAccessTime } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { RiAlertFill } from "react-icons/ri";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { MoonLoader } from "react-spinners";
import { format } from "date-fns";
import userPhoto from '../../assets/user.png'

const ClubDetailsPage = () => {
    const axiosPublic=useAxiosPublic()
    const {id}=useParams()
  
    const {data:clubDetails={},isLoading:clubDetailsLoading}=useQuery({
        queryKey:['clubDetails'],
        queryFn:async()=>{
            const res=await axiosPublic.get(`/clubs/${id}`)
            return res.data
        }
    })

    if(clubDetailsLoading){
        return  <div className="grid justify-center h-[350px] mt-10">
                    <MoonLoader size={30} speedMultiplier={0.75} color="#22C55E" />
                  </div>
    }
    console.log(clubDetails)
  return (
    <Container>
      <div className="flex items-center gap-x-2 flex-wrap my-10">
        <div>
          {" "}
          <Link
            to="/"
            className="text-gray-500 hover:text-gray-800 cursor-pointer hover:underline"
          >
            Home
          </Link>{" "}
          /
        </div>
        <div>
          <Link
            to="/all-clubs"
            className="text-gray-500 hover:text-gray-800 cursor-pointer hover:underline"
          >
            {" "}
            All Clubs
          </Link>{" "}
          /
        </div>
        <span className="capitalize">{clubDetails?.clubName}</span>
      </div>

      <section className="mb-20">
        <div className="w-full h-[350px]">
          <img
            src={clubDetails?.bannerImage}
            alt={clubDetails?.clubName}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="grid grid-cols-3 gap-10 mt-10 ">
          {/* left */}
          <div className="w-full col-span-full lg:col-span-2 space-y-8">
            <div className="space-y-3 capitalize">
              <h3 className="font-bold text-xl font-primary">
                {clubDetails?.clubName}
              </h3>
              <div className="flex items-center gap-x-5 gap-y-2 flex-wrap-reverse">
                <div className="badge badge-soft badge-secondary">
               {clubDetails?.category}
                </div>
                <p className="flex items-center gap-x-1 text-base-300">
                  <MdAccessTime></MdAccessTime> {format(new Date(clubDetails?.createdAt), "dd  MMMM, yyyy")}
                </p>
              </div>
            </div>

            {/* about the club */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold font-primary">
                About The Club
              </h3>
              <p className="text-base-300">
               {clubDetails?.description}
              </p>
            </div>

            <div className=" space-y-2 ">
              <h3 className="text-lg font-semibold font-primary flex items-center gap-x-1 text-secondary">
                <RiAlertFill className="text-secondary" />
                Need Help?
              </h3>
              <p className="text-base-300">
                Need more information or facing issues with your application?
                Contact our support desk. We are committed to helping you find
                the right club and ensuring a smooth experience for every
                member.
              </p>
            </div>

            <button className="btn btn-md btn-primary shadow-none hover:btn-secondary">
              Join Club
            </button>
          </div>

          {/* right */}
          <div className="w-full col-span-full lg:col-span-1 space-y-5">
            <div className="bg-neutral p-5 rounded-xl space-y-5">
              <div className="flex justify-between items-center gap-x-3">
                <p className="text-base-300 uppercase text-sm font-medium">
                  Status
                </p>
                <div className="badge badge-soft badge-secondary">
                  <div className="status status-secondary animate-bounce"></div>
                  Active
                </div>
              </div>

              {/* membership fee */}
              <div className="space-y-1">
                <p className="text-base-300">Membership Fee</p>
                <h3 className="flex items-center gap-x-1 font-bold text-3xl font-primary">
                 {
                    clubDetails?.membershipFee === 0 ? 'Free' : <><TbCurrencyTaka></TbCurrencyTaka> {clubDetails?.membershipFee}</>
                 }
                  
                </h3>
              </div>

              {/* club manager */}

              <div className="space-y-2">
                <p className="text-base-300">Club Manager</p>
                <div className="flex items-center gap-x-2">
                  <img
                    src={clubDetails?.managerImage ? clubDetails?.managerImage : userPhoto }
                    alt=""
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="capitalize">{clubDetails?.managerName}</p>
                    <p className="text-sm text-secondary">
                    {clubDetails?.managerEmail}
                    </p>
                  </div>
                </div>
              </div>

              {/* location */}
              <div className="space-y-1">
                <p className="text-base-300">Location</p>
                <div className="flex items-center gap-x-1 ">
                  <CiLocationOn></CiLocationOn> <span className="capitalize"> {clubDetails?.location}</span>
                </div>
              </div>
            </div>

            {/* pricing */}

            <div className="bg-secondary/10 p-3 rounded-xl space-y-1">
              <p className="font-semibold">Pricing</p>
              <p className="text-base-300">
                {" "}
                To learn more about our membership plans, please visit our
                Pricing Page. Find the perfect plan that fits your needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default ClubDetailsPage;
