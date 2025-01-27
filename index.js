const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Simple route to check if the app is working
app.get("/", (req, res) => {
  res.send("Hello, this is a simple API deployed on Vercel!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
