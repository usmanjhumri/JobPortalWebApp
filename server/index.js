import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/connection.js";
dotenv.config();
import UserRoutes from "./routes/UserRoutes.js";
const app = express();
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

app.use(cors());

connectDB(DATABASE_URL);

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use("/user", UserRoutes);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
