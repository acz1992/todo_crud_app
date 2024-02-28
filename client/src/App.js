import "./App.css";
import { TodoWrapper } from "./components/TodoWrapper";
import { GlobalProvider } from "./context/GlobalState";

function App() {
	return (
		<GlobalProvider>
			<div className="App">
				<TodoWrapper />
			</div>
		</GlobalProvider>
	);
}

export default App;
