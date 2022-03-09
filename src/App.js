import "./index.css";
import React, { useState } from "react";
function App() {
	const [display, setDisplay] = useState("");
	const [result, setResult] = useState("");

	const handleOperator = (e) => {
		const operator = e.target.getAttribute("name");
		let numberA;
		let numberB;

		if (operator) {
			numberA = display;
			setDisplay("");
			console.log("este es A", numberA);
			if (operator == "equal") {
				numberB = display;
				console.log("este es B", numberB);
				console.log("este es A despues de", numberA);
			}
		} //esta logica no esta bien

		if (operator === "AC") {
			setDisplay("");
		} else if (operator === "delete") {
			setDisplay(display.substring(0, display.length - 1));
		}
	};
	// const handleAC = (e) => {
	// 	setDisplay("");
	// };
	// const handleDel = (e) => {
	// 	setDisplay(display.substring(0, display.length - 1));
	// };
	const handleNumber = (e) => {
		setDisplay(display + e.target.value);
	};
	return (
		<div className="container">
			<div name="display">
				<h2> This is a result: {result} </h2>
				<h2> This is a operation: {display} </h2>
			</div>
			<table>
				<tbody>
					<tr name="FUNCIONES">
						<td>
							<button name="AC" onClick={handleOperator} id="operator">
								AC
							</button>
						</td>
						<td>
							<button name="delete" onClick={handleOperator} id="operator">
								DEL
							</button>
						</td>
						<td>
							<button name="percentage" onClick={handleOperator} id="operator">
								%
							</button>
						</td>
						<td>
							<button name="division" onClick={handleOperator} id="operator">
								/
							</button>
						</td>
					</tr>
					<tr>
						<td>
							<button value="7" onClick={handleNumber}>
								7
							</button>
						</td>
						<td>
							<button value="8" onClick={handleNumber}>
								8
							</button>
						</td>
						<td>
							<button value="9" onClick={handleNumber}>
								9
							</button>
						</td>
						<td>
							<button
								name="multiplication"
								onClick={handleOperator}
								id="operator"
							>
								X
							</button>
						</td>
					</tr>
					<tr>
						<td>
							<button value="4" onClick={handleNumber}>
								4
							</button>
						</td>
						<td>
							<button value="5" onClick={handleNumber}>
								5
							</button>
						</td>
						<td>
							<button value="6" onClick={handleNumber}>
								6
							</button>
						</td>
						<td>
							<button name="minus" onClick={handleOperator} id="operator">
								-
							</button>
						</td>
					</tr>
					<tr>
						<td>
							<button value="1" onClick={handleNumber}>
								1
							</button>
						</td>
						<td>
							<button value="2" onClick={handleNumber}>
								2
							</button>
						</td>
						<td>
							<button value="3" onClick={handleNumber}>
								3
							</button>
						</td>
						<td>
							<button name="plus" onClick={handleOperator} id="operator">
								+
							</button>
						</td>
					</tr>
					<tr>
						<td>
							<button value="0" onClick={handleNumber}>
								0
							</button>
						</td>
						<td>
							<button name="dot" onClick={handleOperator}>
								.
							</button>
						</td>
						<td>
							<button name="equal" onClick={handleOperator} id="operator">
								=
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default App;
