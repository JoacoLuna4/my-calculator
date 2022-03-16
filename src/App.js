import "./index.css";
import React, { useState } from "react";
function App() {
	const [display, setDisplay] = useState("");
	const [result, setResult] = useState("");
	const [numberA, setNumberA] = useState("");
	const [numberB, setNumberB] = useState("");
	const [currentOperator, setcurrentOperator] = useState("");

	const handleOperator = (e) => {
		setcurrentOperator(e);
		console.log(currentOperator + " current operator ");
		// if (currentOperator === "AC") {
		// 	setDisplay("");
		// } else if (currentOperator === "delete") {
		// 	setDisplay(display.substring(0, display.length - 1));
		// }
	};

	// const handleNumber = (e) => {
	// 	setDisplay(display + e.target.value);
	// };
	const handleNumber = (e) => {
		if (currentOperator === "") {
			setNumberA(numberA + e.target.value);
			console.log("ESTE ES EL NUMBER A " + numberA);
		} else {
			setNumberB(numberB + e.target.value);
			console.log("este es el number B " + numberB);
		}
	};

	return (
		<div className="container-calc">
			<div name="display" className="container-display">
				<h2 className="display">
					{" "}
					This is a result: {!currentOperator
						? numberA + currentOperator
						: ""}{" "}
				</h2>
				<h2 className="display">
					{" "}
					This is a operation: {currentOperator ? numberA : numberB}{" "}
				</h2>
			</div>

			<div name="container-keys" className="container-keys">
				<button
					name="AC"
					onClick={handleOperator("AC")}
					id="operator"
					className="operator"
				>
					AC
				</button>

				<button
					name="delete"
					onClick={handleOperator("del")}
					id="operator"
					className="operator"
				>
					DEL
				</button>

				<button
					name="percentage"
					onClick={handleOperator("%")}
					id="operator"
					className="operator"
				>
					%
				</button>

				<button
					name="division"
					onClick={handleOperator("/")}
					id="operator"
					className="operator"
				>
					/
				</button>

				<button value="7" onClick={handleNumber} className="numbers">
					7
				</button>

				<button value="8" onClick={handleNumber} className="numbers">
					8
				</button>

				<button value="9" onClick={handleNumber} className="numbers">
					9
				</button>

				<button
					name="multiplication"
					onClick={handleOperator("*")}
					id="operator"
					className="operator"
				>
					X
				</button>

				<button value="4" onClick={handleNumber} className="numbers">
					4
				</button>

				<button value="5" onClick={handleNumber} className="numbers">
					5
				</button>

				<button value="6" onClick={handleNumber} className="numbers">
					6
				</button>

				<button
					name="minus"
					onClick={handleOperator("-")}
					id="operator"
					className="operator"
				>
					-
				</button>

				<button value="1" onClick={handleNumber} className="numbers">
					1
				</button>

				<button value="2" onClick={handleNumber} className="numbers">
					2
				</button>

				<button value="3" onClick={handleNumber} className="numbers">
					3
				</button>

				<button
					name="plus"
					onClick={handleOperator}
					id="operator"
					className="operator"
				>
					+
				</button>

				<button value="0" onClick={handleNumber} className="numbers">
					0
				</button>

				<button name="dot" onClick={handleOperator(".")} className="numbers">
					.
				</button>

				<button
					name="equal"
					onClick={handleOperator}
					id="operator"
					className="operator"
				>
					=
				</button>
			</div>
		</div>
	);
}

export default App;
