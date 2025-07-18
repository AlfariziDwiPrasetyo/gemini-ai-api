
# 🧠 Gemini API Chatbot — Hacktive8 AI Productivity & API Integration Submission

A simple Express.js application that integrates with **Google Gemini API** to generate text, analyze images, documents, and audio using AI. This is a submission for the **Hacktive8 Program: AI Productivity and AI API Integration for Developers**.

---

## 🚀 Features

- 🔤 Generate text from prompt
- 🖼️ Analyze and describe uploaded images
- 📄 Analyze content from uploaded documents (e.g., PDF, DOCX)
- 🔊 Transcribe or analyze uploaded audio files
- 💬 Simple chatbot frontend (HTML/JS) for interaction
- 📦 Modular Express.js structure (routes/controllers/utils)

---

## 🔧 Installation

1. Clone the repository:

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory:

```env
GEMINI_API_KEY=your_api_key_here
```

4. Start the server:

```bash
npm run start
```

> You can access the app at: `http://localhost:3000`

---

## 📘 API Endpoints

### `POST /api/chat`

Generate chat based on a message.

**Request:**
```json
{
  "message": "Hello."
}
```

**Response:**
```json
{
  "output": "Hello there! How can i help you!"
}
```

---

### `POST /generate-text`

Generate text based on a prompt.

**Request:**
```json
{
  "prompt": "Explain how photosynthesis works."
}
```

**Response:**
```json
{
  "output": "Photosynthesis is the process by which..."
}
```

---

### `POST /generate-from-image`

Send a prompt with an image.

**Form-Data Fields:**
- `prompt`: Optional (string)
- `image`: Required (file)

**Response:**
```json
{
  "output": "The image shows a city skyline at sunset..."
}
```

---

### `POST /generate-from-document`

Upload document (PDF, DOCX) to be analyzed.

**Form-Data Fields:**
- `document`: Required (file)

**Response:**
```json
{
  "output": "This document discusses the history of..."
}
```

---

### `POST /generate-from-audio`

Upload audio for transcription or analysis.

**Form-Data Fields:**
- `audio`: Required (file)

**Response:**
```json
{
  "output": "The speaker is discussing..."
}
```

---

## ⚠️ Notes

- All uploaded files are **automatically deleted** after processing using `fs.unlinkSync` for cleanliness.
- Make sure your `.env` file is properly set, and that your Gemini API Key is active and unrestricted (for testing).

---

## 📚 Tech Stack

- **Node.js / Express**
- **Google Generative AI API**
- **Multer (file upload)**
- **dotenv**
- **fs (FileSystem)**

---

## 📃 License

This project is for educational purposes under Hacktive8 program. You may fork and modify it for personal or learning use.

---

## 🙌 Acknowledgement

Thanks to [Hacktive8](https://hacktiv8.com) and Google for the learning opportunity and access to Gemini AI.

---
