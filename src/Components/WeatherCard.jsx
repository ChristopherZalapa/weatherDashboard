import { RiFahrenheitFill, RiCelsiusFill } from "react-icons/ri";
import { IoRainyOutline, IoThunderstormOutline } from "react-icons/io5";
import { CiSun, CiCloudSun, CiCloudDrizzle } from "react-icons/ci";
import { FaRegSnowflake } from "react-icons/fa";
import { WiFog } from "react-icons/wi";

import { VscPercentage } from "react-icons/vsc";

export default function WeatherCard({
	displayCity,
	displayTemp,
	displayHumidity,
	displayDescription,
	displayIconCondition,
	displayWindSpeed,
}) {
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
		<>
			<h1>{displayCity}</h1>

			<p>{displayDescription}</p>
			<h2>{icon}</h2>
			<p>
				{displayHumidity}
				<VscPercentage />
			</p>
			<p>
				{displayTemp}
				<RiCelsiusFill />
			</p>
			<p>{displayWindSpeed}</p>
		</>
	);
}
