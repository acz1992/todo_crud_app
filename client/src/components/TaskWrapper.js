import React, { useContext, useEffect, useState } from "react";
import { TaskForm } from "./TaskForm";
import { Task } from "./Task";
import { EditTaskForm } from "./EditTaskForm";
import { GlobalContext } from "../context/GlobalState";

export const TaskWrapper = () => {
	const { tasks, getTasks, addTask, deleteTask } = useContext(GlobalContext);

	const [isEditing, setIsEditing] = useState(false);
	const [editingTaskId, setEditingTaskId] = useState(null);

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
	const editForm = (taskId) => {
		setEditingTaskId(taskId);
		setIsEditing(true);
	};

	return (
		<div className="TaskWrapper">
			<h1>Todo App</h1>
			<TaskForm addTodo={addTodo} />
			{tasks.map((task) =>
				task._id === editingTaskId ? (
					<EditTaskForm key={task._id} task={task} />
				) : (
					<Task
						key={task._id}
						task={task}
						deleteTodo={deleteTodo}
						editForm={editForm}
					/>
				)
			)}
		</div>
	);
};

export default TaskWrapper;
