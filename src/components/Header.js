import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header'>
			<h1>Diary</h1>
            <button
              role="img"
              aria-label="moon"
			  className='dark'
              onClick={() =>
				handleToggleDarkMode(
					(previousDarkMode) => !previousDarkMode
					)
			}
            >
              🌞🌙
            </button>
		</div>
	);
};

export default Header;
