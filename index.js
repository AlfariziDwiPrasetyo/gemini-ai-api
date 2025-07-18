import express from "express";
import dotenv from "dotenv";
import multer from "multer";
import fs from "fs";
import generateRoutes from "./routes/generateRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/", generateRoutes(upload, fs));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
