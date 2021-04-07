export const logic = {

	moves: {
		player1: [],
		player2: [],
	},

	placeSymbol: (player, fieldEvent) => fieldEvent.target.textContent = player === 1 ? "X" : "O",

	movesMemory: function(currMove, player) {this.moves[`player${player}`] = [...this.moves[`player${player}`], currMove]},

	checkMatches: function(currMove, player) {
		const ID_TEMPLATE = "abcdefghijklmnopqrstuvwxyz";

		let [y, x] = currMove.split("-");
		y = Math.abs(y);
		let countGlobal = 0;
		let playerMatches = 1;
		let playerWon = false;

		function checkTeplate(fn, count, direction1, direction2) {
			if(this.moves[`player${player}`].includes(direction1) ||
				this.moves[`player${player}`].includes(direction2)) {

				playerMatches++;
				console.log("has match", playerMatches, "count:"+count);

				if(playerMatches >= 4) {
					playerWon = true;
					return;
				}

				return fn.call(this, count);
			} else {
				playerMatches = 1;
				countGlobal = 0;
			}
		}


		(function crossAxis1(count) {
			count++;
			const topRightCell = `${y - count}-${ID_TEMPLATE[ID_TEMPLATE.indexOf(x) + count]}`;
			const bottomLeftCell = `${y + count}-${ID_TEMPLATE[ID_TEMPLATE.indexOf(x) - count]}`;

			checkTeplate.call(this, crossAxis1, count, topRightCell, bottomLeftCell);
			
		}).call(this, countGlobal);

		(function crossAxis2(count) {
			count++;
			const topLeftCell = `${y - count}-${ID_TEMPLATE[ID_TEMPLATE.indexOf(x) - count]}`;
			const bottomRightCell = `${y + count}-${ID_TEMPLATE[ID_TEMPLATE.indexOf(x) + count]}`;

			checkTeplate.call(this, crossAxis2, count, topLeftCell, bottomRightCell);
			
		}).call(this, countGlobal);

		(function xAxis(count) {
			count++;
			const xAxisMinus = `${y}-${ID_TEMPLATE[ID_TEMPLATE.indexOf(x) - count]}`;
			const xAxisPlus = `${y}-${ID_TEMPLATE[ID_TEMPLATE.indexOf(x) + count]}`;

			checkTeplate.call(this, xAxis, count, xAxisMinus, xAxisPlus);
			
		}).call(this, countGlobal);

		(function yAxis(count) {
			count++;
			const yAxisMinus = `${y - count}-${ID_TEMPLATE[ID_TEMPLATE.indexOf(x)]}`;
			const yAxisPlus = `${y + count}-${ID_TEMPLATE[ID_TEMPLATE.indexOf(x)]}`;

			checkTeplate.call(this, yAxis, count, yAxisMinus, yAxisPlus);
			
		}).call(this, countGlobal);



		return playerWon;
	}
}