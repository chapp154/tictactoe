import Header from "./Header";
import Grid from "./Grid";
import { useState, useEffect } from "react";

function App() {

	let [player, setPlayer] = useState(0);

	const handleMove = () => {

		setPlayer((player) => player === 1 ? 2 : 1);
	}

	console.log("Click", player);

	useEffect(() => {

		

	}, [player]);


	return (
    <div className="App">
		<Header player = {player}/>
		<Grid handleMove = {handleMove}/>
    </div>
  );
}

export default App;
