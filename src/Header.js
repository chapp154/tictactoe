import { useState, useEffect } from "react";

const Header = ({fieldEvent, currMove}) => {

	const [moves, setMoves] = useState([
		{player1: []},
		{player2: []}
	]);
	const [player, setPlayer] = useState(1);


	useEffect(() => {

		if(!fieldEvent) return;

		fieldEvent.target.textContent = player === 1 ? "X" : "O";

		setMoves((moves) => {
			return moves.map(playerMoves => {
				if(playerMoves.hasOwnProperty(`player${player}`)) {
					return {[`player${player}`]: [...playerMoves[`player${player}`], currMove]};
				}
				return playerMoves;
			}) 
		});

		setPlayer((player) => player === 1 ? 2 : 1);

		console.log("use effect", moves);

	}, [fieldEvent]);

	console.log(moves);

	return (
		<header>
			<div className="player">
				<p>Player: {player}</p>
			</div>
			<div className="info">
				<p>Game: </p>
			</div>
		</header>
	);
}

export default Header;