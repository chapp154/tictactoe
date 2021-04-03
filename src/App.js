import Header from "./Header";
import Grid from "./Grid";
import { useState, useEffect } from "react";

function App() {

	let [player, setPlayer] = useState(1);

	const handleMove = () => {

		setPlayer(3);

		console.log("Click", player);
	
	}

	useEffect(() => {

		console.log("New Player from useEfect \n", player);

	}, [player]);

	return (
    <div className="App">
		<Header/>
		<Grid handleMove = {handleMove}/>

    </div>
  );
}

export default App;
