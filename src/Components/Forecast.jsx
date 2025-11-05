export default function Forecast({ dayName }) {
	return (
		<div className='bg-white text-center dark:text-black \ max-w-2xl text-gray-900 shadow-md p-6 rounded-lg border-gray-300 mx-auto flex justify-between'>
			<div className=''>
				<h1>{dayName}</h1>
				<span>Icon</span>
				<p>Temp</p>
			</div>
			<div className=''>
				<h1>Day</h1>
				<span>Icon</span>
				<p>Temp</p>
			</div>
			<div className=''>
				<h1>Day</h1>
				<span>Icon</span>
				<p>Temp</p>
			</div>
			<div className=''>
				<h1>Day</h1>
				<span>Icon</span>
				<p>Temp</p>
			</div>
			<div className=''>
				<h1>Day</h1>
				<span>Icon</span>
				<p>Temp</p>
			</div>
		</div>
	);
}
