import { useState, useEffect } from "react";
import Headers from "./Components/Headers";
import SearchBar from "./Components/SearchBar";
import axios from "axios";
import { RiseLoader } from "react-spinners";

export default function App() {
	const [weather, setWeather] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	const [darkMode, setDarkMode] = useState(true);
	const [isFahrenheit, setIsFahrenheit] = useState(true);
	const city = "Los Angeles";

	useEffect(() => {
		const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

		const fetchWeather = async () => {
			try {
				const response = await axios.get(url);
				setLoading(true);
				console.log(response.data);
				setWeather(response.data);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		};
		fetchWeather();
	}, []);

	if (loading) return <RiseLoader />;
	if (error) return <p>{error}</p>;
	if (!weather) return <p>No Weather Data!</p>;

	function toggleDarkMode() {
		setDarkMode(!darkMode);
	}

	function toggleTemperature() {
		setIsFahrenheit(!isFahrenheit);
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
					<SearchBar />
				</div>
			</div>
		</>
	);
}
