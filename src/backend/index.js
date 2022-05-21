const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: 'true'
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("Could not connected to the MongoDB:-" , err)) 

const app = express();
const PORT = process.env.PORT || 4000

/* middleware */
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cors())

app.use('/api/v1',require('./src/routes/login.js'))

app.listen(PORT,console.log(`Server running on PORT ${PORT}`))