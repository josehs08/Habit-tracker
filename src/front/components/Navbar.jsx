import React from "react";
import Logo from "../img/Logo.jsx";

const Navbar = () => {
  return (
    <div className='flex justify-between px-4 mb-4 items-center text-primary'>
      <Logo />
      <div className='flex gap-4'>
        <h3 className='px-4'>Profile</h3>
        <h3 className='px-4'>Settings</h3>
        <h3 className='px-4'>About</h3>
        <h3 className='px-4'>Contact</h3>
        <h3 className='border-2 rounded px-4'>Login</h3>
      </div>
    </div>
  );
};

export default Navbar;
