const express = require('express');
const app = express();
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorMiddleware');
const postRoutes = require('./routes/postRoutes');
const authRoutes = require('./routes/authRoutes');


app.use(express.json());
require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use('/api/posts', postRoutes);
app.use('/api/auth', authRoutes);


app.use(errorHandler);

  
connectDB();

