import "./index.css";
import React, { useState } from "react";
function App() {
	const [Display, setDisplay] = useState("");
	const [Result, setResult] = useState("");
	const handleOperator = (e) => {
		const operator = e.target.getAttribute("name");
		let numberA;
		let numberB;
		let result;

		if (operator === "AC") {
			setDisplay("");
		} else if (operator === "delete") {
			setDisplay(Display.substring(0, Display.length - 1));
		} else if (operator == "plus") {
			numberA = Display;
			setDisplay(0);
			console.log("el Display = " + Display, "el numberA= " + numberA);
			numberB = Display;
			console.log("el Display = " + Display, "el numberB= " + numberA);

			result = numberA + numberB;
			console.log("SUPUESTO RESULT" + result); //TODA ESTA LOGICA DE LA SUMA ESTA MAL
		}
	};
	// const handleAC = (e) => {
	// 	setDisplay("");
	// };
	// const handleDel = (e) => {
	// 	setDisplay(Display.substring(0, Display.length - 1));
	// };
	const handleNumber = (e) => {
		setDisplay(Display + e.target.value);
		console.log(e.target);
	};
	return (
		<div className="container">
			<div name="Display">
				<h2> This is a Result: {Display} </h2>
			</div>
			<table>
				<tbody>
					<tr name="FUNCIONES">
						<td>
							<button name="AC" onClick={handleOperator}>
								AC
							</button>
						</td>
						<td>
							<button name="delete" onClick={handleOperator}>
								DEL
							</button>
						</td>
						<td>
							<button name="percentage" onClick={handleOperator}>
								%
							</button>
						</td>
						<td>
							<button name="division" onClick={handleOperator}>
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
							<button name="multiplication" onClick={handleOperator}>
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
							<button name="minus" onClick={handleOperator}>
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
							<button name="plus" onClick={handleOperator}>
								+
							</button>
						</td>
					</tr>
					<tr>
						<td>
							<button value="zero" onClick={handleNumber}>
								0
							</button>
						</td>
						<td>
							<button name="dot" onClick={handleOperator}>
								.
							</button>
						</td>
						<td>
							<button name="equal" onClick={handleOperator}></button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default App;
