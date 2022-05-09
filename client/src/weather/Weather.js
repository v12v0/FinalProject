import React, {useEffect, useState} from 'react'
import {appId, apiKeyAlgolia, apiKey} from './Enviroment.js';
import AlgoliaPlaces from 'algolia-places-react';
import CurrentWeather from "./CurrentWeather.js";
import ErrorMessage from "./ErrorMessage.js";

function WeatherComponent() {
	let [error, setError] = useState(false)
	let [currentWeather, setCurrentWeather] = useState({
		temp: '1',
		feels_like: '-1',
		description: 'snowing',
		icon: '50d',
		name: 'Austin, US',
		lat: 30.26,
		lon: -97.74
	});
	
	
	let [url, setUrl] = useState(`https://api.openweathermap.org/data/2.5/weather?lat=${currentWeather.lat}&lon=${currentWeather.lon}&appid=${apiKey}&units=metric`);
	
	useEffect(() => {
		const getWeather = async () => {
			try {
				let res = await fetch(url);
				res = await res.json();
				let {description, icon} = res.weather[0];
				let {temp, feels_like} = res.main;
				setCurrentWeather({
					temp,
					feels_like,
					description,
					icon,
					name: `${res.name}, ${res.sys.country}`,
					lat: res.coord.lat,
					lon: res.coord.lon
				});
			} catch (e) {
				setError(true);
			}
		};
		getWeather();
	}, [url])
	
	return (
		<div className="text-white">
			{error && <ErrorMessage/>}
			<div className="places-input text-gray-800 ">
				<AlgoliaPlaces
					placeholder='Type a city here'
					onChange={({suggestion}) => setUrl(`https://api.openweathermap.org/data/2.5/weather?lat=${suggestion.latlng.lat}&lon=${suggestion.latlng.lng}&appid=${apiKey}&units=metric`)}
					options={{appId, apiKey: apiKeyAlgolia, aroundLatLngViaIP: false}}
				/>
			</div>
			<div className="container mx-auto font-sans md:w-128 w-full rounded-lg overflow-hidden bg-slate-600 dark:bg-gray-900 shadow-lg mt-8">
				
				<CurrentWeather weather={currentWeather}/>
			</div>
		</div>
	);
}

export default WeatherComponent;