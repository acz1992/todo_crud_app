import React from "react";
import { useState } from "react";

export const EditTaskForm = ({ editTask, task }) => {
	const [value, setValue] = useState(task.task);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (value.trim() !== "") {
			// Check if value is not an empty string
			editTask(value, task.id);
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
