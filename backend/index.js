import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./route/auth.route.js";
import authMiddleware from "./middleware/auth.middleware.js";
import userRoutes from "./route/user.routes.js";
import connectDb from "./config/db.config.js";
import { configDotenv } from "dotenv";

configDotenv();

const app = express();
const PORT = process.env.PORT || 3000;

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", authMiddleware, userRoutes);

app.listen(PORT, () => {
  console.log(`App running at ${PORT}`);
});
