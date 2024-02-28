import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// Initial State
const initialState = {
	tasks: [],
	error: null,
	loading: true,
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	// Actions that make calls to Reducer
	async function getTasks() {
		try {
			const res = await axios.get("/api/v1/tasks");

			dispatch({
				type: "GET_TASKS",
				payload: res.data.data,
			});
		} catch (error) {
			dispatch({
				type: "TASK_ERROR",
				payload: error.res.data.error,
			});
		}
	}

	async function addTask(task) {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		try {
			const res = await axios.post("/api/v1/tasks", task, config);
			dispatch({
				type: "ADD_TASK",
				payload: res.data.data,
			});
		} catch (error) {
			dispatch({
				type: "TASK_ERROR",
				payload: error.res.data.error,
			});
		}
	}

	async function deleteTask(id) {
		try {
			await axios.delete(`/api/v1/tasks/${id}`);
			dispatch({
				type: "DELETE_TASK",
				payload: id,
			});
		} catch (error) {
			dispatch({
				type: "TRANSACTION_ERROR",
				payload: error.res.data.error,
			});
		}
	}

	async function editTask(updatedTask) {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		try {
			const res = await axios.put(
				`/api/v1/tasks/${updatedTask._id}`,
				updatedTask,
				config
			);
			dispatch({
				type: "EDIT_TASK",
				payload: res.data.data,
			});
		} catch (error) {
			dispatch({
				type: "TASK_ERROR",
				payload: error.res.data.error,
			});
		}
	}

	return (
		<GlobalContext.Provider
			value={{
				tasks: state.tasks,
				error: state.error,
				loading: state.loading,
				getTasks,
				addTask,
				deleteTask,
				editTask,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
