import React from 'react';
import Container from '../Shared/Container';
import Heading1 from '../Shared/Headings/Heading1';

const Hero = () => {
    return (
        <Container className="my-10">
<section className=' flex items-center gap-10 relative flex-col lg:flex-row'>
    {/* left side  */}
<div className='w-full sm:h-[400px] lg:h-auto lg:w-1/2'>
    <img src="https://i.ibb.co.com/gM7vkgxP/clubify-Hero.jpg" alt="club image" className='rounded-2xl h-full w-full object-cover' />
</div>

{/* right side */}
<div className='w-full lg:w-1/2 p-5 sm:p-8 lg:p-5 xl:p-8 rounded-xl bg-secondary-content/50 shadow-sm border border-gray-100  backdrop-blur-md lg:absolute lg:right-7 space-y-4 lg:space-y-3 xl:space-y-4'>
{/* <Heading1>Discover Communities. Connect with Purpose.</Heading1> */}
<Heading1>Join clubs meet people and grow together.</Heading1>
<p className='text-base-300'>Clubify is a smart platform that helps you find, join, and manage clubs with ease. From sports and travel to tech and book clubs, Clubify empowers members. </p>

<div className='flex items-center gap-y-3 gap-x-5 flex-wrap'>
    <button className='btn btn-primary shadow-none border-none hover:bg-secondary 
     w-[120px] font-primary'>Join Club</button>
    <button className='btn btn-secondary shadow-none border-none
 hover:bg-primary w-[120px] font-primary'>Create Club</button>
</div>
</div>
</section>
        </Container>
    );
};

export default Hero;