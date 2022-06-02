import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CreateContainer, Header, MainContainer } from "./Components";
import { AnimatePresence } from "framer-motion";
function App() {
	return (
		<AnimatePresence>
			<div className="bg-primary w-screen h-auto flex flex-col">
				<Header></Header>
				<main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
					<Routes>
						<Route path="/" element={<MainContainer></MainContainer>}></Route>
						<Route
							path="/createItem"
							element={<CreateContainer></CreateContainer>}
						></Route>
					</Routes>
				</main>
			</div>
		</AnimatePresence>
	);
}

export default App;
