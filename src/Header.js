const Header = ({player}) => {



	return (
		<header>
			<div className="player">
				<p>Player: {player}</p>
			</div>
			<div className="info">
				<p>Game</p>
			</div>
		</header>
	);
}

export default Header;