const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
	title: {
		type: String,
		trim: true,
		required: [true, "Please add some text"],
	},
	completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("Task", taskSchema);
