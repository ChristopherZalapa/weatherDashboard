import { useState } from "react";
// import axios from "axios";
// import { RiseLoader } from "react-spinners";
import { LuSun, LuMoon } from "react-icons/lu";
import { RiFahrenheitFill, RiCelsiusFill } from "react-icons/ri";

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
	const [isFahrenheit, setIsFahrenheit] = useState(true);

	function toggleDarkMode() {
		setDarkMode(!darkMode);
	}

	function toggleTemperature() {
		setIsFahrenheit(!isFahrenheit);
	}

	// function convertTemperature(temp) {
	// 	return isFahrenheit ? temp : Math.round((temp * 9) / 5 + 32);
	// }
	return (
		<>
			<div
				className={`${
					darkMode ? "dark" : ""
				} bg-white dark:bg-zinc-800 grid place-items-center h-screen w-full`}
			>
				<div className='flex justify-between items-center mb-8'>
					<h1 className='flex justify-between pr-10'>Weather App</h1>

					<div className='bg-zinc-100 dark:bg-zinc-700 p-2 rounded-xl'>
						<button
							className='bg-transparent p-3 hover:bg-zinc-200 dark:hover:bg-zinc-100/10 rounded-lg text-black dark:text-white'
							onClick={toggleTemperature}
						>
							{isFahrenheit ? (
								<RiFahrenheitFill size={24} />
							) : (
								<RiCelsiusFill size={24} />
							)}
						</button>
						<button
							className='bg-transparent p-3 hover:bg-zinc-200 dark:hover:bg-zinc-100/10 rounded-lg text-black dark:text-white'
							onClick={() => toggleDarkMode(false)}
						>
							{darkMode ? <LuSun size={24} /> : <LuMoon size={24} />}
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
