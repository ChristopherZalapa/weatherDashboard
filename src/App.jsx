import { useEffect } from "react";
import axios from "axios";

export default function App() {
	useEffect(() => {
		const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
		const city = "Los Angeles";
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

		axios
			.get(url)
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.log("Error fectching weather data", error);
			});
	}, []);

	return (
		<>
			<h1>Weather Dashboard</h1>
		</>
	);
}
