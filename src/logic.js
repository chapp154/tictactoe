export const logic = {

	moves: {
		player1: [],
		player2: [],
	},

	placeSymbol: (player, fieldEvent) => {

		fieldEvent.target.textContent = player === 1 ? "X" : "O";

	},

	movesMemory: function(currMove, player) {

		this.moves[`player${player}`] = [...this.moves[`player${player}`], currMove];

	},

	checkMatches: function(currMove, player) {
		const ID_TEMPLATE = "abcdefghijklmnopqrstuvwxyz";

		let [y, x] = currMove.split("-");
		y = Math.abs(y);
		let count = 0;
		let playerMatches = 1;

		function checkTeplate(fn, count, direction1, direction2) {
			if(this.moves[`player${player}`].includes(direction1) ||
				this.moves[`player${player}`].includes(direction2)) {

				playerMatches++;
				console.log("has match", playerMatches);

				return fn.call(this, count);
			}
		}


		function leftBottomToTopRight(count) {
			count++;
			const topRightCell = `${y - count}-${ID_TEMPLATE[ID_TEMPLATE.indexOf(x) + count]}`;
			const bottomLeftCell = `${y + count}-${ID_TEMPLATE[ID_TEMPLATE.indexOf(x) - count]}`;

			checkTeplate.call(this, leftBottomToTopRight, count, topRightCell, bottomLeftCell);
			
		}
		leftBottomToTopRight.call(this, count);



		console.log(x, y);
	}
}