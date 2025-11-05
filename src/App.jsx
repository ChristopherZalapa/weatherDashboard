import { useState, useEffect } from "react";
import Headers from "./Components/Headers";
import SearchBar from "./Components/SearchBar";
import WeatherCard from "./Components/WeatherCard";
import axios from "axios";
import { RiseLoader } from "react-spinners";
import Forecast from "./Components/Forecast";

export default function App() {
	const [weather, setWeather] = useState(null);
	const [city, setCity] = useState("Los Angeles");
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	const [forecastWeather, setForecastWeather] = useState(null);
	const [forecastError, setForecastError] = useState(null);
	const [darkMode, setDarkMode] = useState(false);
	const [isFahrenheit, setIsFahrenheit] = useState(false);

	useEffect(() => {
		if (city.trim() === "") {
			setWeather(null);
			setLoading(false);
			console.log("Add your city");
			return;
		} else {
			const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
			const safeCity = encodeURIComponent(city);
			const url = `https://api.openweathermap.org/data/2.5/weather?q=${safeCity}&appid=${apiKey}&units=metric`;

			const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${safeCity}&appid=${apiKey}&units=metric`;

			const fetchWeather = async () => {
				try {
					setLoading(true);
					setError(null);
					const response = await axios.get(url);
					const forecastResponse = await axios.get(forecastUrl);
					console.log(`Success: ${city}`, response.data);
					console.log(`Success: ${city} forecast`, forecastResponse.data);
					setWeather(response.data);
					setForecastWeather(forecastResponse.data);
				} catch (error) {
					setError(`Error fetching ${city}`, error.message);
					setForecastError(`Error fetching ${city}`, error.message);
				} finally {
					setTimeout(() => setLoading(false), 500);
				}
			};
			fetchWeather();
		}
	}, [city]);

	if (loading) return <RiseLoader />;
	if (error && forecastError) return <p>{error}</p>;
	if (!weather && forecastWeather) return <p>No Weather Data!</p>;

	// WeatherCard Data
	const displayCity = weather.name;

	const displayTempCelsius = weather.main.temp;
	const displayTemp = isFahrenheit
		? temperatureFormat(convertToFahrenheit(displayTempCelsius))
		: temperatureFormat(displayTempCelsius);

	const displayHumidity = weather.main.humidity;
	const displayIconCondition = weather.weather[0].main;

	const displayDescriptionRaw = weather.weather?.[0]?.description ?? "";
	const displayDescription = capitalizeWords(displayDescriptionRaw);

	const displayWindSpeed = weather.wind.speed;

	//Forecast Data
	let dayName = "";

	if (forecastWeather?.list?.length) {
		const forecastTimestamp = forecastWeather.list[1].dt;
		const tzOffset = forecastWeather.list[1].dt;
		const localMs = (forecastTimestamp + tzOffset) * 1000;
		const forecastDate = new Date(localMs);

		const daysOfWeek = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		];

		const dayIndex = forecastDate.getUTCDay();
		dayName = daysOfWeek[dayIndex];
	}

	function capitalizeWords(str = "") {
		return str
			.split(" ")
			.map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
			.join(" ");
	}

	function temperatureFormat(temp) {
		return Math.ceil(temp);
	}

	function convertToFahrenheit(celsius) {
		return (celsius * 9) / 5 + 32;
	}

	function toggleDarkMode() {
		setDarkMode(!darkMode);
	}

	function toggleTemperature() {
		setIsFahrenheit(!isFahrenheit);
	}

	function cityChange(cityName) {
		setCity(cityName);
	}

	return (
		<div
			className={`${
				darkMode ? "dark" : ""
			} bg-gray-100 dark:bg-zinc-800 min-h-screen w-full `}
		>
			<div className='container mx-auto px-4 py-8 max-w-4xl space-y-10'>
				<Headers
					toggleDarkMode={toggleDarkMode}
					toggleTemperature={toggleTemperature}
					darkMode={darkMode}
					isFahrenheit={isFahrenheit}
				/>
				<SearchBar cityChange={cityChange} />
				<WeatherCard
					displayCity={displayCity}
					displayTemp={displayTemp}
					displayHumidity={displayHumidity}
					displayIconCondition={displayIconCondition}
					displayDescription={displayDescription}
					isFahrenheit={isFahrenheit}
					displayWindSpeed={displayWindSpeed}
				/>
				<Forecast dayName={dayName} />
			</div>
		</div>
	);
}
