import express from "express";
import dotenv from "dotenv";
import multer from "multer";
import fs from "fs";
import generateRoutes from "./routes/generateRoutes.js";

dotenv.config();

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(express.json());

app.use("/", generateRoutes(upload, fs));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
