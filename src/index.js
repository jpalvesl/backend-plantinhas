const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { errors } = require('celebrate');

const routes = require('./routes');

const app = express()

mongoose.connect(process.env.MONGO_URL || `mongodb+srv://omnistack:omnistack@cluster0-6caix.mongodb.net/plantinhas?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())

app.listen(process.env.PORT || 3000)
