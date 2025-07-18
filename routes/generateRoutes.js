import express from "express";
import {
  generateText,
  generateFromImage,
  generateFromDocument,
  generateFromAudio,
  generateChat,
} from "../controllers/generateController.js";

const router = express.Router();

export default (upload, fs) => {
  // Route buat chat
  router.post("/api/chat", generateChat);

  // Route buat generate text
  router.post("/generate-text", generateText);

  // Route buat generate dari image
  router.post("/generate-from-image", upload.single("image"), (req, res) =>
    generateFromImage(req, res, fs)
  );

  // Route buat generate dari document
  router.post(
    "/generate-from-document",
    upload.single("document"),
    (req, res) => generateFromDocument(req, res, fs)
  );

  // route buat generate dari audio
  router.post("/generate-from-audio", upload.single("audio"), (req, res) =>
    generateFromAudio(req, res, fs)
  );

  return router;
};
