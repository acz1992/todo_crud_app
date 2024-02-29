import React from "react";
import { useState } from "react";

export const EditTaskForm = ({ editTodo, task }) => {
	const [value, setValue] = useState(task.title);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (value.trim() !== "") {
			// Check if value is not an empty string
			editTodo(value, task._id);
			setValue(""); // Clear the value state
		}
	};

	return (
		<form className="TaskForm" onSubmit={handleSubmit}>
			<input
				type="text"
				className="task-input"
				value={value}
				placeholder="Update Task"
				onChange={(e) => setValue(e.target.value)}
			/>
			<button type="submit" className="task-btn">
				Update
			</button>
		</form>
	);
};
