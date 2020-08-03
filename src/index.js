const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { errors } = require('celebrate');
const dotenv = require('dotenv');

dotenv.config()

const routes = require('./routes');

const app = express()

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())

app.listen(process.env.PORT || 3000)
