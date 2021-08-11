import React from 'react';

const Search = ({ handleSearchNote }) => {
	return (
		<div className='search'>
			<div class="cntr-innr">
    <label class="search-label" for="inpt_search">
	<input
			    className='search-bar'
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
			/>
    </label>
  </div>
			
		</div>
	);
};

export default Search;
