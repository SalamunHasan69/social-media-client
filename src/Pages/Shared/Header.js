import React from 'react';
import { FaHome, FaPhotoVideo, FaRegComments, FaSlackHash } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (

    <nav className='flex max-w-full justify-between items-center shadow-md px-4 bg-white'>
      <div className='flex items-center w-1/4'>
        <Link to='/'>
          <img className=' w-24 p-4 h-24 rounded-full' src="/image/logo.png" alt="CoolTube logo" />
        </Link>
        <Link to='/'>
          <h4 className='text-3xl font-semibold text-lime-500'>Cool<span className='bg-lime-500 rounded-md p-[1px] text-white'>Tube</span></h4>
        </Link>
      </div>
      <div className='items-stretch hidden md:flex justify-center lg:gap-24 w-1/2'>
        <NavLink
          to='/home'
          className={({ isActive }) =>
            isActive
              ? 'text-primary flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
              : 'flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
          }
        >
          <FaHome className='text-3xl'></FaHome>
        </NavLink>
        {/* <Link to='/home'><FaHome className='text-3xl'></FaHome></Link> */}
        <NavLink
          to='/media'
          className={({ isActive }) =>
            isActive
              ? 'text-primary flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
              : 'flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
          }
        >
          <FaPhotoVideo className='text-3xl'></FaPhotoVideo>
        </NavLink>
        {/* <Link to='/media'><FaPhotoVideo className='text-3xl'></FaPhotoVideo></Link> */}
        <NavLink
          to='/message'
          className={({ isActive }) =>
            isActive
              ? 'text-primary flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
              : 'flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
          }
        >
          <FaRegComments className='text-3xl'></FaRegComments>
        </NavLink>
        {/* <Link to='/message'><FaRegComments className='text-3xl'></FaRegComments></Link> */}
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive
              ? 'text-primary flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
              : 'flex items-center px-4 -mb-1 border-b-2 dark:border-transparent'
          }
        >
          <FaSlackHash className='text-3xl'></FaSlackHash>
        </NavLink>
        {/* <Link to='/about'><FaSlackHash className='text-3xl'></FaSlackHash></Link> */}
      </div>
      <div className='w-1/4 items-stretch hidden md:flex justify-evenly'>
        <Link to='/login'><button className='btn btn-primary'>Log in</button></Link>
        <button className='btn btn-outline btn-primary'>Log Out</button>
      </div>

      <div className='dropdown md:hidden'>
        <button tabIndex={0} className="flex btn-primary rounded-sm justify-end p-2 md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        {/* <div className='w-[400px] absolute'>
            <ul tabIndex={0} className='menubar menu-compact dropdown-content bg-gray-800 w-full p-5 ml-[-360px]'>
              <Link><li className='py-2'>ABOUT</li></Link>
              <Link><li className='py-2'>SKILL</li></Link>
              <Link><li className='py-2'>PORTFOLIO</li></Link>
              <Link><li className='py-2'>CONTACT</li></Link>
            </ul>
          </div> */}
      </div>

    </nav>

  );
};

export default Header;