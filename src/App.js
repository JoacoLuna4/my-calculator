import React from "react";
import Calculator from "./components/Calculator";
import DarkMode from "./components/DarkMode";

function App() {
	return (
		<>
			<header>
				<DarkMode />
			</header>
			<Calculator />
		</>
	);
}

export default App;
