import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./Context/StateProvider";
import reducer from "./Context/Reducer";
import { initialState } from "./Context/InitialState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<StateProvider initialSate={initialState} reducer={reducer}>
			<App />
		</StateProvider>
	</BrowserRouter>
);

reportWebVitals();
