import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";
import userRoutes from "./routes/user.routes.js";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const app = express();

// middlewares
app.use(express.json()); //to parse req.body
app.use(express.urlencoded({ extended: true })); // to parse form data
app.use(cookieParser()); // to parse cookies
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
  connectMongoDB();
});
