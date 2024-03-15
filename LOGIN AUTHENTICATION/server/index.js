const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes')
const {mongoose} = require('mongoose')
const app = express();
const dotenv = require('dotenv').config();


//database connection
mongoose.connect('mongodb+srv://vishalofficial787:AjLjbNGqW9yuuZge@cluster0.c0moqfy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log('MongoDB Connected');
  })
 .catch((error) => {
    console.error(error);
  });

//middleware
app.use(express.json())


 app.use('/', authRoutes)

const port = 8001;
app.listen(port,()=> console.log(`Server is running on port ${port}.`))
