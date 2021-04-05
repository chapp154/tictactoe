import Header from "./Header";
import Grid from "./Grid";
import { useState, useEffect } from "react";
import { logic } from "./logic";

function App() {

	const [fieldEvent, setFieldEvent] = useState(false);
	const [currMove, setcurrMove] = useState(null);
	const [player, setPlayer] = useState(1);


	const handleMove = (event) => {

		if(event.target.innerText) return;

		setFieldEvent(event);
		setcurrMove(event.target.id);

	}

	useEffect(() => {
		if(fieldEvent) {
			logic.placeSymbol(player, fieldEvent);
			logic.movesMemory(currMove, player);
			logic.checkMatches(currMove, player)

			setPlayer((player) => player === 1 ? 2 : 1);

		}
	}, [fieldEvent]);


	return (
    <div className="App">
		<Header player = {player}/>
		<Grid handleMove = {handleMove}/>

    </div>
  );
}

export default App;
