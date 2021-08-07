import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Search = ({ handleSearchNote }) => {
	return (
		<div className='search'>
			<FiSearch className='search-icons' size='1.5em' />
			
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='Type to search...'
			/>
		</div>
	);
};

export default Search;
