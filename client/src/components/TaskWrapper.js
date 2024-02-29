import React, { useContext, useEffect, useState } from "react";
import { TaskForm } from "./TaskForm";
import { Task } from "./Task";
import { EditTaskForm } from "./EditTaskForm";
import { GlobalContext } from "../context/GlobalState";

export const TaskWrapper = () => {
	const { tasks, getTasks, addTask, deleteTask, editTask } =
		useContext(GlobalContext);

	// Get Tasks
	useEffect(() => {
		getTasks();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Add Task
	const addTodo = (task) => {
		addTask(task);
	};

	// Delete Task
	const deleteTodo = (id) => {
		deleteTask(id);
	};

	// Edit Task
	const editTodo = (id) => {
		editTask(id);
	};

	return (
		<div className="TaskWrapper">
			<h1>Todo App</h1>
			<TaskForm addTodo={addTodo} />
			{tasks.map((task) =>
				task.isEditing ? (
					<EditTaskForm
						key={task._id}
						task={task}
						editTodo={editTodo}
					/>
				) : (
					<Task
						key={task._id}
						task={task}
						deleteTodo={deleteTodo}
						editTodo={editTodo}
					/>
				)
			)}
		</div>
	);
};

export default TaskWrapper;
