import React from 'react'
import { NavLink } from "react-router-dom";
import Logout from "../images/logout.svg"
import light from "../images/light.svg"


function SideNav({ user, setUser }) {
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
    }
    return (
        <nav class="mt-6">
            <div>
                <div class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start" href="#">
                    <span class="mx-4 text-sm font-normal">
                        <p>Hello, {user.username}!</p>
                    </span>
                </div>
                <div class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" href="#">
                    <span class="mx-4 text-sm font-normal">
                        <NavLink to="/Squares">Squares</NavLink>
                    </span>
                </div>
                <div class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" href="#">
                    <span class="mx-4 text-sm font-normal">
                        <NavLink to="/Messages">announcements</NavLink>
                    </span>
                </div>
                <div class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" href="#">
                    <span class="mx-4 text-sm font-normal">
                        <NavLink to="/About">About</NavLink>
                    </span>
                </div>
                <div class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" href="#">
                    <span class="text-left">
                    </span>
                    <p class="mx-4 text-sm font-normal cursor-pointer" onClick={handleLogoutClick}>
                        Log Out
                    </p>
                </div>
            </div>
        </nav>
    )
}

export default SideNav