export const logic = {

	placeSymbol: (player, fieldEvent) => {

		fieldEvent.target.textContent = player === 1 ? "X" : "O";
		return;
	},
}