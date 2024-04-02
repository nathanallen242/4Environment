// server.js
import dotenv from 'dotenv';
import { fetchDocuments } from './utils/dbUtils.js';

dotenv.config();

const cors = require('cors');
const express = require('express');
const app = express();

// Enable CORS
app.use(cors({
  origin: process.env.LOCAL_HOST,
  credentials: true,
  methods: ['GET', 'POST'], // Add other methods as per requirement
  allowedHeaders: ['Content-Type'] // Add other headers as per requirement
}));


const port = process.env.PORT || 3000;

app.get('/fetch-docs', async (req, res) => {
  try {
      const documents = await fetchDocuments(); // Now fetchDocuments returns a promise
      res.status(200).json({ data: documents });
  } catch (error) {
      console.error("Failed to fetch documents:", error);
      res.status(500).send("Failed to fetch documents");
  }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
