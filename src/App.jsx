import { useState, useEffect } from "react";
import axios from "axios";
import { RiseLoader } from "react-spinners";

export default function App() {
	const [weather, setWeather] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	const city = "Los Angeles";

	useEffect(() => {
		const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

		const fetchWeather = async () => {
			try {
				const response = await axios.get(url);
				setLoading(true);
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

	return (
		<div>
			<h1>{weather.name}</h1>
		</div>
	);
}
