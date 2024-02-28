const { response } = require("express");
const Task = require("../models/Task");

// Get all tasks
exports.getTasks = async (req, res, next) => {
	try {
		const tasks = await Task.find();
		return res.status(200).json({
			success: true,
			count: tasks.length,
			data: tasks,
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			success: false,
			error: "Server Error",
		});
	}
};

// Add new task
exports.addTask = async (req, res, next) => {
	try {
		const { title } = req.body;

		const task = await Task.create(req.body);
		return res.status(201).json({
			success: true,
			data: task,
		});
	} catch (error) {
		if (error.name === "ValidationError") {
			const messages = Object.values(error.errors).map(
				(val) => val.message
			);

			return res.status(400).json({
				success: false,
				error: messages,
			});
		} else {
			return res.status(500).json({
				success: false,
				error: "Server Error",
			});
		}
	}
};

// Delete a task
exports.deleteTask = async (req, res, next) => {
	try {
		const task = await Task.findById(req.params.id);
		if (!task) {
			return res.status(404).json({
				success: false,
				error: "No task found",
			});
		}
		await task.deleteOne();
		return res.status(200).json({
			success: true,
			data: {},
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			error: "Server Error",
		});
	}
};

// Edit a task
exports.editTask = async (req, res, next) => {
	try {
		const task = await Task.findById(req.params.id);
		if (!task) {
			return res.status(404).json({
				success: false,
				error: "No task found",
			});
		}
		// Update the task with the new data
		task.title = req.body.title;
		// Completed - may cause issues later
		task.completed = req.body.completed;
		await task.save();
		return res.status(200).json({
			success: true,
			data: task,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			error: "Server Error",
		});
	}
};
