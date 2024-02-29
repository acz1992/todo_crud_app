import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Task = ({ task, toggleComplete, deleteTodo, editTodo }) => {
	return (
		<div className="Task">
			<p
				onClick={() => toggleComplete(task._id)}
				className={`${task.completed ? "completed" : ""}`}
			>
				{task.title}
			</p>
			<div>
				<FontAwesomeIcon
					icon={faPenToSquare}
					onClick={() => {
						editTodo(task);
					}}
				/>
				<FontAwesomeIcon
					icon={faTrash}
					onClick={() => deleteTodo(task._id)}
				/>
			</div>
		</div>
	);
};
