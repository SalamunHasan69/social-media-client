import { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import { FaHome, FaPhotoVideo, FaRegComments, FaSlackHash } from "react-icons/fa";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="justify-between mx-auto md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between md:block">
            <div className='flex items-center w-1/4'>
              <Link to='/'>
                <img className='w-24 h-24 p-4 rounded-full' src="/image/logo.png" alt="CoolTube logo" />
              </Link>
              <Link to='/'>
                <h4 className='text-3xl font-semibold text-lime-500'>Cool<span className='bg-lime-500 rounded-md p-[1px] text-white'>Tube</span></h4>
              </Link>
            </div>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
              }`}
          >
            {/* <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-gray-600 hover:text-blue-600">
                <a href="javascript:void(0)">Home</a>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <a href="javascript:void(0)">Blog</a>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <a href="javascript:void(0)">About US</a>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <a href="javascript:void(0)">Contact US</a>
              </li>
            </ul> */}
            <div className='flex justify-center gap-24 w-1/2'>
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
            <div className='w-1/4 flex justify-evenly'>
              <Link to='/login'><button className='btn btn-primary'>Log in</button></Link>
              <button className='btn btn-outline btn-primary'>Log Out</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}