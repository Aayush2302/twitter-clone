import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();

// middlewares
app.use(express.json()); //to parse req.body
app.use(express.urlencoded({ extended: true })); // to parse form data
app.use(cookieParser()); // to parse cookies
app.use("/api/auth", authRoutes);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
  connectMongoDB();
});
