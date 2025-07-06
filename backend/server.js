import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

// Importing dotenv to manage environment variables
dotenv.config();

// Creating an instance of express
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json()); // <-- This line is crucial
const PORT = process.env.PORT || 5000;

app.use("/api/products", productRoutes);


app.listen(PORT, () => {
	connectDB();
	console.log("Server started at http://localhost:" + PORT);
});
