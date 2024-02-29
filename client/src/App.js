import "./App.css";
import { TaskWrapper } from "./components/TaskWrapper";
import { GlobalProvider } from "./context/GlobalState";

function App() {
	return (
		<GlobalProvider>
			<div className="App">
				<TaskWrapper />
			</div>
		</GlobalProvider>
	);
}

export default App;
