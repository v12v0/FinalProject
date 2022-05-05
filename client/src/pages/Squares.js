import React from 'react'
import Weather from '../widgets/Weather'
import Todo from '../components/Todo'
import Music from '../components/Music'
import Calc from '../components/Calc'
import Calender from '../components/Calender'
import Widget4 from '../components/Widget4'

function Squares() {
    return (
        <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
            <div className="flex flex-col flex-wrap sm:flex-row ">
                <div className="w-full sm:w-1/2 xl:w-1/3">
                    <div className="mb-4">
                        <Weather />
                    </div>
                    <Calc />
                </div>
                <div className="w-full sm:w-1/2 xl:w-1/3">
                    <Todo />
                    <Music />
                </div>
                <div className="w-full sm:w-1/2 xl:w-1/3">
                    <Calender />
                    <Widget4 />
                </div>
            </div>
        </div>
    )
}

export default Squares