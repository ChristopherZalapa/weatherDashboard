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
		<div className='bg-white text-center dark:text-black \ max-w-2xl text-gray-900 shadow-md p-6 rounded-lg border-gray-300 mx-auto'>
			<div className=''>
				<h1 className=' font-bold text-3xl'>{displayCity}</h1>
			</div>

			<h2 className=' mt-6 text-9xl self-center inline-flex items-center justify-center h-24 w-24'>
				{icon}
			</h2>
			<div className='flex justify-center items-center space-x-3 mt-4'>
				<p className=' font-medium text-3xl flex  justify-center'>
					{displayTemp}

					{isFahrenheit ? <RiFahrenheitFill /> : <RiCelsiusFill />}
				</p>
				<p className=''>{displayDescription}</p>
			</div>

			<div className='flex justify-between text-lg mt-6 px-20'>
				<p className='inline-flex text-center justify-center items-center'>
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
