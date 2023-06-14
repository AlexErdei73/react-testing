// App.js

import React, { useState } from "react";

function App() {
	const [heading, setHeading] = useState("Magnificient Monkeys");

	function handleClick() {
		setHeading("Radical Rhinos");
	}

	return (
		<>
			<button type="button" onClick={handleClick}>
				Click Me
			</button>
			<h1>{heading}</h1>
		</>
	);
}

export default App;
