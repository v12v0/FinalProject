import React from "react";
import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import { Button } from "../styles";
// import Square from "../images/square.svg"


function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div>
      {/* <div>
        <Link to="/">Reciplease</Link>
      </div>
      <div>
        <Link to="/new">
          New Recipe
        </Link>

        <button variant="outline" onClick={handleLogoutClick}>
          Logout
        </button>
      </div> */}

<header className="shadow-sm  bg-gray-100 dark:bg-gray-800 text-black dark:text-gray-200 sm:text-red-300">
            <div
                className="flex items-center justify-between space-around h-16 max-w-screen-xl px-4 mx-auto "
            >
                <div className="flex flex-1 w-0 lg:hidden sm:text-center">
                    <NavLink to="/Squares">My Squares</NavLink>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="hidden mb-0 lg:flex">
                        <NavLink to="/">My Squares</NavLink>
                    </div>
                </div>
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
                        <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-black dark:text-gray-200 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                            {/* <img src={mapSVG} alt="home icon" className="w-6 h-6 mr-3" /> */}
                            <NavLink to="/Squares">Squares</NavLink>
                        </div>
                    </li>
                    <li className="relative">
                        <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-black dark:text-gray-200 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
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
                        <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-black dark:text-gray-200 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                            {/* <img src={hookSVG} alt="home icon" className="w-6 h-6 mr-3 " /> */}
                            <p onClick={handleLogoutClick} className="cursor-pointer">Log Out</p>
                        </div>
                    </li>
                </ul>
            </div>
            {/* end ofmobile view */}
        </header>
    </div>
  );
}



export default NavBar;
