import { RiFahrenheitFill, RiCelsiusFill } from "react-icons/ri";

export default function WeatherCard({
	displayCity,
	displayTemp,
	displayDescription,
	displayWindSpeed,
}) {
	return (
		<>
			<h1>{displayCity}</h1>
			<p>{displayDescription}</p>
			<p>
				{displayTemp}
				<RiCelsiusFill />
			</p>
			<p>{displayWindSpeed}</p>
		</>
	);
}
