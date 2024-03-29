const express = require("express");
const router = express.Router();
const {
	getTasks,
	addTask,
	deleteTask,
	editTask,
} = require("../controllers/task_controllers");

router.route("/").get(getTasks).post(addTask);
router.route("/:id").delete(deleteTask).put(editTask);

module.exports = router;

/* router.put("/tasks/:id", editTask); */
