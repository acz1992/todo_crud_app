import React from "react";
import { useState } from "react";

export const TaskForm = ({ addTodo }) => {
	const [value, setValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value.trim()) return; // Prevent adding empty task
		addTodo({ title: value });
		setValue("");
	};
	return (
		<form className="TaskForm" onSubmit={handleSubmit}>
			<input
				type="text"
				className="task-input"
				value={value}
				placeholder="What is the task today?"
				onChange={(e) => setValue(e.target.value)}
			/>
			<button type="submit" className="task-btn" disabled={!value.trim()}>
				Add Task
			</button>
		</form>
	);
};
