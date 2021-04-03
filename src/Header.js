import { useState } from 'react';

const Header = ({playerNo}) => {



	return (
		<header>
			<div className="player">
				<p>Player: {playerNo}</p>
			</div>
			<div className="info">
				<p>Game</p>
			</div>
		</header>
	);
}

export default Header;