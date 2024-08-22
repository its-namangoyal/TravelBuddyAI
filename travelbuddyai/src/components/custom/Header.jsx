import React from 'react';
import { Button } from '../ui/button';

function Header() {
  return (
    <div className='p-3 shadow-sm flex justify-between items-center'>
      <img src='./logo.svg' alt='TravelBuddyAI Logo' />
      <Button className='ml-auto'>Sign In</Button>
    </div>
  );
}

export default Header;
