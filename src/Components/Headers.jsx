import { LuSun, LuMoon } from "react-icons/lu";
import { RiFahrenheitFill, RiCelsiusFill } from "react-icons/ri";

export default function Headers({
	darkMode,
	isFahrenheit,
	toggleDarkMode,
	toggleTemperature,
}) {
	return (
		<>
			<div className='flex justify-between items-center mb-8'>
				<h1 className='text-2xl font-bold dark:text-white'>Weather App</h1>
				<div className='flex gap-3'>
					<button
						className='bg-zinc-200 dark:bg-zinc-700 p-3 hover:bg-zinc-100 dark:hover:bg-zinc-600 rounded-lg text-black dark:text-white transition-colors shadow-md'
						onClick={toggleTemperature}
					>
						{isFahrenheit ? (
							<RiFahrenheitFill size={24} />
						) : (
							<RiCelsiusFill size={24} />
						)}
					</button>
					<button
						className='bg-zinc-200 dark:bg-zinc-700 p-3 hover:bg-zinc-100 dark:hover:bg-zinc-600 rounded-lg text-black dark:text-white transition-colors shadow-md'
						onClick={toggleDarkMode}
					>
						{darkMode ? <LuSun size={24} /> : <LuMoon size={24} />}
					</button>
				</div>
			</div>
		</>
	);
}
