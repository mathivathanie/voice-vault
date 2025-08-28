import express from "express";
import multer from "multer";
import fetch from "node-fetch";
import fs from "fs";
import FormData from "form-data";
import dotenv from "dotenv";

dotenv.config();
console.log("API Key loaded:", process.env.OPENAI_API_KEY ? "✅ Yes" : "❌ No");
const app = express();
const upload = multer({ dest: "uploads/" });

app.post("/transcribe", upload.single("file"), async (req, res) => {
  try {
    const filePath = req.file.path;

    // Send audio to OpenAI Whisper
    const fd = new FormData();
    fd.append("file", fs.createReadStream(filePath));
    fd.append("model", "whisper-1");

    const response = await fetch("https://api.openai.com/v1/audio/transcriptions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: fd,
    });

    const data = await response.json();
    fs.unlinkSync(filePath); // cleanup

    res.json({ text: data.text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Transcription failed" });
  }
});

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
