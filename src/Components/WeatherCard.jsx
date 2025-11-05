import { RiFahrenheitFill, RiCelsiusFill } from "react-icons/ri";
import { VscPercentage } from "react-icons/vsc";
export default function WeatherCard({
	displayCity,
	displayTemp,
	displayHumidity,
	displayDescription,
	displayWindSpeed,
}) {
	return (
		<>
			<h1>{displayCity}</h1>
			<p>{displayDescription}</p>
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
