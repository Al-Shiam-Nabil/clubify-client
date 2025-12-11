import Hero from "../../Components/Home/Hero";
import Categories from "../../Components/Home/Categories";
import FeaturedClub from "../../Components/Home/FeaturedClub";
import UpcomingEvents from "../../Components/Home/UpcomingEvents";
import HowClubWork from "../../Components/Home/HowClubWork";
import ExploreBanner from "../../Components/Home/ExploreBanner";
import WhyJoinClub from "../../Components/Home/WhyJoinClub";

const HomePage = () => {
    
  return (
    <div>
      <Hero></Hero>
      <Categories></Categories>
      <FeaturedClub></FeaturedClub>
      <UpcomingEvents></UpcomingEvents>
      <HowClubWork></HowClubWork>
      <ExploreBanner></ExploreBanner>
      <WhyJoinClub></WhyJoinClub>
    </div>
  );
};

export default HomePage;
