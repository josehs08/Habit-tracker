import React from "react";
import Logo from "../img/Logo.jsx";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className='flex justify-between px-4 mb-4 items-center'>
      <Logo />
      <div className='flex gap-4'>
        <Link
          to='/habit'
          className='text-darker hover:text-bright transition duration-300'
        >
          Habits
        </Link>
        <h3>Login</h3>
      </div>
    </div>
  );
};

export default Navbar;
