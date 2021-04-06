import { useState } from "react";


function useLogic(player, fieldEvent, currMove) {

	const [moves, setMoves] = useState({
		player1: [],
		player2: [],
	});

	const [symbol, setSymbol] = useState("X");

	const [counter, setCounter] = useState(0);

	const [score, setScore] = useState(1);

	const ID_TEMPLATE = "abcdefghijklmnopqrstuvwxyz";



	setMoves((moves) => moves[`player${player}`] = [...moves[`player${player}`], currMove]);
	setSymbol(() => player === 1 ? "X" : "O");



	fieldEvent.target.textContent = symbol;

	(function() {

		let [y, x] = currMove.split("-");
		y = Math.abs(y);

		(function crossAxis1() {
			setCounter((counter) => counter + 1);

			const topRightCell = `${y - counter}-${ID_TEMPLATE[ID_TEMPLATE.indexOf(x) + counter]}`;
			const bottomLeftCell = `${y + counter}-${ID_TEMPLATE[ID_TEMPLATE.indexOf(x) - counter]}`;

			if(moves[`player${player}`].includes(topRightCell) ||
				moves[`player${player}`].includes(bottomLeftCell)) {

				setScore((score) => score + 1)
				console.log("has match", score);


				return crossAxis1();
			}
			
		})();



	})();
}


export default useLogic;