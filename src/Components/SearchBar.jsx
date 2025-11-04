export default function SearchBar() {
	return (
		<section>
			<h1>Type Your City</h1>
			<form>
				<label htmlFor='city-search'>City Name</label>
				<input type='text' />
				<button>Search</button>
			</form>
		</section>
	);
}
