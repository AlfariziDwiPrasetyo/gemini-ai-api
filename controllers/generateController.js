import model from "../geminiModel/index.js";
import { fileToGenerativePartManual } from "../utils/index.js";

// generate chat

export async function generateChat(req, res) {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({ reply: "Message is required" });
  }

  try {
    const result = await model.generateContent(userMessage);
    const response = await result.response;
    const text = response.text();

    res.json({ reply: text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ reply: "Something went wrong." });
  }
}

// generate text
export async function generateText(req, res) {
  const { prompt } = req.body;
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    res.json({ output: response.text() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Generate dari image
export async function generateFromImage(req, res, fs) {
  const prompt = req.body.prompt || "Describe the image";
  const image = fileToGenerativePartManual(req.file.path, req.file.mimetype);
  try {
    const result = await model.generateContent([prompt, image]);
    const response = await result.response;
    res.json({ output: response.text() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    fs.unlinkSync(req.file.path);
  }
}

// Generate dari document
export async function generateFromDocument(req, res, fs) {
  const document = fileToGenerativePartManual(req.file.path, req.file.mimetype);
  try {
    const result = await model.generateContent([
      "Analyze this document:",
      document,
    ]);
    const response = await result.response;
    res.json({ output: response.text() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    fs.unlinkSync(req.file.path);
  }
}

// Generate dari audio
export async function generateFromAudio(req, res, fs) {
  const audio = fileToGenerativePartManual(req.file.path, req.file.mimetype);
  try {
    const result = await model.generateContent(["Analyze this audio:", audio]);
    const response = await result.response;
    res.json({ output: response.text() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    fs.unlinkSync(req.file.path);
  }
}
