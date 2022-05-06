import React from 'react'
import WeatherComponent from "../weather/Weather"


function weather() {
    return (
        <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
            <div className="mb-6">              
                    <WeatherComponent />              
            </div>
        </div>
    )
}

export default weather