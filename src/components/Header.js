import React from 'react';
import { Switch } from 'antd';

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header'>
			<h1>Diary</h1>
			<Switch checkedChildren="🌞" unCheckedChildren="🌙" defaultChecked 
			className='dark'
			onClick={() =>
				handleToggleDarkMode(
					(previousDarkMode) => !previousDarkMode
					)
			}/>
		</div>
	);
};

export default Header;
