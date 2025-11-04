import { useState, useEffect } from "react";
import Headers from "./Components/Headers";
import SearchBar from "./Components/SearchBar";
import axios from "axios";
import { RiseLoader } from "react-spinners";

export default function App() {
	const [weather, setWeather] = useState(null);
	const [city, setCity] = useState("Los Angeles");
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	const [darkMode, setDarkMode] = useState(false);
	const [isFahrenheit, setIsFahrenheit] = useState(true);

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

			const fetchWeather = async () => {
				try {
					setLoading(true);
					setError(null);
					const response = await axios.get(url);
					console.log(`Success: ${city}`, response.data);
					setWeather(response.data);
				} catch (error) {
					setError(`Error fetching ${city}`, error.message);
				} finally {
					setTimeout(() => setLoading(false), 500);
				}
			};
			fetchWeather();
		}
	}, [city]);

	if (loading) return <RiseLoader />;
	if (error) return <p>{error}</p>;
	if (!weather) return <p>No Weather Data!</p>;

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
		<>
			<div
				className={`${
					darkMode ? "dark" : ""
				} bg-white dark:bg-zinc-800 min-h-screen w-full`}
			>
				<div className='container mx-auto px-4 py-8 max-w-4xl'>
					<Headers
						toggleDarkMode={toggleDarkMode}
						toggleTemperature={toggleTemperature}
						darkMode={darkMode}
						isFahrenheit={isFahrenheit}
					/>
					<SearchBar cityChange={cityChange} />
				</div>
			</div>
		</>
	);
}
