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
		let playerMatches = 0;

		let [y, x] = currMove.split("-");
		y = Math.abs(y);
		let count = 0;

		function topRight(count) {
			count++;

			const unitTopRight = `${y - count}-${ID_TEMPLATE[ID_TEMPLATE.indexOf(x) + count]}`;

			if(this.moves[`player${player}`].includes(unitTopRight)) {

				console.log("has match");
				playerMatches++;

				return topRight.call(this, count);
			}
			
		}
		topRight.call(this, count);




		console.log(x, y);
		return x;

	}
}