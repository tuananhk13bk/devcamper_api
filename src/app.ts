import express from "express";
import "reflect-metadata";
import "module-alias/register";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDb from "config/db";
import rootRoute from "./routes";

dotenv.config();

connectDb();

const app = express();

app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.set("port", process.env.PORT || 5000);

app.use("/api/v1", rootRoute);

export default app;
