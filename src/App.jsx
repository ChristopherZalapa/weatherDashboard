import axios from "axios";

export default function App() {
	const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
	console.log(apiKey);

	console.log(axios.isCancel("This is working"));

	return (
		<>
			<h1>Weather Dashboard</h1>
		</>
	);
}
