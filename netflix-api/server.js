const express = require('express');
// require('dotenv').config()
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/UserRoutes')
const app = express();

app.use(cors());
app.use(express.json());
mongoose.connect('mongodb+srv://netflix-clone:netflix-clone@cluster0.ev8mu.mongodb.net/netflix-clone?retryWrites=true&w=majority')
.then(()=>{
    console.log('Database Connect')
})

app.use('/api/user',userRoutes);
app.listen(8000,()=>{
    console.log("Server is runing...")
})