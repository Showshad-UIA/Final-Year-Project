import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CreateContainer, Header } from "./Components";
import MainContainer from "./Components/MainContainer";
function App() {
	return (
		<div className="bg-primary w-screen h-auto flex flex-col">
			<Header></Header>
			<main className="mt-24 p-8 w-full">
				<Routes>
					<Route path="/" element={<MainContainer></MainContainer>}></Route>
					<Route
						path="/createItem"
						element={<CreateContainer></CreateContainer>}
					></Route>
				</Routes>
			</main>
		</div>
	);
}

export default App;
