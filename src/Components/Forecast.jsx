export default function Forecast({ daysName = [] }) {
	return (
		<div className='bg-white text-center dark:text-black max-w-2xl text-gray-900 shadow-md p-6 rounded-lg border-gray-300 mx-auto flex justify-between items-center'>
			{daysName.map((name, i) => (
				<div key={`${name}${i}`} className=' flex flex-col items-center'>
					{name}
					{/* Icon */}
					{/* Temp */}
				</div>
			))}
		</div>
	);
}
