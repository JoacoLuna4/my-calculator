import "./index.css";
import React, { useState } from "react";
function App() {
	const [result, setResult] = useState("");
	const [numberA, setNumberA] = useState("");
	const [numberB, setNumberB] = useState("");
	const [currentOperator, setcurrentOperator] = useState("");

	const handleNumber = (e) => {
		if (currentOperator === "") {
			setNumberA(numberA + e);

			console.log("ESTE ES EL NUMBER A " + numberA);
		} else {
			setNumberB(numberB + e);
			console.log("este es el number B " + numberB);
		}
	};
	const handleOperator = (e) => {
		setcurrentOperator(e);
		console.log(e);
	};
	function getResult() {
		switch (currentOperator) {
			case "+":
				setResult(Number(numberA) + Number(numberB));

				break;
			case "-":
				setResult(Number(numberA) - Number(numberB));
				break;
			case "*":
				setResult(Number(numberA) * Number(numberB));
				break;
			case "/":
				setResult(Number(numberA) / Number(numberB));
				break;
			case "%":
				setResult(Number(numberA) % Number(numberB));
				break;
		}
	}
	const allClear = () => {
		setNumberA("");
		setNumberB("");
		setResult("");
		setcurrentOperator("");
	};
	const delNumber = () => {
		if (currentOperator === "") {
			setNumberA(numberA.substring(0, numberA.length - 1));
		} else {
			setNumberB(numberB.substring(0, numberB.length - 1));
		}
	};

	return (
		<div className="container-calc">
			<div name="display" className="container-display">
				<h2 className="result">
					{result ? result : !currentOperator ? numberA : numberB}
				</h2>
				<h2 className="operation">
					{currentOperator ? numberA + currentOperator : ""}
				</h2>
			</div>

			<div name="container-keys" className="container-keys">
				<button name="AC" onClick={allClear} id="operator" className="operator">
					AC
				</button>

				<button
					name="delete"
					onClick={delNumber}
					id="operator"
					className="operator"
				>
					DEL
				</button>

				<button
					name="percentage"
					onClick={() => handleOperator("%")}
					id="operator"
					className="operator"
				>
					%
				</button>

				<button
					name="division"
					onClick={() => handleOperator("/")}
					id="operator"
					className="operator"
				>
					/
				</button>

				<button value="7" onClick={() => handleNumber(7)} className="numbers">
					7
				</button>

				<button value="8" onClick={() => handleNumber(8)} className="numbers">
					8
				</button>

				<button value="9" onClick={() => handleNumber(9)} className="numbers">
					9
				</button>

				<button
					name="multiplication"
					onClick={() => handleOperator("*")}
					id="operator"
					className="operator"
				>
					X
				</button>

				<button value="4" onClick={() => handleNumber(4)} className="numbers">
					4
				</button>

				<button value="5" onClick={() => handleNumber(5)} className="numbers">
					5
				</button>

				<button value="6" onClick={() => handleNumber(6)} className="numbers">
					6
				</button>

				<button
					name="minus"
					onClick={() => handleOperator("-")}
					id="operator"
					className="operator"
				>
					-
				</button>

				<button onClick={() => handleNumber(1)} className="numbers">
					1
				</button>

				<button onClick={() => handleNumber(2)} className="numbers">
					2
				</button>

				<button value="3" onClick={() => handleNumber(3)} className="numbers">
					3
				</button>

				<button
					name="plus"
					onClick={() => handleOperator("+")}
					id="operator"
					className="operator"
				>
					+
				</button>

				<button value="0" onClick={() => handleNumber(0)} className="numbers">
					0
				</button>

				<button
					name="dot"
					onClick={() => handleOperator(".")}
					className="numbers"
				>
					.
				</button>

				<button
					name="equal"
					onClick={getResult}
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
function suma(a, b) {
	return a + b;
}
function resta(a, b) {
	return a - b;
}
suma(resta(2, 1), suma(2, 2));
