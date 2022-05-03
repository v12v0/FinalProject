import React from 'react'
import { NavLink } from "react-router-dom";

function Header({ user, setUser }) {
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
    }
    return (
        <div className='md:hidden'>
            <header class="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40">
                <div class="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
                    <div class="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
                        <div
                            className="flex items-center justify-between space-around h-16 max-w-screen-xl px-4 mx-auto "
                        >
                            <ul
                                className="items-center justify-center hidden space-x-8 text-sm font-medium lg:flex lg:flex-1 lg:w-0"
                            >
                                <li className="relative text-black dark:text-gray-200">
                                    <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-black dark:text-white text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                                        {/* <img src={mapSVG} alt="home icon" className="w-6 h-6 mr-3" /> */}
                                        <NavLink to="/Squares">Dashboard</NavLink>
                                    </div>
                                </li>
                                <li className="relative">
                                    <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-black dark:text-white text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                                        {/* <img src={fishingSVG} alt="home icon" className="w-6 h-6 mr-3 " /> */}
                                        <NavLink to="/Messages">Announcements</NavLink>
                                    </div>
                                </li>
                                <li className="relative">
                                    <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-black dark:text-white text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                                        {/* <img src={hookSVG} alt="home icon" className="w-6 h-6 mr-3 " /> */}
                                        <NavLink to="/About">About</NavLink>
                                    </div>
                                </li>
                                <li className="relative">
                                    <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-black dark:text-white text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                                        {/* <img src={hookSVG} alt="home icon" className="w-6 h-6 mr-3 " /> */}
                                        <p onClick={handleLogoutClick} className="cursor-pointer">Log Out</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* mobile view */}
                        <div className="border-t border-gray-100 lg:hidden text-black dark:text-gray-200">
                            <ul
                                className="flex items-center justify-center p-4 overflow-x-auto text-sm font-medium"
                            >
                                <li className="relative">
                                    <div className="flex items-center text-sm py-4 px-2 h-12 overflow-hidden text-black dark:text-gray-200 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                                        {/* <img src={mapSVG} alt="home icon" className="w-6 h-6 mr-3" /> */}
                                        <NavLink to="/Squares">Dashboard</NavLink>
                                    </div>
                                </li>
                                <li className="relative">
                                    <div className="flex items-center text-sm py-4  px-6 h-12 overflow-hidden text-black dark:text-gray-200 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                                        {/* <img src={fishingSVG} alt="home icon" className="w-6 h-6 mr-3 " /> */}
                                        <NavLink to="/Messages">Messages</NavLink>
                                    </div>
                                </li>
                                <li className="relative">
                                    <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-black dark:text-gray-200 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                                        {/* <img src={hookSVG} alt="home icon" className="w-6 h-6 mr-3 " /> */}
                                        <NavLink to="/About">About</NavLink>
                                    </div>
                                </li>
                                <li className="relative">
                                    <div className="flex items-center text-sm py-4 px-6  h-12 overflow-hidden text-black dark:text-gray-200 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                                        {/* <img src={hookSVG} alt="home icon" className="w-6 h-6 mr-3 " /> */}
                                        <p onClick={handleLogoutClick} className="cursor-pointer">Log Out</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* <div class="container relative left-0 z-50 flex w-3/4 h-auto h-full">
                  <div class="relative flex items-center w-full lg:w-64 h-full group">
                    <div class="absolute z-50 flex items-center justify-center block w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
                      <svg fill="none" class="relative w-5 h-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z">
                        </path>
                      </svg>
                    </div>
                    <svg class="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z">
                      </path>
                    </svg>
                    <input type="text" class="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input" placeholder="Search" />
                    <div class="absolute right-0 hidden h-auto px-2 py-1 mr-2 text-xs text-gray-400 border border-gray-300 rounded-2xl md:block">
                      +
                    </div>
                  </div>
                </div> */}
                        <div class="relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto">
                            {/* <div class="block relative text-gray-200">
                  </div> */}
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header