
function playerWon(currMove, player, moves) {
	const ID_TEMPLATE = "abcdefghijklmnopqrstuvwxyz";

	let [y, x] = currMove.split("-");
	y = Math.abs(y);
	let countGlobal = 0;
	let playerMatches = 1;
	let playerWon = false;

	function checkTeplate(fn, count, direction1, direction2) {
		if (moves[player - 1][`player${player}`].includes(direction1) ||
			moves[player - 1][`player${player}`].includes(direction2)) {

			playerMatches++;
			console.log("has match", playerMatches, "count:" + count);

			if (playerMatches >= 4) {
				playerWon = true;
				return;
			}

			return fn();
		} else {
			playerMatches = 1;
			countGlobal = 0;
		}
	}


	(function crossAxis1(count) {
		count++;
		const topRightCell = `${y - count}-${ID_TEMPLATE[ID_TEMPLATE.indexOf(x) + count]}`;
		const bottomLeftCell = `${y + count}-${ID_TEMPLATE[ID_TEMPLATE.indexOf(x) - count]}`;

		checkTeplate(crossAxis1, count, topRightCell, bottomLeftCell);

	})(countGlobal);

	(function crossAxis2(count) {
		count++;
		const topLeftCell = `${y - count}-${ID_TEMPLATE[ID_TEMPLATE.indexOf(x) - count]}`;
		const bottomRightCell = `${y + count}-${ID_TEMPLATE[ID_TEMPLATE.indexOf(x) + count]}`;

		checkTeplate(crossAxis2, count, topLeftCell, bottomRightCell);

	})(countGlobal);

	(function xAxis(count) {
		count++;
		const xAxisMinus = `${y}-${ID_TEMPLATE[ID_TEMPLATE.indexOf(x) - count]}`;
		const xAxisPlus = `${y}-${ID_TEMPLATE[ID_TEMPLATE.indexOf(x) + count]}`;

		checkTeplate(xAxis, count, xAxisMinus, xAxisPlus);

	})(countGlobal);

	(function yAxis(count) {
		count++;
		const yAxisMinus = `${y - count}-${ID_TEMPLATE[ID_TEMPLATE.indexOf(x)]}`;
		const yAxisPlus = `${y + count}-${ID_TEMPLATE[ID_TEMPLATE.indexOf(x)]}`;

		checkTeplate(yAxis, count, yAxisMinus, yAxisPlus);

	})(countGlobal);



	return playerWon;
}

export default playerWon;
