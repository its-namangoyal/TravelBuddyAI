import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className='flex flex-col items-center mx-32 lg:mx-24 xl:mx-16 gap-12'>
      <h1 className='font-extrabold text-[35px] text-center mt-16'>
        <span className='text-[#f56551]'>Discover Your Next Adventure With AI:</span> <br />
        Personalized Itineraries at Your Fingertips
      </h1>
      <p className='text-xl text-gray-500 text-center'>
        Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budgets.
      </p>

      <Link to={'/create-trip'}>
        <Button>Get Started, It's Free</Button>
      </Link>
      <div className="scroll-indicator mt-8">
        <div className="mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>

      <h2 className='font-extrabold text-[35px] text-center mt-16'>Organize it all in one place.</h2>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 w-full px-5'>
        <div className='p-8 bg-gray-100 rounded-md'>
          <h3 className='text-2xl font-semibold'>Hotels</h3>
          <p>Stay at the best hotels around the world for the best prices.</p>
        </div>
        <div className='p-8 bg-gray-100 rounded-md'>
          <h3 className='text-2xl font-semibold flex items-center'>
            Car Rental 
            <span className='ml-2 bg-black text-white text-xs py-0.5 px-1.5 rounded-full'>Coming soon</span>
          </h3>
          <p>Unlock deals on any type of wheels and hit the road.</p>
        </div>
        <div className='p-8 bg-gray-100 rounded-md'>
          <h3 className='text-2xl font-semibold'>Flights</h3>
          <p>Get real-time airfares for anywhere you want to jet off to.</p>
        </div>
        <div className='p-8 bg-gray-100 rounded-md'>
          <h3 className='text-2xl font-semibold'>Restaurants</h3>
          <p>Snag a coveted table at the hottest restaurants.</p>
        </div>
        <div className='p-8 bg-gray-100 rounded-md'>
          <h3 className='text-2xl font-semibold'>Experiences</h3>
          <p>Make reservations for your favorite activities, then make memories.</p>
        </div>
        <div className='p-8 bg-gray-100 rounded-md'>
          <h3 className='text-2xl font-semibold flex items-center'>
            Tours 
            <span className='ml-2 bg-black text-white text-xs py-0.5 px-1.5 rounded-full'>Coming soon</span>
          </h3>
          <p>Get an insider’s perspective on any location or attraction.</p>
        </div>
      </div>

      <div className='mt-16'>
        <h3 className='text-3xl font-bold mb-4 text-center'>Stay Updated</h3>
        <p className='text-lg text-center text-gray-500 mb-4'>Subscribe to our newsletter for the latest travel tips and exclusive deals.</p>
        <div className='flex justify-center'>
          <input
            type='email'
            placeholder='Enter your email'
            className='px-4 py-2 border rounded-l-md focus:outline-none'
          />
          <Button className='rounded-r-md'>Subscribe</Button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className='w-full mt-16 py-8 border-t border-gray-200 items-center flex justify-between'>
        <p className='text-sm text-gray-500'>Made with ❤️ by Naman Goyal</p>
        <p className='text-sm text-gray-500'>© 2024 All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Hero;
