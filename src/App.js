import React from "react";
import Cards from "./components/Cards.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";

function App() {
	return (
		<>
			<Header />
			<main>
				<Cards />
			</main>
			<Footer />
		</>
	);
}

export default App;
