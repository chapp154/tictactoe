import { useEffect, useState } from "react";



const Grid = ({handleMove}) => {

	let [htmlArr, setHtmlArr] = useState(null);
	let [gridSize, setGridSize] = useState(null)

	useEffect(() => {
		const size = Math.abs(prompt("How big you wish to have your grid? (for 10x10 put in 10)"));
		let tr = [];
		const ID_TEMPLATE = "abcdefghijklmnopqrstuvwxyz";

		for(let i = 0; i < size; i++) {
			let td = [];

			for(let iTd = 0; iTd < size; iTd++) {
				td[iTd] = <td onClick = {handleMove} id = {`${i}-${ID_TEMPLATE[iTd]}`} key = {`${i}${ID_TEMPLATE[iTd]}`}></td>
			}
			
			tr[i] = <tr id = {`${i}`} key={`tr${i.toString()}`}>{td}</tr>;
		}

		setHtmlArr(tr);
		setGridSize(size);

	}, [])
	
	return ( 
		<div className="grid">
			<p>We have a grid of {gridSize}</p>

			<table>
				<tbody>
					{htmlArr}
				</tbody>
			</table>
		</div>
	 );
}
 
export default Grid;