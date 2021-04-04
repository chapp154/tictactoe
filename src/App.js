import Header from "./Header";
import Grid from "./Grid";
import { useState, useEffect } from "react";
import { logic } from "./logic";

function App() {

	let [player, setPlayer] = useState(0);
	let [fieldEvent, setFieldEvent] = useState(false);

	const handleMove = (event) => {

		setPlayer((player) => player === 1 ? 2 : 1);
		setFieldEvent((e) => event);
	}

	useEffect(() => {
		if(fieldEvent) {
			console.log("LOAD");
			logic.placeSymbol(player, fieldEvent);

		}


	}, [player, fieldEvent]);


	return (
    <div className="App">
		<Header player = {player}/>
		<Grid handleMove = {handleMove}/>
    </div>
  );
}

export default App;
