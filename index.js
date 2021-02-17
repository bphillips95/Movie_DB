const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();
require('dotenv/config')

const movies = require('./routes/movies')

const port = 8000;
  
app.use(express.json())
app.use(cors())
app.use('/movies', movies)

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

const uri = process.env.MONGO_URI;

mongoose.connect(uri, {useNewUrlParser: true,useUnifiedTopology: true})
    .then(() => console.log("MongoDB connected"))
    .catch(() => console.log("DIDN'T CONNECT"))
