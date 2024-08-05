
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//require('./.env').config();

const MONGO_URI = 'mongodb+srv://krishpachani12:hMOeIkWYxM5IL2GF@cluster1.asyp6il.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1'
const app = express();
app.use(express.json());
app.use(cors());

const apiRoutes = require('./routes/api');  
app.use('/api', apiRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));
