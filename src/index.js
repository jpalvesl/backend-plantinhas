const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');

const routes = require('./routes');

const app = express()

mongoose.connect(`mongodb+srv://omnistack:omnistack@cluster0-6caix.mongodb.net/plantinhas?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});


app.use(express.json())
app.use(routes)
app.use(errors())

app.listen(3000)
