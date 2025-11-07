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
			<div className='flex justify-between items-center mb-6 md:mb-8'>
				<h1 className='text-xl md:text-2xl font-bold dark:text-white'>
					Weather App
				</h1>
				<div className='flex gap-2 md:gap-3'>
					<button
						className='bg-zinc-200 dark:bg-zinc-700 p-2 md:p-3 hover:bg-zinc-100 dark:hover:bg-zinc-600 rounded-lg text-black dark:text-white transition-colors shadow-md'
						onClick={toggleTemperature}
					>
						{isFahrenheit ? (
							<RiFahrenheitFill size={20} className='md:w-6 md:h-6' />
						) : (
							<RiCelsiusFill size={20} className='md:w-6 md:h-6' />
						)}
					</button>
					<button
						className='bg-zinc-200 dark:bg-zinc-700 p-2 md:p-3 hover:bg-zinc-100 dark:hover:bg-zinc-600 rounded-lg text-black dark:text-white transition-colors shadow-md'
						onClick={toggleDarkMode}
					>
						{darkMode ? (
							<LuSun size={20} className='md:w-6 md:h-6' />
						) : (
							<LuMoon size={20} className='md:w-6 md:h-6' />
						)}
					</button>
				</div>
			</div>
		</>
	);
}
