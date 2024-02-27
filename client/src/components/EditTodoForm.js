import React from "react";
import { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
	const [value, setValue] = useState(task.task);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (value.trim() !== "") {
			// Check if value is not an empty string
			editTodo(value, task.id);
			setValue(""); // Clear the value state
		}
	};

	return (
		<form className="TodoForm" onSubmit={handleSubmit}>
			<input
				type="text"
				className="todo-input"
				value={value}
				placeholder="Update Task"
				onChange={(e) => setValue(e.target.value)}
			/>
			<button type="submit" className="todo-btn">
				Update
			</button>
		</form>
	);
};
