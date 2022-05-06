import React, { useState } from 'react'

function Calc() {
    const [cal, setCal] = useState("");
    const [result, setResult] = useState("");

    const updateCal = (e) => {
        setCal(cal.concat(e.target.name));
    }

    const clear = () => {
        setCal("");
        setResult("");
    }

    const results = () => {
        try {
            setResult(eval(cal).toString());
        }
        catch {
            setResult("Erorr")
        }
    }

    return (
        <div className="mb-4  w-full shadow-lg ">
            <div className="rounded-lg">
                <div className="pt-16 p-5 pb-0 text-gray-800 dark:text-white  text-right text-5xl bg-white dark:bg-gray-700 rounded-t-2xl ">{cal || 0}</div>
                <div className="p-5 text-white text-right text-3xl bg-white  dark:bg-gray-700"><span className="text-orange-400 dark:text-orange-500">{result || ''}</span></div>
                <div className="flex bg-white dark:bg-gray-700 h-24">
                    <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                        <button className="rounded-full h-20 w-20 flex items-center bg-slate-700 dark:bg-[#505050] justify-center shadow-lg hover:border-gray-500 focus:outline-none" name="%" onClick={updateCal}>
                            %
                        </button>
                    </div>

                    <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                        <button className="rounded-full h-20 w-20 flex items-center bg-slate-700 dark:bg-[#505050] justify-center shadow-lg hover:border-gray-500 focus:outline-none" name="(" onClick={updateCal}>
                            (
                        </button>
                    </div>

                    <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                        <button className="rounded-full h-20 w-20 flex items-center bg-slate-700 dark:bg-[#505050] justify-center shadow-lg hover:border-gray-500 focus:outline-none" name=")" onClick={updateCal}>
                            )
                        </button>
                    </div>

                    <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                        <button className="rounded-full h-20 w-20 flex items-center bg-orange-300 dark:bg-orange-500 justify-center shadow-lg hover:border-gray-500 focus:outline-none" name="/" onClick={updateCal}>
                            ÷
                        </button>
                    </div>
                </div>

                <div className="flex items-stretch bg-white  dark:bg-gray-700 h-24 ">
                    <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                        <button className="rounded-full h-20 w-20 flex items-center bg-gray-600 dark:bg-gray-800  justify-center shadow-lg hover:border-gray-500 focus:outline-none" name="7" onClick={updateCal}>
                            7
                        </button>
                    </div>

                    <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                        <button className="rounded-full h-20 w-20 flex items-center bg-gray-600 dark:bg-gray-800  justify-center shadow-lg hover:border-gray-500 focus:outline-none" name="8" onClick={updateCal}>
                            8
                        </button>
                    </div>

                    <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                        <button className="rounded-full h-20 w-20 flex items-center bg-gray-600 dark:bg-gray-800  justify-center shadow-lg hover:border-gray-500 focus:outline-none" name="9" onClick={updateCal}>
                            9
                        </button>
                    </div>

                    <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                        <button className="rounded-full h-20 w-20 flex items-center bg-orange-300 dark:bg-orange-500 justify-center shadow-lg hover:border-gray-500 focus:outline-none" name="*" onClick={updateCal}>
                            ×
                        </button>
                    </div>
                </div>

                <div className="flex items-stretch bg-white  dark:bg-gray-700 h-24">
                    <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                        <button className="rounded-full h-20 w-20 flex items-center bg-gray-600 dark:bg-gray-800  justify-center shadow-lg hover:border-gray-500 focus:outline-none" name="4" onClick={updateCal}>
                            4
                        </button>
                    </div>

                    <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                        <button className="rounded-full h-20 w-20 flex items-center bg-gray-600 dark:bg-gray-800  justify-center shadow-lg hover:border-gray-500 focus:outline-none" name="5" onClick={updateCal}>
                            5
                        </button>
                    </div>

                    <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                        <button className="rounded-full h-20 w-20 flex items-center bg-gray-600 dark:bg-gray-800  justify-center shadow-lg hover:border-gray-500 focus:outline-none" name="6" onClick={updateCal}>
                            6
                        </button>
                    </div>

                    <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                        <button className="rounded-full h-20 w-20 flex items-center bg-orange-300 dark:bg-orange-500 justify-center shadow-lg hover:border-gray-500 focus:outline-none" name="-" onClick={updateCal}>
                            -
                        </button>
                    </div>
                </div>

                <div className="flex items-stretch bg-white  dark:bg-gray-700 h-24">
                    <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                        <button className="rounded-full h-20 w-20 flex items-center bg-gray-600 dark:bg-gray-800  justify-center shadow-lg hover:border-gray-500 focus:outline-none" name="1" onClick={updateCal}>
                            1
                        </button>
                    </div>

                    <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                        <button className="rounded-full h-20 w-20 flex items-center bg-gray-600 dark:bg-gray-800  justify-center shadow-lg hover:border-gray-500 focus:outline-none" name="2" onClick={updateCal}>
                            2
                        </button>
                    </div>

                    <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                        <button className="rounded-full h-20 w-20 flex items-center bg-gray-600 dark:bg-gray-800  justify-center shadow-lg hover:border-gray-500 focus:outline-none" name="3" onClick={updateCal}>
                            3
                        </button>
                    </div>

                    <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                        <button className="rounded-full h-20 w-20 flex items-center bg-orange-300 dark:bg-orange-500 justify-center shadow-lg hover:border-gray-500 focus:outline-none" name="+" onClick={updateCal}>
                            +
                        </button>
                    </div>
                </div>
                <div className="flex items-stretch bg-white  dark:bg-gray-700 h-24 mb-4 rounded-b-2xl">
                    <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                        <button className="rounded-full h-20 w-20 flex items-center bg-gray-600 dark:bg-gray-800  justify-center shadow-lg hover:border-gray-500 focus:outline-none" onClick={clear}>
                            AC
                        </button>
                    </div>

                    <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                        <button className="rounded-full h-20 w-20 flex items-center bg-gray-600 dark:bg-gray-800  justify-center shadow-lg hover:border-gray-500 focus:outline-none" name="0" onClick={updateCal}>
                            0
                        </button>
                    </div>

                    <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                        <button className="rounded-full h-20 w-20 flex items-center bg-gray-600 dark:bg-gray-800  justify-center shadow-lg hover:border-gray-500 focus:outline-none" name="." onClick={updateCal}>
                            .
                        </button>
                    </div>

                    <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                        <button className="rounded-full h-20 w-20 flex items-center bg-orange-300 dark:bg-orange-500 justify-center shadow-lg hover:border-gray-500 focus:outline-none" onClick={results}>
                            =
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}


export default Calc