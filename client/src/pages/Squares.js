import React from 'react'
import Weather from '../widgets/Weather'
import Todo from '../components/Todo'
import Widget3 from '../components/Widget3'

function Squares() {
  return (
    <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                            <div className="flex flex-col flex-wrap sm:flex-row ">
                                <div className="w-full sm:w-1/2 xl:w-1/3">
                                    <div className="mb-4">
                                        {/* start of first square */}
                                        <Weather />
                                    </div>
                                     {/* end of first square */}
                                    <div className="mb-4">
                                        <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
                                            <div className="flex items-center justify-between mb-6">
                                                <div className="flex items-center">
                                                    <span className="rounded-xl relative p-2 bg-blue-100">
                                                        <svg width="25" height="25" viewBox="0 0 2447.6 2452.5" xmlns="http://www.w3.org/2000/svg">
                                                            <g clip-rule="evenodd" fill-rule="evenodd">
                                                                <path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0">
                                                                </path>
                                                                <path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="#2eb67d">
                                                                </path>
                                                                <path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="#ecb22e">
                                                                </path>
                                                                <path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" fill="#e01e5a">
                                                                </path>
                                                            </g>
                                                        </svg>
                                                    </span>
                                                    <div className="flex flex-col">
                                                        <span className="font-bold text-md text-black dark:text-white ml-2">
                                                            Slack
                                                        </span>
                                                        <span className="text-sm text-gray-500 dark:text-white ml-2">
                                                            Slack corporation
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center">
                                                    <button className="border p-1 border-gray-200 rounded-full">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                                                            <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                                            </path>
                                                        </svg>
                                                    </button>
                                                    <button className="text-gray-200">
                                                        <svg width="25" height="25" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z">
                                                            </path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between mb-4 space-x-12">
                                                <span className="px-2 py-1 flex items-center font-semibold text-xs rounded-md text-green-700 bg-green-50">
                                                    COMPLETED
                                                </span>
                                                <span className="px-2 py-1 flex items-center font-semibold text-xs rounded-md text-green-600 border border-green-600 bg-white">
                                                    MEDIUM PRIORITY
                                                </span>
                                            </div>
                                            <div className="block m-auto">
                                                <div>
                                                    <span className="text-sm inline-block text-gray-500 dark:text-gray-100">
                                                        Task done :
                                                        <span className="text-gray-700 dark:text-white font-bold">
                                                            50
                                                        </span>
                                                        /50
                                                    </span>
                                                </div>
                                                <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                                                    <div className="w-full h-full text-center text-xs text-white bg-pink-400 rounded-full">
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-start my-4 space-x-4">
                                                <span className="px-2 py-1 flex items-center text-xs rounded-md font-semibold text-green-500 bg-green-50">
                                                    IOS APP
                                                </span>
                                                <span className="px-2 py-1 flex items-center text-xs rounded-md text-yellow-600 font-semibold bg-yellow-200">
                                                    ANDROID
                                                </span>
                                            </div>
                                            <div className="flex -space-x-2">
                                                <a href="#" className="">
                                                    <img className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="/images/person/1.jpg" alt="Guy" />
                                                </a>
                                                <a href="#" className="">
                                                    <img className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="/images/person/2.jpeg" alt="Max" />
                                                </a>
                                                <a href="#" className="">
                                                    <img className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="/images/person/3.jpg" alt="Charles" />
                                                </a>
                                                <a href="#" className="">
                                                    <img className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white" src="/images/person/4.jpg" alt="Jade" />
                                                </a>
                                            </div>
                                            <span className="px-2 py-1 flex w-36 mt-4 items-center text-xs rounded-md font-semibold text-yellow-500 bg-yellow-100">
                                                DUE DATE : 18 JUN
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {/* start of todo list */}
                                <div className="w-full sm:w-1/2 xl:w-1/3">
                                    <Todo />
                                </div>
                                 
                                <div className="w-full sm:w-1/2 xl:w-1/3">
                                    <div className="mb-4">
                                        <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700">
                                            <div className="flex flex-wrap overflow-hidden">
                                                <div className="w-full rounded shadow-sm">
                                                    <div className="flex items-center justify-between mb-4">
                                                        <div className="text-left font-bold text-xl text-black dark:text-white">
                                                            Dec 2021
                                                        </div>
                                                        <div className="flex space-x-4">
                                                            <button className="p-2 rounded-full bg-blue-500 text-white">
                                                                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                                                                    <path fill="currentColor" d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z">
                                                                    </path>
                                                                </svg>
                                                            </button>
                                                            <button className="p-2 rounded-full bg-blue-500 text-white">
                                                                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                                                                    <path fill="currentColor" d="M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z">
                                                                    </path>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="-mx-2">
                                                        <table className="w-full dark:text-white">
                                                            <tr>
                                                                <th className="py-3 px-2 md:px-3 ">
                                                                    S
                                                                </th>
                                                                <th className="py-3 px-2 md:px-3 ">
                                                                    M
                                                                </th>
                                                                <th className="py-3 px-2 md:px-3 ">
                                                                    T
                                                                </th>
                                                                <th className="py-3 px-2 md:px-3 ">
                                                                    W
                                                                </th>
                                                                <th className="py-3 px-2 md:px-3 ">
                                                                    T
                                                                </th>
                                                                <th className="py-3 px-2 md:px-3 ">
                                                                    F
                                                                </th>
                                                                <th className="py-3 px-2 md:px-3 ">
                                                                    S
                                                                </th>
                                                            </tr>
                                                            <tr className="text-gray-400 dark:text-gray-500">
                                                                <td className="py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500">
                                                                    25
                                                                </td>
                                                                <td className="py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500">
                                                                    26
                                                                </td>
                                                                <td className="py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500">
                                                                    27
                                                                </td>
                                                                <td className="py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500">
                                                                    28
                                                                </td>
                                                                <td className="py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500">
                                                                    29
                                                                </td>
                                                                <td className="py-3 px-2 md:px-3  text-center text-gray-300 dark:text-gray-500">
                                                                    30
                                                                </td>
                                                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center text-gray-800 cursor-pointer">
                                                                    1
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                                    2
                                                                </td>
                                                                <td className="py-3 relative px-1  hover:text-blue-500 text-center cursor-pointer">
                                                                    3
                                                                    <span className="absolute rounded-full h-2 w-2 bg-blue-500 bottom-0 left-1/2 transform -translate-x-1/2">
                                                                    </span>
                                                                </td>
                                                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                                    4
                                                                </td>
                                                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                                    5
                                                                </td>
                                                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                                    6
                                                                </td>
                                                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                                    7
                                                                </td>
                                                                <td className="py-3 px-2 md:px-3 md:px-2 relative lg:px-3 hover:text-blue-500 text-center cursor-pointer">
                                                                    8
                                                                    <span className="absolute rounded-full h-2 w-2 bg-yellow-500 bottom-0 left-1/2 transform -translate-x-1/2">
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                                    9
                                                                </td>
                                                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                                    10
                                                                </td>
                                                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                                    11
                                                                </td>
                                                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                                    12
                                                                </td>
                                                                <td className="py-3 px-2 md:px-3  text-center text-white cursor-pointer">
                                                                    <span className="p-2 rounded-full bg-blue-500">
                                                                        13
                                                                    </span>
                                                                </td>
                                                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                                    14
                                                                </td>
                                                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                                    15
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                                    16
                                                                </td>
                                                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                                    17
                                                                </td>
                                                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                                    18
                                                                </td>
                                                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                                    19
                                                                </td>
                                                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                                    20
                                                                </td>
                                                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                                    21
                                                                </td>
                                                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                                    22
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                                    23
                                                                </td>
                                                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                                    24
                                                                </td>
                                                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 relative text-center cursor-pointer">
                                                                    25
                                                                    <span className="absolute rounded-full h-2 w-2 bg-red-500 bottom-0 left-1/2 transform -translate-x-1/2">
                                                                    </span>
                                                                </td>
                                                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                                    26
                                                                </td>
                                                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                                    27
                                                                </td>
                                                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                                    28
                                                                </td>
                                                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                                    29
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                                    30
                                                                </td>
                                                                <td className="py-3 px-2 md:px-3  hover:text-blue-500 text-center cursor-pointer">
                                                                    31
                                                                </td>
                                                                <td>
                                                                </td>
                                                                <td>
                                                                </td>
                                                                <td>
                                                                </td>
                                                                <td>
                                                                </td>
                                                                <td>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
                                            <p className="font-bold text-md text-black dark:text-white">
                                                Messages
                                            </p>
                                            <ul>
                                                <li className="flex items-center my-6 space-x-2">
                                                    <a href="#" className="block relative">
                                                        <img alt="profil" src="/images/person/1.jpg" className="mx-auto object-cover rounded-full h-10 w-10 " />
                                                    </a>
                                                    <div className="flex flex-col">
                                                        <span className="text-sm text-gray-900 font-semibold dark:text-white ml-2">
                                                            Charlie Rabiller
                                                        </span>
                                                        <span className="text-sm text-gray-400 dark:text-gray-300 ml-2">
                                                            Hey John ! Do you read the NextJS doc ?
                                                        </span>
                                                    </div>
                                                </li>
                                                <li className="flex items-center my-6 space-x-2">
                                                    <a href="#" className="block relative">
                                                        <img alt="profil" src="/images/person/5.jpg" className="mx-auto object-cover rounded-full h-10 w-10 " />
                                                    </a>
                                                    <div className="flex flex-col">
                                                        <span className="text-sm text-gray-900 font-semibold dark:text-white ml-2">
                                                            Marie Lou
                                                        </span>
                                                        <span className="text-sm text-gray-400 dark:text-gray-300 ml-2">
                                                            No I think the dog is better...
                                                        </span>
                                                    </div>
                                                </li>
                                                <li className="flex items-center my-6 space-x-2">
                                                    <a href="#" className="block relative">
                                                        <img alt="profil" src="/images/person/6.jpg" className="mx-auto object-cover rounded-full h-10 w-10 " />
                                                    </a>
                                                    <div className="flex flex-col">
                                                        <span className="text-sm text-gray-900 font-semibold dark:text-white ml-2">
                                                            Ivan Buck
                                                        </span>
                                                        <span className="text-sm text-gray-400 dark:text-gray-300 ml-2">
                                                            Seriously ? haha Bob is not a children !
                                                        </span>
                                                    </div>
                                                </li>
                                                <li className="flex items-center my-6 space-x-2">
                                                    <a href="#" className="block relative">
                                                        <img alt="profil" src="/images/person/7.jpg" className="mx-auto object-cover rounded-full h-10 w-10 " />
                                                    </a>
                                                    <div className="flex flex-col">
                                                        <span className="text-sm text-gray-900 font-semibold dark:text-white ml-2">
                                                            Marina Farga
                                                        </span>
                                                        <span className="text-sm text-gray-400 dark:text-gray-300 ml-2">
                                                            Do you need that deisgn ?
                                                        </span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
  )
}

export default Squares