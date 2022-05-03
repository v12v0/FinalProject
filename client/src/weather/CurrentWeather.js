import React from 'react'
import IconWeather from "./IconWeather.js";

function CurrentWeather({weather}) {

	console.log({weather})
	return (

		<div className="current-weather flex items-center justify-between px-6 py-5">
			<div className="flex flex-col md:flex-row items-center">
				<div>
					<div className="text-6xl font-semibold">{Math.round(((weather.temp) * 9/5) + 32)}°F</div>
					<div>Feels like {Math.round(((weather.feels_like) * 9/5) + 32)}°F</div>
				</div>
				<div className="md:mx-5">
					<div className="font-semibold">{weather.description}</div>
					<div>{weather.name}</div>
				</div>
			</div>
			<IconWeather icon={weather.icon}/>
		</div>
	);
}

export default CurrentWeather