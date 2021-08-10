import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Search = ({ handleSearchNote }) => {
	return (
		<div className='search'>
			<button className= 'search-button'>
			<FiSearch className='search-icons' size='1.3em' />
			</button>
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='Search'
			/>
		</div>
	);
};

export default Search;
