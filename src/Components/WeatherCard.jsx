import { RiFahrenheitFill, RiCelsiusFill } from "react-icons/ri";
import { IoRainyOutline, IoThunderstormOutline } from "react-icons/io5";
import { CiSun, CiCloudSun, CiCloudDrizzle } from "react-icons/ci";
import { FaRegSnowflake } from "react-icons/fa";
import { WiFog } from "react-icons/wi";

import { VscPercentage } from "react-icons/vsc";

export default function WeatherCard({
	displayCity,
	displayTemp,
	isFahrenheit,
	displayHumidity,
	displayDescription,
	displayIconCondition,
	displayWindSpeed,
}) {
	// Weather Icons
	const weatherIcons = {
		Clear: <CiSun />,
		Clouds: <CiCloudSun />,
		Rain: <IoRainyOutline />,
		Snow: <FaRegSnowflake />,
		Thunderstorm: <IoThunderstormOutline />,
		Drizzle: <CiCloudDrizzle />,
		Fog: <WiFog />,
		Haze: <WiFog />,
	};

	const icon = weatherIcons[displayIconCondition] || <CiCloudSun />;

	return (
		<div className='bg-white text-center dark:text-black max-w-2xl text-gray-900 shadow-md p-4 md:p-6 rounded-lg border-gray-300 mx-auto'>
			<div>
				<h1 className='font-bold text-2xl md:text-3xl'>{displayCity}</h1>
			</div>

			<h2 className='mt-4 md:mt-6 text-6xl md:text-9xl inline-flex items-center justify-center h-16 w-16 md:h-24 md:w-24'>
				{icon}
			</h2>

			<div className='flex flex-col md:flex-row justify-center items-center md:space-x-3 mt-4 gap-2'>
				<p className='font-medium text-2xl md:text-3xl flex justify-center items-center gap-1'>
					<span className='inline-block w-16 md:w-20 text-right'>
						{displayTemp}
					</span>
					{isFahrenheit ? <RiFahrenheitFill /> : <RiCelsiusFill />}
				</p>
				<p className='text-base md:text-lg'>{displayDescription}</p>
			</div>

			<div className='flex flex-col md:flex-row justify-center md:justify-between text-base md:text-lg mt-6 gap-3 md:gap-0 md:px-20'>
				<p className='inline-flex justify-center items-center'>
					Humidity &nbsp;
					{displayHumidity}
					<VscPercentage />
				</p>
				<p>
					Wind &nbsp;
					{displayWindSpeed}m/s
				</p>
			</div>
		</div>
	);
}
