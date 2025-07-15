import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

// Importing dotenv to manage environment variables
dotenv.config();

// Creating an instance of express
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json()); // <-- This line is crucial
const PORT = process.env.PORT || 5000;


const __dirname = path.resolve();
app.use("/api/products", productRoutes);

// Serve static files from the frontend build directory in production
if(process.env.NODE_EV === "production") {
	app.use(express.static(path.join(__dirname, "frontend/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	})
}
app.listen(PORT, () => {
	connectDB();
	console.log("Server started at http://localhost:" + PORT);
});
