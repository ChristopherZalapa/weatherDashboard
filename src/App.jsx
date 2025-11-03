import { useState } from "react";
// import axios from "axios";
import { RiseLoader } from "react-spinners";
import { LuSun, LuMoon } from "react-icons/lu";

export default function App() {
	// const [weather, setWeather] = useState(null);
	// const [error, setError] = useState(null);
	// const [loading, setLoading] = useState(true);
	// const city = "Los Angeles";

	// useEffect(() => {
	// 	const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
	// 	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

	// 	const fetchWeather = async () => {
	// 		try {
	// 			const response = await axios.get(url);
	// 			setLoading(true);
	// 			console.log(response.data);
	// 			setWeather(response.data);
	// 		} catch (error) {
	// 			setError(error.message);
	// 		} finally {
	// 			setLoading(false);
	// 		}
	// 	};
	// 	fetchWeather();
	// }, []);

	// if (loading) return <RiseLoader />;
	// if (error) return <p>{error}</p>;
	// if (!weather) return <p>No Weather Data!</p>;
	const [darkMode, setDarkMode] = useState(false);

	function toggleSwitch(mode) {
		setDarkMode(mode);
	}
	return (
		<>
			<div
				className={`${
					darkMode ? "dark" : ""
				} bg-white dark:bg-zinc-800 grid place-items-center h-screen w-full`}
			>
				<div className='bg-zinc-100 dark:bg-zinc-700 p-2 rounded-xl'>
					<button
						className='bg-transparent p-3 hover:bg-zinc-200 dark:hover:bg-zinc-100/10 rounded-lg text-black dark:text-white'
						onClick={() => toggleSwitch(false)}
					>
						<LuSun />
					</button>
					<button
						className='bg-transparent p-3 hover:bg-zinc-200 dark:hover:bg-zinc-100/10 rounded-lg text-black dark:text-white'
						onClick={() => toggleSwitch(true)}
					>
						<LuMoon />
					</button>
				</div>
			</div>
		</>
	);
}
