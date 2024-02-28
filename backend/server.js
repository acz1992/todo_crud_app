const path = require("path");

const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

const tasks = require("./routes/tasks");

const app = express();

app.use(express.json());

// If the environment is development, use the morgan middleware for logging
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

// Use the tasks router for all requests to /api/v1/tasks
// NAVIGATE HERE IN BROWSER // NOT JUST TO LOCALHOST:5000
app.use("/api/v1/tasks", tasks);

// If the environment is production, serve the static files from the client/build folder
// and route all other requests to the React app's index.html file
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));

	app.get("*", (req, res) =>
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
	);
}

// Start the server on the specified port
const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`Serrer running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
			.bold
	)
);
