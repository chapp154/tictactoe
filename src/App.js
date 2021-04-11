import Controller from "./Controller";
import Grid from "./Grid";
import { useState } from "react";
//import { logic } from "./logic";

function App() {

	const [fieldEvent, setFieldEvent] = useState(false);
	const [currMove, setcurrMove] = useState(null);



	function handleMove(event) {

		if (event.target.innerText) return;


		setFieldEvent(event);
		setcurrMove(event.target.id);

	}

	return (
		<div className="App">
			<Controller fieldEvent={fieldEvent} currMove={currMove} />
			<Grid handleMove={handleMove} />

		</div>
	);
}

export default App;
