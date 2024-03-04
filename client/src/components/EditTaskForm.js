import React from "react";
import { useState } from "react";

export const EditTaskForm = ({ task, editTodo }) => {
	const [value, setValue] = useState(task.title);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (value.trim() !== "") {
			// Check if value is not an empty string
			setValue(e.target.value);
			task.title = value;
			editTodo(task);
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
