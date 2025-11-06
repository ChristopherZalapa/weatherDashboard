import { RiFahrenheitFill, RiCelsiusFill } from "react-icons/ri";

export default function Forecast({
	forecastDays,
	isFahrenheit,
	temperatureFormat,
	convertToFahrenheit,
}) {
	return (
		<div className='bg-white text-center shadow-md p-6 rounded-lg flex justify-between'>
			{forecastDays.map((day, i) => {
				const displayName = day.dayName;

				const displayHighs = isFahrenheit
					? temperatureFormat(convertToFahrenheit(day.high))
					: temperatureFormat(day.high);

				const displayLows = isFahrenheit
					? temperatureFormat(convertToFahrenheit(day.low))
					: temperatureFormat(day.low);

				return (
					<div key={i}>
						<h1>{displayName}</h1>

						<p className='flex items-center justify-center gap-1'>
							High:
							<span className='inline-block w-5 text-right'>
								{displayHighs}
							</span>
							{isFahrenheit ? <RiFahrenheitFill /> : <RiCelsiusFill />}
						</p>
						<p className='flex items-center justify-center gap-1'>
							Low:
							<span className='inline-block w-5 text-right'>{displayLows}</span>
							{isFahrenheit ? <RiFahrenheitFill /> : <RiCelsiusFill />}
						</p>
					</div>
				);
			})}
		</div>
	);
}
