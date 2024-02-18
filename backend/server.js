const express = require("express");
const cors = require("cors");
const qr = require("qrcode");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());



app.post("/generateQR", async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL parameter is required" });
  }

  try {
    const generatedQR = await qr.toDataURL(url, { errorCorrectionLevel: 'H' });
    
    res.send({ generatedQR });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate and save QR code" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
