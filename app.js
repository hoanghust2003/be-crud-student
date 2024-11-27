const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/studentRoutes');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

// Kết nối MongoDB
mongoose.connect('mongodb+srv://dovanhoang1201:aloaloalo@cluster0.1jpxq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

app.use('/api', studentRoutes);

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
