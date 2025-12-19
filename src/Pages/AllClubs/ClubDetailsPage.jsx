import React from "react";
import Container from "../../Components/Shared/Container";
import { Link } from "react-router";
import { MdAccessTime } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { RiAlertFill } from "react-icons/ri";

const ClubDetailsPage = () => {
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
        <span>huihuhueh hrtfhguh huthuh</span>
      </div>

      <section className="mb-20">
        <div className="w-full h-[350px]">
          <img
            src="https://i.ibb.co/sJ6sX7L0/clubify-Hero.jpg"
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="grid grid-cols-3 gap-10 mt-10 ">
          {/* left */}
          <div className="w-full col-span-full lg:col-span-2 space-y-8">
            <div className="space-y-3 capitalize">
              <h3 className="font-bold text-xl font-primary">
                Fulbari sports club
              </h3>
              <div className="flex items-center gap-x-5 gap-y-2 flex-wrap-reverse">
                <div className="badge badge-soft badge-secondary">
                  Art & Music
                </div>
                <p className="flex items-center gap-x-1 text-base-300">
                  <MdAccessTime></MdAccessTime> 05 December, 2024
                </p>
              </div>
            </div>

            {/* about the club */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold font-primary">
                About The Club
              </h3>
              <p className="text-base-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                temporibus voluptatem aut, maxime possimus quibusdam laborum
                doloribus tempore, illo eligendi ratione quisquam magni minus
                recusandae. Modi doloribus asperiores sit similique tempora
                animi illo. Ipsum sapiente fuga quaerat, itaque hic mollitia
                maiores eum praesentium vero saepe voluptatibus similique
                blanditiis enim esse. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Recusandae eius aperiam architecto. Voluptates
                ipsum similique vitae dignissimos reiciendis, laudantium
                adipisci?
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
                  {" "}
                  <TbCurrencyTaka></TbCurrencyTaka> 500{" "}
                </h3>
              </div>

              {/* club manager */}

              <div className="space-y-2">
                <p className="text-base-300">Club Manager</p>
                <div className="flex items-center gap-x-2">
                  <img
                    src="https://i.ibb.co/sJ6sX7L0/clubify-Hero.jpg"
                    alt=""
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="capitalize">Ath Tajrian Rafin</p>
                    <p className="text-sm text-secondary">
                      nabil15-4777@diu.edu.bd
                    </p>
                  </div>
                </div>
              </div>

              {/* location */}
              <div className="space-y-1">
                <p className="text-base-300">Location</p>
                <div className="flex items-center gap-x-1 capitalize">
                  <CiLocationOn></CiLocationOn> Chottogram{" "}
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
