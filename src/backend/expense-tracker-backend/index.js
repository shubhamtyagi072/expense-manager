const express = require('express');
const mongoose = require('mongoose')
const helmet = require('helmet')
const morgan = require('morgan')


mongoose.connect('mongodb://localhost:27017/testdb', {
  useNewUrlParser: 'true',
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("Could not connected to the MongoDB:-" , err)) 

const app = express();
const PORT = process.env.PORT || 5000

/* middleware */
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(helmet())
app.use(morgan('tiny'))

app.use('/api/v1',require('./src/routes/login.js'))

app.listen(PORT,console.log(`Server running on PORT ${PORT}`))