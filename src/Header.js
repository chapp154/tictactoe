import { useState, useEffect } from "react";

const Header = ({fieldEvent, currMove}) => {

	const [player, setPlayer] = useState(1);
	const [moves1, setMoves1] = useState([])

	useEffect(() => {

		if(!fieldEvent) return;

		fieldEvent.target.textContent = player === 1 ? "X" : "O";

		//setMoves({[`player${player}`]: [...moves[`player${player}`], currMove]});
		if(player === 1) {
			setMoves1((moves1) => [...moves1, currMove])

		}

		setPlayer((player) => player === 1 ? 2 : 1);

	}, [fieldEvent]);

	console.log(player, moves1);

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