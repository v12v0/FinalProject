import React, { useEffect, useState } from 'react'
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

function Widget4() {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const [value, setValue] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => setValue(new Date()), 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <div className="mb-4">
            <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full flex gap-10">
                <Clock value={value} renderNumbers={true} />
                <div class="rounded-t overflow-hidden bg-white text-center w-24 flex-col mt-6">
                    <div class="bg-red-200 text-white py-1">
                    MAY
                    </div>
                    <div class="pt-1 border-l border-r">
                        <span class="text-4xl font-bold">{current.getDate()}</span>
                    </div>
                    <div class="pb-2 px-2 border-l border-r border-b rounded-b flex justify-between">
                        <span class="text-xs font-bold">Fri</span>
                        <span class="text-xs font-bold">{current.getFullYear()}</span>
                    </div>
                </div>
                {/* <h1>Current date is {date}</h1> */}
                {/* <p className="font-bold text-md text-black dark:text-white">
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
                                Do you need that design ?
                            </span>
                        </div>
                    </li>
                </ul> */}
            </div>
        </div>
    )
}

export default Widget4