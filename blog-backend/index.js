const express = require('express');
const app = express();
const connectDB = require('./config/db');

app.use(express.json());
require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

  
connectDB();

