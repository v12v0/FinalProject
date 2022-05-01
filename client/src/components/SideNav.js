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
                <div class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" href="#">
                    {/* <span class="text-left">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                            </path>
                        </svg>
                    </span> */}
                    <span class="mx-4 text-sm font-normal">
                        <NavLink to="/Squares">Squares</NavLink>
                    </span>
                </div>
                <div class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" href="#">
                    {/* <span class="text-left">
                        <svg width="20" height="20" fill="currentColor" class="m-auto" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z">
                            </path>
                        </svg>
                    </span> */}
                    <span class="mx-4 text-sm font-normal">
                        <NavLink to="/Messages">Messages</NavLink>
                    </span>
                </div>
                <div class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" href="#">
                    {/* <span class="text-left">
                        <svg fill="currentColor" class="w-20 h-20" viewBox="0 0 2048 1792">
                            <path d="M296.422,384h-80.844C197.906,384,192,398.328,192,416v19.203c0,10.773,1.461,19.836,9.625,25.637
		c1.855,28.457,25.18,51.16,56.48,51.16s51.467-22.703,53.322-51.16c8.164-5.801,8.572-14.863,8.572-25.637V416
		C320,398.328,314.094,384,296.422,384z"/>
                            <path d="M256,0C167.781,0,96,70.141,96,156.359c0,46.516,20.813,90.031,57.219,119.844c1.234,1.172,2.578,2.25,4.031,3.219
		c16.484,11.141,26.328,26.313,26.328,40.578c0,17.672,14.328,32,32,32h80.844c17.672,0,32-14.328,32-32
		c0-14.266,9.844-29.438,26.328-40.578c1.406-0.938,2.703-1.984,3.922-3.125C395.141,246.484,416,202.922,416,156.359
		C416,70.141,344.219,0,256,0z M256,80c-44.109,0-80,35.891-80,80c0,8.844-7.156,16-16,16c-8.844,0-16-7.156-16-16
		c0-61.75,50.25-112,112-112c8.844,0,16,7.156,16,16C272,72.844,264.844,80,256,80z"/>
                        </svg>
                    </span> */}
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