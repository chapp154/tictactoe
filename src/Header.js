import { useState, useEffect } from "react";
import playerWon from "./playerWon";

const Header = ({fieldEvent, currMove}) => {

	const [moves, setMoves] = useState([
		{player1: []},
		{player2: []}
	]);
	const [player, setPlayer] = useState(1);
	const [victory, setVictory] = useState(false);


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
	}, [fieldEvent]);

	useEffect(() => {
		if(!fieldEvent) return;

		console.log(moves, currMove);

		playerWon(currMove, player, moves);

		setPlayer((player) => player === 1 ? 2 : 1);

	}, [moves])


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