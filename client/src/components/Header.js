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
                                        <NavLink to="/Messages">Announcements</NavLink>
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