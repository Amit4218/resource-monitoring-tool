import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
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

app.listen(PORT, () => {
  console.log(`App running at ${PORT}`);
});
