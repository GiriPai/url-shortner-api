const express = require("express");
const http = require("http");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");

const connectDB = require("./config/db");

// Determine the environment
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  dotenv.config({ path: "./config/.env.local" });
} else {
  dotenv.config({ path: "./config/.env" });
}

// Init express
const app = express();

// Connect to DB
connectDB();

// Initialising cors
app.use(cors());

// Initialising helment
app.use(helmet());

// Body Parser
app.use(express.json());

app.get("/", (req, res) => res.send("Hai"));

const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

const mainserver = server.listen(
  PORT,
  console.log(`Server started in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit server
  mainserver.close(() => process.exit(1));
});
