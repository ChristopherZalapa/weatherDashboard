import { useState } from "react";
import { IoMdSearch } from "react-icons/io";

export default function SearchBar(cityChange) {
	const [inputValue, setInputValue] = useState("");

	function inputText(event) {
		setInputValue(event.target.value);
	}

	return (
		<form className='max-w mx-auto'>
			<label
				htmlFor='default-search'
				className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
			>
				Search
			</label>
			<div className='relative'>
				<div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
					<IoMdSearch className=' w-4 h-4 text-gray-500 dark:text-gray-400 ' />
				</div>
				<input
					type='search'
					value={inputValue}
					onChange={inputText}
					className='block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-black dark:focus:ring-white focus:outline-none'
					placeholder='Search Your City'
					required
				/>
				<button
					type='submit'
					className='dark:bg-zinc-700 p-3 hover:bg-zinc-200 dark:hover:bg-zinc-600 rounded-lg text-black dark:text-white transition-colors absolute end-2.5 bottom-2.5 text-sm px-4 py-2'
				>
					Search
				</button>
			</div>
		</form>
	);
}
