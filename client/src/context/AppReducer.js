const appReducer = (state, action) => {
	switch (action.type) {
		case "GET_TASKS":
			return {
				...state,
				loading: false,
				tasks: action.payload,
			};
		case "ADD_TASK":
			return {
				...state,
				tasks: [...state.tasks, action.payload],
			};
		case "DELETE_TASK":
			return {
				...state,
				tasks: state.tasks.filter(
					(task) => task._id !== action.payload
				),
			};
		case "EDIT_TASK":
			return {
				...state,
				tasks: state.tasks.map((task) =>
					task._id === action.payload._id ? action.payload : task
				),
			};
		case "TRANSACTION_ERROR":
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default appReducer;
