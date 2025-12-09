import React from 'react';
import Hero from '../../Components/Home/Hero';
import Categories from '../../Components/Home/Categories';
import FeaturedClub from '../../Components/Home/FeaturedClub';
import UpcomingEvents from '../../Components/Home/UpcomingEvents';

const HomePage = () => {
    return (
        <div>
           <Hero></Hero>
           <Categories></Categories>
           <FeaturedClub></FeaturedClub>
           <UpcomingEvents></UpcomingEvents>
        </div>
    );
};

export default HomePage;